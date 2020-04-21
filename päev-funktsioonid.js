$(document).ready(function(){
	$(".viga").hide();
	$(".tulemus").toggle();
	
	
	//Kaart
	var map = new ol.Map({
		target: 'map',
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})
		],
		view: new ol.View({
			center: ol.proj.fromLonLat([0, 0]),
			zoom: 0
		})
	});
	
	
	//http://jsfiddle.net/LGAWY/
	$.event.special.inputchange = {
		setup: function() {
			var self = this, val;
			$.data(this, 'timer', window.setInterval(function() {
				val = self.value;
				if ( $.data( self, 'cache') != val ) {
					$.data( self, 'cache', val );
					$( self ).trigger( 'inputchange' );
				}
			}, 20));
		},
		teardown: function() {
			window.clearInterval( $.data(this, 'timer') );
		},
		add: function() {
			$.data(this, 'cache', this.value);
		}
	};
	
	//Sisestatud korodinaatide asukoha kuvamine kaardil
	$(".X").on('inputchange', function() {
		map.setView(new ol.View({
			center: ol.proj.fromLonLat([$(".Y").val(), $(".X").val()]),
			zoom: 6
		}));
		$(".kaart_koordinaat").text(ol.coordinate.toStringXY(ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326'), 4));
	});
	
	$(".Y").on('inputchange', function() {
		map.setView(new ol.View({
			center: ol.proj.fromLonLat([$(".Y").val(), $(".X").val()]),
			zoom: 6
		}));
		$(".kaart_koordinaat").text(ol.coordinate.toStringXY(ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326'), 4));
	});
	
	
	//Arvutamine
	$(document).keypress(function (e) {
		if (e.which == 13) { //enter
			$(".arvuta").click();
		}
	});
	
	$(".arvuta").click(function(){
		var x = $(".X").val();
		var y = $(".Y").val();
		var kuupaev = $(".kuupaev").val();
		
		if (kuupaev != "") {
			if (x == "" && y == "") {
				x = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326')[1];
				y = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326')[0]
			}
			if (x == 0) {
				x = 0.0000000001;
			}
			if (y == 0) {
				y = 0.0000000001;
			}
			
			var url = "https://api.sunrise-sunset.org/json?lat="+x+"&lng="+y+"&date="+kuupaev;
			$(".koht").text(ol.coordinate.toStringXY(ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326'), 4));
			$(".paev").text(kuupaev);
			
			$.get(url, function(data, status) {
				console.log(data);
				$(".tous").text(data.results.sunrise+" UTC");
				$(".loojang").text(data.results.sunset+" UTC");
				$(".pikkus").text(data.results.day_length);
			});
			
			$(".kalkulaator").toggle();
			$(".tulemus").toggle();
			
		} else {
			$(".viga").show();
		}
		
	});
		
	
	//Proovi veel
	$(".veel").click(function(){
		$(".tulemus").toggle();

		$(".tous").text("");
		$(".loojang").text("");
		$(".pikkus").text("");
		
		$(".viga").hide();
		
		$(".X").val(null);
		$(".Y").val(null);
		$(".kuupaev").val(null);
		
		map.setView(new ol.View({
			center: ol.proj.fromLonLat([0, 0]),
			zoom: 2
		}));
		
		
		$(".kalkulaator").toggle();
	});
});
	
# Päeva pikkuse arvutamise rakendus
## CGI suvepraktika 2020 Tartu proovitöö Triinu Aug

## Rakendus: 

## Dokumentatsioon
1. etapp - aega kulus 3h.
  * Lõin .html, .css ja .js failis Notepad++-is.
  * Alustasin sisestamisvaate loomisega. 
	Pöörasin kohe alguses palju tähelepanu sellele, et vaade oleks ilus ja lihtsasti mõistetav. Tutvusin koordinaadisüsteemiga. 
	Selle juures midagi keerulist ei olnud, uueks asjaks oli minu jaoks ainult input-boxide placeholder. 
	Kokku kulus sisestamisvaate loomiseks 1h.
  * Asusin tulemusvaate kujutamise juurde. 
	Kõige pealt tegelesin vaadete vahetamise, nuppude funktsionaalsusega. 
	Päeva pikkuse arvutamine tundus minu jaoks kõige raskem osa ja otsisin selle kohta informatsiooni internetist. Leidsin sellise API: https://sunrise-sunset.org/api. Sain aru, et selle jaoks on vaja kasutada ajax-it ning kirjutasin kogu oma senise js ümber jQuery-sse. Kuna jQuery oli minu jaoks uus, kulus mul palju aega selle API tööle saamiseks (sh näpuvigade otsimiseks). 
	Kuna API koordinaadil 0.0 ei tööta, kutsusin sellisel juhul välja koordinaadiga 0.0000000001.
	Palju abi sain w3schools-i õpetustest. Muuhulgas n-ö debuggimiseks kutsusin välja ka console.log(url) ja console.log(data). 
	Kokku kulus tulemusvaate loomiseks ja tööle saamiseks 2h.
2. etapp - aega kulus 4h.
  * Kaardi lisamine sisestamis- ja tulemusvaatele. 
  Polnud otseselt keeruline. Valisin OpenLayers OpenStreetMap kaardi: https://openlayers.org.
	Eeldasin, et juhendis "lisa juurde sisestatud koordinaatide kuvamine kaardil" all mõeldakse, et samal ajal koordinaatide kirjutamisega asukoht kaardil muutub ning seejures kuvatakse koordinaadid ka kaardil. Seda lahendust proovisin esialgu ise välja mõelda, kuid täielikule lahendusele mitte jõudes otsustasin väga palju aega mitte kulutada ja sain abi siit: http://jsfiddle.net/LGAWY/. Kasutasin sealset inputchange event-i defineeringut.
  Kaardil n-ö fookus-ringi ja koordinaadid otsustasin kuvada kasutades puhast CSS-i, sest see on minu jaoks tuttav.
	Kokku kulus 1,5h.
  * Kaardilt asukoha valimise võimaluse lisamine.
  Arvasin, et tegu on senini tehniliselt minu jaoks kõige keerulisema osaga ülesandest, kuid see osutus oodatust lihtsamaks.
  Esialgu tundus veidi keeruline saada OpenLayers mapilt koordinaate õiges formaadis. 
  Palju vaeva nägin ka visuaali muutmisega, et rakendust mugav ja loogiline kasutada oleks.
  Proovisin tekitada ka, seda, et kaardil fookuspunkti muutes, kuvataks ka samaaegselt koordinaatide muutus, kuid see ei õnnestunud. Kujutan ette, et seda saab teha sarnaselt eelneva inputchange-event-iga.
  Kokku kulus 2,5h.
3. etapp - ei jõudnud lahendada
  *
4. etapp - aega kulus 0,5h.
  * Muutsin veebirakenduse mugavalt kasutatavaks ka mobiiliversioonis.

# OBA APP testen op verschillende browsers / devices
Tijdens het eerste project hebben we in een korte tijd een app gemaakt voor de OBA. Ik heb hierbij natuurlijk geen rekening gehouden met verschillende browsers. Echter heb ik mijn applicatie in een zo ver mogelijke mate responsive proberen te maken. 

Of deze app geschikt is voor verschillende browsers en devices, hebben we getest met 3 verschillende devices en 3 verschillende browsers! Via whichbrowser.net hebben we kunnen achterhalen op welke browsers er gesurfd wordt.

Bekijk hier mijn OBA APP:
https://jenniferslagt.github.io/project-1-1920/index.html


## Testen op 3 verschillende devices (en browsers)
### 1. iPad 
Gebruikte browser: Chrome 80 (on a HTC Nexus 0 running Android)
<br>

Het viel me op dat mijn app niet helemaal responsive is op deze tablet. Op de eerste pagina (na de loading state) wordt mijn achtergrond niet geschaald aan de schermgrootte. Dit komt omdat ik mijn background-image niet responsive heb gemaakt. 
Voorderest werkte mijn app optimaal! De pagina's waren allemaal responsive.

De home page en de resultaten pagina: 
![Schermafbeelding 2020-03-12 om 14 27 57](https://user-images.githubusercontent.com/45489420/76526383-ba6add80-646d-11ea-8819-e9e3738b8cf0.png)

Mogelijke oplossing:
Als oplossing zou ik eventueel de guide op de website "say no to image flow" kunnen gebruiken. Ook kan ik de width en de height beter aanpassen zodat die meeschalen met de schermgrootte van een device.

### 2. Nokia Lumia 620
Gebruiker browser: Mobile Internet Explorer 11.0 
<br>

JavaScript wordt bij deze Nokia niet ingeladen. Dit heeft veel gevolgen voor mijn OBA app:
* Mijn app is een single page die bestaat uit sections. Welke section er wordt weergegeven, is afhankelijk van de route. De route heb ik geschreven in JavaScript, waardoor er niet van sections geswitched kan worden.
* Daarnaast kan ik data ophalen met behulp van de OBA API. Dit zal niet werken omdat het in JavaScript geschreven is.
* Ook heb ik een bij een paar elementen interactie toegevoegd met behulp van JavaScript. Deze doen het ook niet meer.

Daarnaast werkt de loading state ook niet helemaal optimaal. De kaarten worden niet op de goede plek weergegeven.

De loading state en de resultaten pagina:
![Schermafbeelding 2020-03-12 om 14 59 32](https://user-images.githubusercontent.com/45489420/76529141-28b19f00-6472-11ea-9e02-af33ffa53921.png)

Mogelijke oplossing: 
Een mogelijke oplossing zou zijn dat ik alles in HTML en CSS moet gaan coderen. Interactie kan je namelijk ook toevoegen met CSS. Het is echter niet mogelijk om data via de API op te halen zonder JavaScript.


### 3. iPod touch
Gebruikte browser: Safari / 8536.25
<br>
Er wordt niks geladen als ik de applicatie open. Je komt direct op een wit scherm waarbij CSS deels is weggevallen. JavaScript doet het daarnaast ook niet. Er is geen interactie mogelijk.

De home page: <br>
![Schermafbeelding 2020-03-12 om 14 59 39](https://user-images.githubusercontent.com/45489420/76529149-2b13f900-6472-11ea-9281-58445b20357a.png)

Mogelijke oplossing:
Een mogelijke oplossing is om de applicatie grotendeels te maken in semantische HTML. Echter wordt de website dan wel heel saai.

## Testen op 3 verschillende browsers
Ik heb mijn applicatie getest op drie verschillende browsers:
1. Google Chrome
2. Firefox
3. Opera

In principe werkt de app op alle browsers. Echter zie ik wel een klein verschil bij Firefox, vergeleken met de anderen.
Aan de linkerkant zie je Google Chrome, daarna Firefox en tenslotte Opera:
![Schermafbeelding 2020-03-12 om 17 42 20](https://user-images.githubusercontent.com/45489420/76544807-ee9fc780-6488-11ea-9a24-edef15268f7d.png)
Zoals je ziet, ziet de button met de pijl en het knopje aan de bovenkant er anders uit. Ik denk dat dit komt doordat het symbool (of het font ervan) niet wordt ondersteund door FireFox. <br>
![Schermafbeelding 2020-03-12 om 22 42 36](https://user-images.githubusercontent.com/45489420/76569216-db095680-64b2-11ea-868e-32bbf1d9dd72.png)
Mogelijke oplossing:
Ik denk dat de oplossing bij Firefox in een klein detail ligt.

## Testen op de screenreader
Om de "screenreader" te activeren op mijn Macbook, ben ik erachter gekomen dat er een VoiceOver is. Deze is de vinden via het apple panel op systeemvoorkeuren > toegangelijkheid > VoiceOver. Vervolgens kan je het activeren. (Daarnaast is er ook een shortcut voor). Daarnaast biedt Apple ook een training aan over hoe je met de VoiceOver te werk kan gaan.

Ik heb de VoiceOver gebruikt om mijn OBA APP.



Mogelijke oplossing:




## De 8 features

<b>1. Afbeeldingen uitzetten</b><br>

Met behulp van de developer tool extensie van Google Chrome is het mogelijk om alle afbeeldingen van de website uit te zetten. Hierdoor is het direct duidelijk wat er precies met de website gebeurd. 
<br>

Aangezien mijn OBA app voor grotendeels uit afbeeldingen bestaat, zal dit een grote impact hebben op de UX. Op de hoofdpagina (die verschijnt na de loadingstate), zal bijvoorbeeld geen achtegrond zijn. De achtergrond bestaat namelijk uit een afbeelding. Het "vrolijke" karakter van deze pagina zal echter verdwijnen. 
<br>

Daarnaast bestaat de pagina met resultaten uit afbeeldingen van boeken. Hierdoor zal de gebruiker niet direct kunnen zien welke boeken er op de pagina staan. Er is namelijk geen tekst of verdere omschrijving weergegeven. Echter hebben de afbeeldingen wel een border gekregen, waardoor je dus wel ziet dat er afbeeldingen aanwezig waren.
<br>

Kortom: Niet alleen het karakter van de app verdwijnt, maar ook het kan ook invloed hebben op het doel van een pagina. Afbeeldingen zijn namelijk erg betekenisvol en vormen grotendeels de content op mijn applicatie.
<br>

Mogelijke oplossing: 
Een mogelijke oplossing is om niet een afbeelding te gebruiken, maar om een svg bestand in te laden (bijvoorbeeld de code hiervan). Daarnaast kan je natuurlijk ook gebruik maken van het `alt` attribute in het `<img>` element. Hierin komt dan de beschrijving over de afbeelding. Titels toevoegen kan ook een optie zijn. 
<hr>

<b>2. Custom fonts </b><br>
Ik heb het type lettertype van mijn app uitgezet via inspecteren > styles. 
<br>
Het valt me op dat ik maar een enkele waarde achter de `font-family` heb neergezet, namelijk "Sans Serif". Als ik dit uitschakel, verandert het lettertype naar New Times Roman. Misschien niet mijn nummer 2 lettertype waar ik voor zou kiezen, maar alles blijft wel voorderest leesbaar.
Wat me opvalt, is dat het pijltje van de button wel van vorm verandert:


Het ziet er minder mooi uit en het lijkt een beetje horizontaal uitgerekt.
<br>
Mogelijke oplossing: achter de eigenschap `font-family` zou je meerdere lettertypes kunnen neerzetten. Denk bijvoorbeeld aan een fallback lettertype. Misschien voorkomt dit ook dat het pijltje niet helemaal verandert, maar dit zou je kunnen testen.
<hr>

<b>3. Kleur uitzetten / kleurenblindheid</b><br>
Via de inspecteren > styles is het mogelijk om alle kleuren op je website uit te zetten. Als ik dit doe, worden alle letters zwart, worden de overige kleuren wit. Mijn pagina verliest echter zijn speelse "game" karakter. Het ziet er erg saai uit. 
<br>

Maar wat als een gebruiker kleurenblind is? 
Ik heb als developer op dat moment geen rekening gehouden met kleurenblindheid, maar als ik naar mijn app kijk, is er zeker een contrast tussen bepaalde kleuren. Helaas heb ik wel gebruikt gemaakt van de kleurencombinatie rood en groen: namelijk de rode OBA letters op de groene achtergrond. Deze combinatie van kleuren is de meeste voorkomende vorm van kleurenblindheid. Sommige vinden het lastig om deze te onderscheiden.
<br>

Mogelijke oplossing: een mogelijke oplossing is om meer gebruik te maken van contrast in mijn app. Daarnaast moet je altijd opletten welke kleuren je kiest en combineert. Het is handig om onderzoek te doen naar welke type kleurenblindheid er zijn (zoals de rood-groene combinatie). Daarnaast kan je ook natuurlijk gebruik maken van patronen (oftwel vormen). Dat betekent niet meteen dat je die kleuren moet weghalen, maar je kan bijvoorbeeld ook die patronen toevoegen binnen de kleuren. Ook kan je ervoor kiezen om betekenisvolle symbolen toe te voegen. 
Tenslotte zijn er ook tools of extensies die de gebruiker kan toepassen. Zo heeft Google Chrome een extensie die de kleuren van het gehele scherm aanpast op basis van je type kleurenblindheid!
<hr>

<b>4. Muis / Trackpad uitschakelen </b><br>
Als ik door mijn OBA app navigeer zonder gebruik te maken van mijn trackpad, kom ik de volgende bevindingen tegen: 
* Waar ben ik? Waar ligt mijn "focus" met navigeren? Het duurde even voordat ik doorhad op welke plek ik was.
* Sommige elementen hebben wel een focus door een lichtblauwe border toe te voegen. Sommige elementen hebben dit niet waardoor je niet zo goed kan zien waar je je bevindt. 
* Je kan in principe navigeren door de resultaten die bestaan uit afbeeldingen. Er wordt geen focus weergegeven, maar een update van je URL. 
![Schermafbeelding 2020-03-12 om 20 39 42](https://user-images.githubusercontent.com/45489420/76569218-dc3a8380-64b2-11ea-8d9e-8de91e76fbc1.png)
<br>
Mogelijke oplossing: een mogelijke oplossing begint bij een semantische HTML. De focus van het navigeren is namelijk hierop gebaseerd. Daarnaast kan je ook nog een extra menu toevoegen die aleen verschijnt bij het focussen op een bepaalde element. Bij google verschijnt er bijvoorbeeld een extra menu als je focust op het logo. Tenslotte, maak gebruik van `:focus` in je CSS! Hierdoor kan je de stijling van een element aanpassen als de focus erop ligt. Tenslotte kan je ook nog de volgorde van de focus aanpassen in CSS. Dit wordt echter niet aangeraden. Mocht het belangrijk zijn, dan kan je ook nog handmatige shortcuts toevoegen, maar verander hierbij vooral niet de 'basis' shortcuts.
<hr>

<b>5. Breedband internet </b><br>
Via inspecteren > network > online kan je je internetsnelheid aanpassen. Ik heb deze op "slow 3g" gezet om te testen of dit invloed heeft op mijn OBA app. Het blijkt dat dit niet veel invloed heeft op mijn app. Dingen worden niet slower geladen. Ik denk dat dit komt doordat ik een externe file heb aangemaakt (data.js) waarin ik een array van data inlaadt en een deel ervan render op de pagina. Kortom: ik maak niet daadwerkelijk gebruik van mijn OBA API. Ik denk dat dit dan ook de reden is dat het niet veel invloed heeft op mijn app.
<br>
Mogelijke oplossing: JavaScript wordt altijd als laatst geladen en kost meer tijd. Een mogelijke oplossing kan zijn om zoveel mogelijk sematische HTML en CSS code te schrijven. Dit kost namelijk minder internet en dus ook minder tijd.
Daarnaast is het ook handig om altijd feedback te geven wanneer het internet traag is. Denk aan een loading state (bijvoorbeeld een skeleton UI van alle resultaten). Hier is het belangrijk om aan Progressive Enhancement te denken.

<hr>
<b>6. JavaScript volledig uitzetten </b><br>
Ik heb de JavaScript uitgezet met behulp van de developer tool. Eigenlijk gebeurt er hier hetzelfde als bij het testen van mijn app op de Nokia.
<br>
Mijn app is een single page die bestaat uit sections. Welke section er wordt weergegeven, is afhankelijk van de route. De route heb ik geschreven in JavaScript, waardoor er niet van sections geswitched kan worden.
Daarnaast kan ik data ophalen met behulp van de OBA API. Dit zal niet werken omdat het in JavaScript geschreven is.
Ook heb ik een bij een paar elementen interactie toegevoegd met behulp van JavaScript. Deze doen het ook niet meer.
<br>

Ook is het hierbij de oplossing om zoveel mogelijk code te schrijven in semantische HTML en CSS. Daarnaast is het ook handig om feedback te geven, mocht JavaScript niet worden ingeladen.

<hr>
<b>7. Cookies niet accepteren / uitzetten </b><br>
Via de webdeveloper tool is het mogelijk om de cookies uit te zetten. Als ik de cookies uitzet, heeft dit geen invloed op mijn OBA app. Alles blijft hetzelfde.

Mogelijke oplossing: als een applicatie afhankelijk is van cookies, is het altijd handig om een fallback site te hebben die wel werkt zonder cookies.

<hr>
<b>8. localStorage uitzetten </b><br>
In mijn OBA app maak ik geen gebruik van localStorage.  

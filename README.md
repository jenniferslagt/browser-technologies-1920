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
Zoals je ziet, ziet de button met de pijl en het knopje aan de bovenkant er anders uit. Ik weet niet exact hoe dit komt.

Mogelijke oplossing:
Ik denk dat de oplossing bij Firefox in een klein detail ligt.

## Testen op de screenreader
Om de "screenreader" te activeren op mijn Macbook, ben ik erachter gekomen dat er een VoiceOver is. Deze is de vinden via het apple panel op systeemvoorkeuren > toegangelijkheid > VoiceOver. Vervolgens kan je het activeren. (Daarnaast is er ook een shortcut voor). Daarnaast biedt Apple ook een training aan over hoe je met de VoiceOver te werk kan gaan.

Ik heb de VoiceOver gebruikt om mijn OBA APP.



Mogelijke oplossing:




## De 8 features

<b>1. Afbeeldingen uitzetten</b>
Met behulp van de developer tool extensie van Google Chrome is het mogelijk om alle afbeeldingen van de website uit te zetten. Hierdoor is het direct duidelijk wat er precies met de website gebeurd. 
<br>
Aangezien mijn OBA app voor grotendeels uit afbeeldingen bestaat, zal dit een grote impact hebben op de UX. Op de hoofdpagina (die verschijnt na de loadingstate), zal bijvoorbeeld geen achtegrond zijn. De achtergrond bestaat namelijk uit een afbeelding. Het "vrolijke" karakter van deze pagina zal echter verdwijnen. 
<br>
Daarnaast bestaat de pagina met resultaten uit afbeeldingen van boeken. Hierdoor zal de gebruiker niet direct kunnen zien welke boeken er op de pagina staan. Er is namelijk geen tekst of verdere omschrijving weergegeven. Echter hebben de afbeeldingen wel een border gekregen, waardoor je dus wel ziet dat er afbeeldingen aanwezig waren.
<br>
Kortom: Niet alleen het karakter van de app verdwijnt, maar ook het kan ook invloed hebben op het doel van een pagina. Afbeeldingen zijn namelijk erg betekenisvol en vormen grotendeels de content op mijn applicatie.

Mogelijke oplossing: 
Een mogelijke oplossing is om niet een afbeelding te gebruiken, maar om een svg bestand in te laden (bijvoorbeeld de code hiervan). Daarnaast kan je natuurlijk ook gebruik maken van het `alt` attribute in het `<img>` element. Hierin komt dan de beschrijving over de afbeelding. Titels toevoegen kan ook een optie zijn. 

<b>2. Custom fonts </b>


<b>3. Kleur </b>


<b>4. Muis / Trackpad uitschakelen </b>


<b>5. Breedband internet </b>


<b>6. JavaScript volledig uitzetten </b>


<b>7. Cookies niet accepteren / uitzetten </b>


<b>8. localStorage uitzetten </b>


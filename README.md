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

De home page:
![Schermafbeelding 2020-03-12 om 14 59 39](https://user-images.githubusercontent.com/45489420/76529149-2b13f900-6472-11ea-9281-58445b20357a.png)


## Testen op 3 verschillende browsers


## Testen op de screenreader


## De 8 features

## App: Make & share your grocery list!
![Schermafbeelding 2020-05-12 om 15 20 04](https://user-images.githubusercontent.com/45489420/81696367-1816a880-9464-11ea-9027-47606899380f.png)

## Description (Problem and solution)
<b>Problem</b> <br>
The problem is that some people can't go to the supermarket because they aren't stable enough. Think about older people or sick people. For example, at this moment people are staying home because of the corona virus. They can't go anywhere.

<b> Solution </b> <br>
My app offers a simple solution: "unstable" people can make a grocery list and can share this to people who wants to help them. If this is shared, they can use this app while doing groceries. They can "check" every product by adding it to "checked products".  
<br>
So my target audience are people who can't go to the supermarket themselves <b>and</b> people who wants the help this people.

## Progressive Enhancement
<b>What is Progressive Enhancement?</b>
Progressive enhancement (PE) is a strategy for web design that emphasizes core webpage content first. You use the most basic webtechnologies (think about simple HTML and CSS. Users will always have a strong foundation to fall back on as complexity is introduced to the project. The goal is to make the website work for <b>everyone</b>. Think about differents types of users, browsers or devices. After this, you can improve the user experience by adding enhancements. <br>

Web developers need to start with a simple, clean, semantic HTML to navigate through (content of) the application: this is called the first layer. The second layer is CSS. Developers can display or change the visual presentation of the website's content. The third layer is JavaScript. The developers can provide the users an enhanced usability. But don't forget that this part is more about "client" JavaScript, instead of server JavaScript.

"It's a journey from simplicity to complexity". - Sam Dwyer

<b>How did I apply PE?</b>
To apply PE, I used the 3 layers: <br>
<details>
<summary>The functional, reliable layer</summary>
<br>
This is the most basic layer. I added clean, semantic HTML (within a EJS template) code to make the core function of my app work. I also used the website "caniuse.com" to check the browser support. It's very important that this part works on the most browsers and devices. I also tested this with browserstack. Don't forget this is also the part where I used fallbacks. What if JavaScript isn't supported? Maybe HTML can offer a solution. 
</details>
<br>

<details>
<summary>The usable layer </summary>
<br>
This is the part where CSS displays or changes the visual presentation of the content. I asked myself this question: "Which information is important to show on which moment?" When do users (unstable people or "shoppers") want to see your added "unchecked" products of your grocery list? When do they want to see the "checked" products? <br>
  
 I choosed to make a kind of dropdown list. There are actually two lists: 
 1. The added "unchecked" list with products.
 2. The checked list with products. 
 If they click on the list name, the list slides in or slides out. I let the user choose when they want to see a list. 
</details>
<br>

<details>
<summary>The pleasurable layer</summary>
<br>
At this layer I wanted give the app more "character". I added some enhancements with (client) JavaScript: <br>
1. I added a share option with `navigator.share`. In this way you can share a list with the added products based on the installed apps on the user's phone. </details>

## Feature Detection and fallbacks
Feature detection means that you're searching for features in your code that can cause a problem because the feature not supported in the browser. You can solve this by: <br>
1. Use @supports in your CSS. You can use `@supports` or `@supports not`. Then follows a condition. If the outcome is true, than the rules after the condition is excecuted. In this way you can make a fallback. (See feature 3)
2. Use double CSS lines to have a fallback. But it's the order of each rule is important: the last one is getting excecuted if this is supported. (See feature 3)
3. You can also check this in JavaScript. The browser will return a true or false. (See navigator.share)


I tried to search for this feature by checking the 8 features.

### The 8 features
I tried to apply the 8 features as much as possible to deliver a "delightfull" user experience! 

<b> 1. Images </b><br>
If you have a product in the list, you can delete it by clicking on the button with a "X" on it. First, I added an image within this button, but that didn't work out.. As a solution I used a HTML entitity: `&#x2716;`. This shows a bold cross of the button. But when I checked this on caniuse.com, I couldn't believe my eyes. [Can I use entities?](https://caniuse.com/#search=entities) The answer was no. It says that entities are very bad supported, but I doubted it, so I googled further. 
<br>
I could'nt find more information about this so I have chosen another solution.
I made a cross in Illustrator CC and exported it as a SVG. This is very well supported according to caniuse.com. `[Check it here.](https://caniuse.com/#search=svg)` This is the code I added:<br>

``` <svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139.15 163.93"><defs><style>.cls-1{fill:#1d1d1b;}.cls-2{fill:#fff;}</style></defs><title>A garbage can as a delete icon.</title><path class="cls-1" d="M158.86,226.18h-90a10.82,10.82,0,0,1-10.82-10.82V93.1l-14.62-.15L43,73.85l46.65-.42-.3-10.49L138,62.25,138,73l43.55-.4.66,20.11-12.49.4V215.36A10.82,10.82,0,0,1,158.86,226.18Z" transform="translate(-43.02 -62.25)"/><rect class="cls-2" x="44.29" y="48.53" width="17" height="87.06"/><rect class="cls-2" x="84.79" y="50.56" width="17" height="87.06"/></svg> ```

I also added a title which says something about the svg. 
<br>

<b> 2. Custom fonts </b><br>
I added more than one value to the property `font-family` in CSS , because the font-family property can hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font. This is the code I added: `font-family: Arial, Helvetica, sans-serif;`
<br>

<b> 3. Colors / colorblindness </b><br>
Well, the property `background-color` is pretty good supported. But if you add a linear gradient to this, it is not good supported. That's why I added `@supports not` (a CSS rule):<br>

` @supports not (background: linear-gradient(157deg, rgba(213, 225, 248, 1) 0%, rgba(175, 198, 244, 1) 100%)) {
    body {
        background: #d5e1f8;
    }
} `

This means that <b>if</b> the linear-gradient() is not supported (which means the output is true), then execute `background: #d5e1f8;`.
But I also checked `@supports` and it wasn't very well supported, so just let that in a comment. This was my final solution:

` body { 
      background: #d5e1f8;
      background: linear-gradient(157deg, rgba(213, 225, 248, 1) 0%, rgb(153, 183, 245) 100%);
    } `
    
   </br>
Don't forget that the last property is getting excuted (when this is supported)!  

</br>

<b> 4. Navigating without a mouse or trackpad </b><br>
Well, the idea of my app is based on a mobile device, instead of a computer or a tablet.. But if the mouse or trackpad is turned off, I would like to focus on the core functionality. Because my HTML is semantic, you can navigate by using the TAB. You start at the lists, then you go to the delete button and after the added list you go to the form where you can add a product! You can type it in and then click on enter.  

<b> 5. Network </b><br>
Well, if the network is not that fast, my app still works fine. That because I used Node.js (and express)! In this way, I am trying to render the core functionality on the server side. So upgrading you're list without a good network is not a problem.
I checked this with inspect > network > slow 3g. I also added a service worker. After the first view, the page can be visited offline!</br>

<b> 6. Turn off JavaScript </b><br>
I used server JavaScript (server.js) and client JavaScript (client.js) to render the pages and to add more interaction. I made the core functionality in the server JavaScript, and the detailed interactive part in the client JavaScript. I disabled JavaScript easily with the Web Developer plugin from chrome. A part of the app works: you can still add items to your "Added products" and to "checked products". But deleting a product or list didn't work. So actually the server JavaScript did work, the client JavaScript didn't. So the server JavaScript can be a fallback of the client JavaScript.</br>

But I also used CSS instead of JavaScript. CSS is not only about visual presentation; it's also for interaction. In this case, CSS can offer a fallback when the JavaScript is disabled. For example, when you click on a list, the products slides in or out the list! This is why PE is so important: begin with the basic webtechnologies!
</br>

<b> 7. Refuse cookies </b><br>
I used the Web Developer plugin again to disable the cookies. If you disable this, nothing changes. So I also didn't make a fallback page.

<b> 8. Turn off LocalStorage </b><br>
I didn't use LocalStorage in my app, because I used a package from Node.js called `fs-system`. In this way, I created a database (product.json) where I save the input from the user! I used `readFileSync` for this. This is a good solution when LocalStorage isn't supported. </br>

But to controle this, I used incognito. In this way you can visit a website without any webactivities in the past.

## Enhancement: navigator.share
I added a enhancement based on the installed apps. <u>If</u> you want to share the list, its opens a new tab with installed apps (based on the users device)! If `navigator.share` isn't supported, I made a fallback. Then it opens a new tab and you can actually mail this to someone. This is the code I used: </br>

``` 
const shareButton = document.querySelector('[share-btn]');
shareButton.addEventListener("click", function () {
    if (navigator.share) {
        navigator.share({
            url: url,
            text: productNames
        }).then(function () {
            console.log("Thanks for sharing!");
        }).catch(console.error);
    } else {
        overlay.classList.add('show-share');
        shareModal.classList.add('show-share');
        window.open('mailto:?subject=My grocery list!&body=This is my grocery list: ' + productNames);
    }
});

overlay.addEventListener('click', function () {
    overlay.classList.remove('show-share');
    shareModal.classList.remove('show-share');
})
 ```

## Conclusion (learning goals and criteria)
This is what I've learned during the past weeks:
* I've learned a lot of about Browser Technologies. I applied this acknowlegde as an enhancement of my application. So my app is made for all kinds of users, browsers and devices (different contexts).
  - I focussed on the core functionality of my app. This works in all types of contexts. So the basic user experience is for everyone!
  - I tested my application in different contexts to enhance the user experience (the 8 features / testing on different browsers).
  - I made some fallbacks which are excecuted if a feature isn't supported (think about CSS fallbacks and and showing features when JavaScript is enabled).
  - I focused on a current problem (people who can't go to the supermarket because they aren't stable enough) and made an application which solves this problem (make a grocery list and share it to the people who can do the groceries). 
 
* I've learned what Progressive Enhancement is and how to apply this.
  - I started with making the core functionality of my app. This works for everyone.
  - The core functionality is made with HTML and CSS.  
  - After the basics are fixed, I started working on the usable and pleasurable layer.
* Feature detection: I've learned how show or hide features when it isn't supported.
  - If JavaScript isn't enabled, the functionals which are based on JavaScript aren't shown at the app. For example, I've made a share button which is made with `navigator.share`, an API of JavaScript. If JavaScript isn't enabled, the share button won't show at all.
  - I also made some fallbacks in CSS (double code lines or by using @support).
 
  

## Sources
* [Progressive Enhancement: What It Is, And How To Use It?](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/)
* [HTML: The Inaccessible Parts](https://daverupert.com/2020/02/html-the-inaccessible-parts/)
* [Accessibility Through Semantic HTML](https://24ways.org/2017/accessibility-through-semantic-html/)
* [The Role of Enhancement in Web Design](https://www.nngroup.com/articles/enhancement/)
* [A Theory of User Delight: Why Usability Is the Foundation for Delightful Experiences](https://www.nngroup.com/articles/theory-user-delight/)
* [Make the Web Work For Everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/)
* [File System | Node.js v13.12.0 Documentation](https://nodejs.org/api/fs.html)
* caniuse.com

## Credits
In the past weeks we all worked from home, because of the virus. This makes it harder to communicate and to concentrate on your work. That's why I would like to thank my fellow students, the help students and the teachers for helping me during this time.

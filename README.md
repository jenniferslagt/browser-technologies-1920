## App: Make & share your grocery list!



## Description (Problem and solution)
<b>Problem</b> <br>
The problem is that some people can't go to the supermarket because they aren't stable enough. Think about older people or sick people. For example, at this moment people are staying home because of the corona virus. They can't go anywhere.

<b> Solution </b> <br>
My app offers a simple solution: "unstable" people can make a grocery list and can share this to people who wants to help them. If this is shared, they can use this app while doing groceries. They can "check" every product by adding it to "checked products".  
<br>
So my target audience are people who can't go to the supermarket themselves <b>and</b> people who wants the help this people.


## How does my code work?
Well, to explain my code, I splitted it up in a few parts: <br>
1. The server-side <br>
2. The client-side <br>
3.      <br>

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

## Testing my app with browserstack


## Feature Detection and fallbacks



- Background-color:
- `navigator.share`


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
``` @supports not (background: linear-gradient(157deg, rgba(213, 225, 248, 1) 0%, rgba(175, 198, 244, 1) 100%)) {
    body {
        background: #d5e1f8;
    }
} ```

This means that <b>if</b> the linear-gradient() is not supported (which means the output is true), then execute `background: #d5e1f8;`.
But I also checked `@supports` and it wasn't very well supported, so just let that in a comment. This was my final solution:

``` body { 
      background: #d5e1f8;
      background: linear-gradient(157deg, rgba(213, 225, 248, 1) 0%, rgb(153, 183, 245) 100%);
    } ```
    
   <br>
Don't forget that the last property is getting excuted (when this is supported)!    
<br>

<b> 4. Navigating without a mouse or trackpad </b><br>
Well, the idea of my app is based on a mobile device, instead of a computer or a tablet.. But if the mouse or trackpad is turned off, 

<b> 5. Network </b><br>

<b> 6. Turn off JavaScript </b><br>

<b> 7. Refuse cookies </b><br>

<b> 8. Turn off LocalStorage </b><br>

## Conclusion



## Sources
* [Progressive Enhancement: What It Is, And How To Use It?](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/)
* [HTML: The Inaccessible Parts](https://daverupert.com/2020/02/html-the-inaccessible-parts/)
* [Accessibility Through Semantic HTML](https://24ways.org/2017/accessibility-through-semantic-html/)
* [The Role of Enhancement in Web Design](https://www.nngroup.com/articles/enhancement/)
* [A Theory of User Delight: Why Usability Is the Foundation for Delightful Experiences](https://www.nngroup.com/articles/theory-user-delight/)
* [Make the Web Work For Everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/)

## Credits
In the past weeks we all worked from home, because of the virus. This makes it harder to communicate and to concentrate on your work. That's why I would like to thank my fellow students, the help students and the teachers for helping me during this time.

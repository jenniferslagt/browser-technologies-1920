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


<b> 1. Images </b>
<b> 2. Custom fonts </b>
<b> 3. Colors / colorblindness </b>
<b> 4. Navigating without a mouse or trackpad </b>
<b> 5. Network </b>
<b> 6. Turn off JavaScript </b>
<b> 7. Refuse cookies </b>
<b> 8. Turn off LocalStorage </b>

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

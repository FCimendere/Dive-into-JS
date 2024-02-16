# Web Development Bootcamp - Change Color Randomly

This is a solution to randomly creation a RGB color code and change the box color with this color.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This is a basic DOM Manipulation,DOM Event Listener project with HTML, CSS and JS.

### The challenge

Users should be able to:

- Changing the color with event listener
- Hover and onclick action

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My Process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Vanilla JS
- DOM Manipulation, DOM Event listener

### What I learned

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.container {
    display: grid;
    grid-template-columns: auto;
```

```js
function rgbFounder() {
  const num1 = getRandomInt(255);
  const num2 = getRandomInt(255);
  const num3 = getRandomInt(255);
  const newText = `rgb(${num1}, ${num2}, ${num3})`;
  document.getElementById("test").style.backgroundColor = newText;
  text.innerText = newText;
}

button.addEventListener("click", rgbFounder);
```

### Useful resources

- [Web Development Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22051276?start=420#overview) - This helped me for undestand DOM Events and DOM Manipulation.

## Author

- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

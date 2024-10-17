# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![image](https://github.com/user-attachments/assets/0f2b1bcc-385e-4bf6-876b-8334114d1ba3)


### Links

- Solution URL: [https://github.com/itachidevs/Time-tracking-dashboard.git](https://your-solution-url.com)
- Live Site URL: [https://itachidevs.github.io/Time-tracking-dashboard/](https://your-live-site-url.com)

## My process
- I started with designing the dashboard for mobile screens.
- After I simply add responsive to after 768px or above screen width devices.
- I followed mobile first approach.
- Instead of adding section element for every card I used for loop to iterate and add cards.
- Used flexbox for mobile devices.
- Used grid templates for desktop devices.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I have gained experience in working with JS objects
  - Learn not to DRY myself using for loop.
  - Using JS objects and arrays.
  - Using CSS templates
  - Designing Responsiveness

```css

```
```js
for (let index = 0; index < cardDetails.length; index++) {
    const cardobj = cardDetails[index];
    // card container creation
    let cardEl = document.createElement('section')
    cardEl.classList.add('card', `${cardobj.calssname}`)
    mainCard.appendChild(cardEl)

    // card description
    let cardDescEl = document.createElement('section');
    cardDescEl.classList.add('card-desc-container')
    cardEl.appendChild(cardDescEl)

    // card bottom creation
    let cardHead = document.createElement('section')
    cardHead.classList.add('card-head')

    let cardFoot = document.createElement('section')
    cardFoot.classList.add('card-foot')

    cardDescEl.appendChild(cardHead)
    cardDescEl.appendChild(cardFoot)

    // heading
    let heading = document.createElement('h1');
    heading.textContent = `${cardobj.cardName}`
    heading.classList.add('heading')
    cardHead.appendChild(heading)

    // three dots
    let tdots = document.createElement('img');
    tdots.src = Tdots

    cardHead.appendChild(tdots)
    console.log(cardEl)

    // cardFoot
    let hoursEl = document.createElement('p');
    hoursEl.textContent = `${cardobj.hours}`;
    hoursEl.classList.add('hours');
    cardFoot.appendChild(hoursEl);
    let spentEl = document.createElement('p');
    spentEl.classList.add('spent');
    spentEl.textContent = `Last Week-${cardobj.spent} hrs`;
    cardFoot.appendChild(spentEl)
}

```


### Useful resources

- [W3 Schools](https://www.w3schools.com/css/css_grid.asp) -I highly recommend this website to learn about CSS templates

## Author

- Website - [Itachidevs](https://itachidev.my.canva.site/)
- Frontend Mentor - [@itachidevs](https://www.frontendmentor.io/profile/itachidevs)
- Twitter - [@itachi_devs](https://www.twitter.com/itachi_devs)


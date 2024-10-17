const Tdots = 'images/icon-ellipsis.svg'
const cardDetails = [
    {
        cardName: "Work",
        hours: "32 hrs",
        spent: 8,
        calssname: 'work'
    }
    , {
        cardName: "Play",
        hours: "10 hrs",
        spent: 8,
        calssname: 'play'

    },
    {
        cardName: "Study",
        hours: "4 hrs",
        spent: 7,
        calssname: 'study'

    },
    {
        cardName: "Excercise",
        hours: "4 hrs",
        spent: 5,
        calssname: 'excercise'

    }
    ,
    {
        cardName: "Social",
        hours: "5 hrs",
        spent: 10,
        calssname: 'social'

    },
    {
        cardName: "Self Care",
        hours: "2 hrs",
        spent: 2,
        calssname: 'selfcare'

    }
]
const mainCard = document.getElementById('mainCard')

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
    tdots.alt='dots'

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


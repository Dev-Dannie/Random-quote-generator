const quotes = [
    {
        quote : `"If you want to change the world,
        start singing when you're up to
        your neck in mud.
        If you want to change the world,
        start singing when you're up to
        your neck in mud."`,
        orator : 'admiral william'
    },
    {
        quote : `"If you want to change the world,
        start singing when you're up to
        your neck in mud.
        If you want to change the world,
        start singing when you're up to
        your neck in mud."`,
        orator : 'naval ravikant'
    },
    {
        quote : `"If you want to change the world,
        start singing when you're up to
        your neck in mud.
        If you want to change the world,
        start singing when you're up to
        your neck in mud."`,
        orator : 'mahatma ghandi'
    },
    {
        quote : `"If you want to change the world,
        start singing when you're up to
        your neck in mud.
        If you want to change the world,
        start singing when you're up to
        your neck in mud."`,
        orator : 'bill gates'
    },
    {
        quote : `"If you want to change the world,
        start singing when you're up to
        your neck in mud.
        If you want to change the world,
        start singing when you're up to
        your neck in mud."`,
        orator : 'jeff bezos'
    },
    {
        quote : `"If you want to change the world,
        start singing when you're up to
        your neck in mud.
        If you want to change the world,
        start singing when you're up to
        your neck in mud."`,
        orator : 'elon musk'
    },
    {
        quote : `"If you want to change the world,
        start singing when you're up to
        your neck in mud.
        If you want to change the world,
        start singing when you're up to
        your neck in mud."`,
        orator : 'jack dorsey'
    },
    {
        quote : `"If you want to change the world,
        start singing when you're up to
        your neck in mud.
        If you want to change the world,
        start singing when you're up to
        your neck in mud."`,
        orator : 'mark zuckerberg'
    },
    {
        quote : `"If you want to change the world,
        start singing when you're up to
        your neck in mud.
        If you want to change the world,
        start singing when you're up to
        your neck in mud."`,
        orator : 'serena williams'
    },
    {
        quote : `"If you want to change the world,
        start singing when you're up to
        your neck in mud.
        If you want to change the world,
        start singing when you're up to
        your neck in mud."`,
        orator : 'christian ronaldo'
    },
    {
        quote : `"If you want to change the world,
        start singing when you're up to
        your neck in mud.
        If you want to change the world,
        start singing when you're up to
        your neck in mud."`,
        orator : 'lionel messi'
    },
    {
        quote : `"Don't let anyone tell you you're too proud
        or your dreams are too big. Remember every great thing you
        see today at some point started from a wild dream."`,
        orator : 'damini ogulu'
    },

]

const quoteText = document.querySelector('.text')
const orator = document.querySelector('.orator')
const quoteBtn = document.getElementById('btn')

window.addEventListener('DOMContentLoaded', () =>{
    quoteText.textContent = quotes[11].quote
    orator.innerText = quotes[11].orator
})

quoteBtn.addEventListener('click', () => {

    const randomQuote = Math.floor(Math.random() * quotes.length)

    quoteText.textContent = quotes[randomQuote].quote
    orator.innerText = quotes[randomQuote].orator
})
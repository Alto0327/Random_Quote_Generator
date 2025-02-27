const btn = document.getElementById('btn-el')
const quoteTxt = document.getElementById('quote-el')
const authorText = document.getElementById('author-el')

async function getQuote(){
    const response = await fetch('https://dummyjson.com/quotes/random')
    const data = await response.json()
    const {quote,author} = data
    quoteTxt.innerText = quote 
    authorText.innerText = `-${author}`
}


btn.addEventListener('click',() => getQuote())
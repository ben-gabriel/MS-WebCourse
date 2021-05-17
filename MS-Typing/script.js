
// This project is based on the Chapter 4 of the Microsoft WebDev self learning course, from GitHub.
// It's a bit over-commented because I wanted to research/comprehend every term I came across
// I didn't want to just copy/paste the solution given.

// Array of quotes that are gonna be used:
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

let words = []; // Array to store the current quote being typed

let wordIndex; // Variable to keep count of the current word index (in the words[] array)  

let startTime = Date.now(); 

// Vinculate to constants the elements of the DOM
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');


// Start button listener logic:
document.getElementById('start').addEventListener('click', () =>{

    const quoteIndex = Math.floor(Math.random() * quotes.length);
    // Math.random returns a random float between 0 and 1
    // quotes.length acts as the maximun value posible (1 * ql = ql)
    // Math.floor rounds the decimals downwards assigning quoteIndex a valid value

    const quote = quotes[quoteIndex]; // Holds current quote as a string

    words = quote.split(' '); // Separetes and saves each word in the words[] array
    wordIndex = 0;

    const spanWords = words.map(function (word){ return `<span>${word} </span>` });
    // array.map() returns a new array, with elements based on the returned value 
    // of a function executed over each element of the original array.

    quoteElement.innerHTML = spanWords.join(' ');
    // Replace the content in the DOM with the resulting string from array.join()
    
    quoteElement.childNodes[0].className = 'highlight';    



})


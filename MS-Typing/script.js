
// This project is based on the Chapter 4 of the Microsoft WebDev self learning course, from GitHub.

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

let wordIndex = 0; // Variable to keep count of the current word's index (in the words[] array)  

let startTime = Date.now(); 

// Vinculate to constants the elements of the DOM
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');


// Start button listener logic:
document.getElementById('start').addEventListener('click', () =>{

    const quoteIndex = Math.floor(Math.random() * quotes.length);
    // Math.random gives a random float between 0 and 1
    // quotes.length acts as the maximun value posible (1 * ql = ql)
    // Math.floor rounds the decimals downwards assigning quoteIndex a valid value

    

})


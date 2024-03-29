
// This project is based on the Chapter 4 of the Microsoft WebDev self learning course, from GitHub.
// It's a bit over-commented because I wanted to research/comprehend every term I came across
// I didn't want to just copy/paste the solution given.

// Array of quotes that are gonna be used:
const quotes = [
    'there is nothing more deceptive than an obvious fact',
    'i never make exceptions. An exception disproves the rule',
    'what one man can invent another can discover',
    'nothing clears up a case so much as stating it to another person',
    'education never ends Watson. It is a series of lessons with the greatest for the last',
];

let words = []; // Array to store the current quote being typed

let wordIndex = 0; // Variable to keep count of the current word index (in the words[] array)  

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

    words = quote.split(' '); // Separates and saves each word in the words[] array
    wordIndex = 0;

    const spanWords = words.map(function (word){ return `<span>${word} </span>` });
    // array.map() returns a new array, with elements based on the returned value 
    // of a function executed over each element of the original array.

    quoteElement.innerHTML = spanWords.join('');
    // Replace the content in the DOM with the resulting string from array.join()
    
    quoteElement.childNodes[0].className = 'highlight';  
    // .childNodes returns an array with the children of an element starting at Index 0   
    // .className assigns a 'highlight' class to the first node.

    messageElement.innerText = '';
    typedValueElement.value = '';
    // Empties the message and input elements text 
    
    typedValueElement.disabled = false;
    typedValueElement.style.visibility = 'visible';
    typedValueElement.focus();
    // .focus() brings to the front/selects the element specified when called  
    // in this case, when pressing start btn it then jumps to the input field
    typedValueElement.addEventListener('input', startInputListener); 

    startTime = new Date().getTime();

});



// Typing listener logic:
function startInputListener(){
    
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;
    // Holds the value of the current word and the text in the input field
    
    if (typedValue === currentWord && wordIndex === words.length - 1){    
        // True when the last word is inputted corectly
        const elapsedTime = new Date().getTime() - startTime;
        messageElement.innerText = `Congratulations! You finished in ${elapsedTime / 1000} seconds.`;;
        
        endInputListener();
        
    }else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord){
        // True when a mid sentence word is inputted correctly
        // .trim removes whitespaces from both ends of a string
        
        typedValueElement.value = '';
        wordIndex++;
        // Cleans the input field and select the next element in words[]
        
        for (const wordElement of quoteElement.childNodes){
            wordElement.className = '';
        }
        quoteElement.childNodes[wordIndex].className = 'highlight';
        // Resets the class of all child nodes and then highlights the new word

    }else if (currentWord.startsWith(typedValue)){
        typedValueElement.className = '';

    }else {
        typedValueElement.className = 'error';
    } // Turns the input field into .error class if the wrong word in typed

};

function endInputListener(){
    typedValueElement.removeEventListener('input', startInputListener);
    // Removes event listener when sentence is over.
    typedValueElement.disabled = true;
    typedValueElement.style.visibility = 'hidden';
}





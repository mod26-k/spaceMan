// <!-- Alphabet -->
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const alphabetButtons = document.getElementById('letters');
function displayLetterButtons() {
    for (let i = 0; i < alphabet.length; i++) {
        const newButton = document.createElement('button');
        newButton.innerText = alphabet[i];
        newButton.setAttribute('id', alphabet[i])
        alphabetButtons.appendChild(newButton)
    }
}
    


    function storeUserGuesses() {
        const guessedLetter = document.getElementById(alphabetButtons.innerText)
        console.log(guessedLetter)
}
    alphabetButtons.addEventListener('click', storeUserGuesses())
displayLetterButtons()

const userGuesses = []

// function storeUserGuesses() {
//     const letter = document.getElementById(alphabet[i])
//     console.log(letter)
// }

// CATEGORIES
const categories = ['countries']

// <!-- Lives -->
// - will need a counter that provides 6 "lives" 
// - counter goes down by 1 with each "click" on a letter, if letter is not in generated string
// - look into how to subtract/ opposite of i++? i--?
// - does i become > instead of < when counting backwards?
// can only guess a letter once

// TIMER 10 MIN


// function liveCount {
//     // (display6Lives) {
// //  (eventListenerOnAlphabet) {
// //         for (i = 6; i > alphabet.length; i--)
//     // }
// }


// <!-- Guess Word -->
// - make randomWord function work for any/all category arrays (in case there are more-- will function like a method)

const countries = ['Algeria', 'Albania', 'Botswana', 'Bulgaria', 'Cambodia', 'Cameroon', 'Djibouti', 'Denmark', 'Eritrea', 'Estonia', 'Finland', 'Fiji', 'Guatemala', 'Grenada', 'Haiti', 'Honduras', 'Israel', 'Indonesia', 'Jordan', 'Jamaica', 'Kenya', 'Kiribati', 'Lebanon', 'Liechtenstein', 'Malawi', 'Moldova', 'Nicaragua', 'Nauru'];

function newGame(word) {
    const randomIdx = Math.floor(Math.random() * countries.length)
    const generatedWord = countries[randomIdx].toLowerCase()
    const splitWord = generatedWord.split('')
        // generatedWord.push(countriesCat[randomIdx])
        console.log(splitWord)
}

// Start Button

// const start = document.getElementById('start')
// start.addEventListener('click', newGame)

//Array of logged word and array of guessed letters


// Declaration of win/lose


// function winLose() {
// // if (counter >= 0 && input === randomWord) {
// //     return document.getElementById('win');
// // else {
// //     return lose = 'You Lose!';
// // }
// }

// <!-- Ideally, if time permits -->
// - add different categories with larger library of possible words
// - add a "hint" button that generates hint depending on the generated word
// - allow for 2 players;

// categories.push('new category')
// console.log(categories)

// 

// NEW CATEGORIES GO HERE:

// Category Buttons -- placed at bottom in case new categories are added
const categoryButtons = document.getElementById('categories');
function displayCategoryButtons() {
    for (let i = 0; i < categories.length; i++) {
        const newButton = document.createElement('button');
        newButton.innerText = categories[i];
        newButton.setAttribute('id', categories[i])
        categoryButtons.appendChild(newButton)
    }
    categoryButtons.addEventListener('click', newGame)
}
displayCategoryButtons()
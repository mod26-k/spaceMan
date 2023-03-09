//FINAL, SIMPLIFIED CODE

//KEYBOARD
// Keyboard options
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Displays keyboard
const alphabetButtons = document.getElementById('letters');

function displayLetterButtons() {
    for (let i = 0; i < alphabet.length; i++) {
        const newButton = document.createElement('button');
        newButton.innerText = alphabet[i];
        newButton.setAttribute('id', alphabet[i])
        alphabetButtons.appendChild(newButton)
    }
}

// CATEGORIES
// Displays categoryButton
const categories = ['countries']
const categoryButtons = document.getElementById('categories');
function displayCategoryButtons() {
    for (let i = 0; i < categories.length; i++) {
        const newButton = document.createElement('button');
        newButton.innerText = categories[i];
        newButton.setAttribute('id', categories[i])
        categoryButtons.appendChild(newButton)
    }
}

// New game is started when a category is selected, and a random string from the category is generated
const countries = ['Algeria', 'Albania', 'Botswana', 'Bulgaria', 'Cambodia', 'Cameroon', 'Djibouti', 'Denmark', 'Eritrea', 'Estonia', 'Finland', 'Fiji', 'Guatemala', 'Grenada', 'Haiti', 'Honduras', 'Israel', 'Indonesia', 'Jordan', 'Jamaica', 'Kenya', 'Kiribati', 'Lebanon', 'Liechtenstein', 'Malawi', 'Moldova', 'Nicaragua', 'Nauru'];


//EVENT-LISTENING FUNCTIONS
// Array where the generated word will be stored
let genWordArr = []
//Variable that stores the randomly generated word
let word = countries[Math.floor(Math.random() * countries.length)]
// Converts word to lowercase
// let generatedWord = word.toLowerCase()
// Splits word to letters
// let splitWord = generatedWord.split('')       
// Puts the letters into an array and 
// function newWord() {
//     genWordArr.push(splitWord)
//     let spacesNeeded = genWordArr.length
//     console.log(spacesNeeded)
// }

// Puts the letters into a list
function listLetters() {
        splitWord.forEach((letter) => {
            let character = document.createElement('li');
            character.innerText = letter;
            charList.appendChild(character);
            charList.style.visibility = "hidden";
        })
        console.log(genWordArr)
}

// Stores user guess and disables keyboard
const selectedLetters = storeUserGuesses.clickedButton
const userGuesses = []
const charList = document.getElementById('list')

function storeUserGuesses(event) {
    const clickedButton = event.target;
    const guessedLetter = event.target.id;
    userGuesses.push(guessedLetter)
        for (let i = 0; i < genWordArr.length; i++) {
            if (genWordArr[i] === guessedLetter) {
               return userGuesses[i] === genWordArr[i]
        }
        console.log(userGuesses)
    }
}


// Invoke functions
displayLetterButtons()
displayCategoryButtons()
// alphabetButtons.addEventListener('click', storeUserGuesses)
// categoryButtons.addEventListener('click', newWord)

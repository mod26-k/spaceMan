//UPDATED CODE

//KEYBOARD
// Keyboard options
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Displays keyboard
const alphabetButtons = document.getElementById('letters');
const keyboard = document.querySelector('fieldset')
keyboard.disabled = true
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
// Generates new word, converts it to lowercase and splits each letter. Then puts each letter into an unordered list

function newWord(event) {
    const randomIdx = Math.floor(Math.random() * countries.length)
    const word = countries[randomIdx].toLowerCase()
    const generatedWord = word.split('')
    let letterCount = document.getElementById('lettercount')
    letterCount.innerText = "This word has " + generatedWord.length + " letters"
    genWordArr.push(generatedWord)
    generatedWord.forEach((letter) => {
        const characterBox = document.createElement('div');
        const character = document.createElement('li');
            character.innerText = letter;
            characterBox.setAttribute('id', 'box');
            character.setAttribute('id', letter);
            characterBox.append(character)
            charList.append(characterBox);
            character.style.visibility = 'hidden';
        })
    keyboard.disabled = false;
}


// Stores user guess
const selectedLetters = storeUserGuesses.clickedButton
const userGuesses = []
const charList = document.getElementById('list')

function storeUserGuesses(event) {
    const clickedButton = event.target;
    const guessedLetter = event.target.id;
    userGuesses.push(guessedLetter)
}

// Checks if the guessedLetter is in the generatedWord
function compareWords(event) {
    const randomIdx = Math.floor(Math.random() * countries.length)
    const word = countries[randomIdx].toLowerCase()
    const generatedWord = word.split('')
    const guessedLetter = event.target.id;
        for (let i = 0; i < generatedWord.length; i++) {
            const character = document.querySelector('li')
            if (genWordArr.toString('').includes(guessedLetter)) {
                return character.style.visibility = "visible"
            }
            else {
                return console.log('try again')
            }
        }
    }

// Invoke functions
displayLetterButtons()
displayCategoryButtons()
// alphabetButtons.addEventListener('click', calculateGuessesLeft)
alphabetButtons.addEventListener('click', storeUserGuesses)
alphabetButtons.addEventListener('click', compareWords)
categoryButtons.addEventListener('click', newWord)

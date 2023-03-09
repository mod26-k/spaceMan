//UPDATED CODE

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
// const charList = document.getElementById('list')
// Array where the generated word will be stored
let genWordArr = []
// Generates new word, converts it to lowercase and splits each letter. Then puts each letter into an unordered list
function newWord() {
    const randomIdx = Math.floor(Math.random() * countries.length)
    const word = countries[randomIdx].toLowerCase()
    const generatedWord = word.split('')
    genWordArr.push(generatedWord)
    generatedWord.forEach((letter) => {
            let character = document.createElement('li');
            character.innerText = letter;
            character.setAttribute('id', letter);
            charList.appendChild(character);
            charList.style.visibility = "hidden";
        })
}

// Stores user guess and disables keyboard
const selectedLetters = storeUserGuesses.clickedButton
const userGuesses = []
const charList = document.getElementById('list')

function storeUserGuesses(event) {
    const clickedButton = event.target;
    const guessedLetter = event.target.id;
    userGuesses.push(guessedLetter)
}

function compareArrays(arr1, arr2) {
    for (let i = 0; i < genWordArr.length; i++) {
        for (let i = 0; i < userGuesses.length; i++) {
            if (userGuesses[i] = genWordArr[i]) {
                charList.style.visibility = "visible";
            }
            else {
                console.log('try again');
                }
            }
        }
    }






// Invoke functions
displayLetterButtons()
displayCategoryButtons()
alphabetButtons.addEventListener('click', storeUserGuesses)
alphabetButtons.addEventListener('click', compareArrays)
categoryButtons.addEventListener('click', newWord)

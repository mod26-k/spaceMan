//EXTRACTED MAIN PARTS OF ORIGINAL CODE

// Keyboard options
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Displays keyboard
const alphabetButtons = document.getElementById('letters');


// Stores keyboard selection into array, and pushes array data into ul and disables selected letter
const selectedLetters = storeUserGuesses.clickedButton
const userGuesses = []

// Counts and displays amount of turns left
let numOfClicks = 6
const counterDisplay = document.getElementById
('counter')
counterDisplay.innerText = ('You have ' + numOfClicks + ' lives left')

// event listeners
alphabetButtons.addEventListener('click', storeUserGuesses)
alphabetButtons.addEventListener('click', calculateGuessesLeft)

// CATEGORIES
const categories = ['countries']

// New game is started when a category is selected, and a random string from the category is generated
const countries = ['Algeria', 'Albania', 'Botswana', 'Bulgaria', 'Cambodia', 'Cameroon', 'Djibouti', 'Denmark', 'Eritrea', 'Estonia', 'Finland', 'Fiji', 'Guatemala', 'Grenada', 'Haiti', 'Honduras', 'Israel', 'Indonesia', 'Jordan', 'Jamaica', 'Kenya', 'Kiribati', 'Lebanon', 'Liechtenstein', 'Malawi', 'Moldova', 'Nicaragua', 'Nauru'];

// Array where the generated word will be stored
let genWordArr = []

// functions
function displayLetterButtons() {
    for (let i = 0; i < alphabet.length; i++) {
        const newButton = document.createElement('button');
        newButton.innerText = alphabet[i];
        newButton.setAttribute('id', alphabet[i])
        alphabetButtons.appendChild(newButton)
    }
}

function storeUserGuesses(event) {
    const clickedButton = event.target;
    const guessedLetter = event.target.id;
        clickedButton.disabled = true
        userGuesses.push(guessedLetter)
            console.log(userGuesses)
}

function calculateGuessesLeft(event) {
    numOfClicks -= 1;
    counterDisplay.innerText = ('You have ' + numOfClicks + ' lives left')
    const keyboard = document.querySelector('fieldset')
    if (numOfClicks === 0)
        return keyboard.disabled = true;
}

function newGame() {
    // Generates new word, converts it to lowercase and splits each letter
    const randomIdx = Math.floor(Math.random() * countries.length)
    const generatedWord = countries[randomIdx].toLowerCase()
    const splitWord = generatedWord.split('')
        // const noCommas = splitWord.join(',',' ')
        // genWordArr.push(splitWord)
        console.log(splitWord)

    // Creates a new list item for each letter of the generated word
        splitWord.forEach((letter) => {
            let character = document.createElement('li');
            character.innerText = letter;
            charList.appendChild(character);
            charList.style.visibility = "hidden";
        })

    // 


    // Re-enables the keyboard
    const keyboard = document.querySelector('fieldset')
    keyboard.disabled = false;
    const reEnable() {
        
    }
    // storeUserGuesses.clickedButton.disabled = false;
    // const clickedButton = event.target;
        // clickedButton.disabled = false;
    //reset guess counter to 6
    // counterDisplay.innerText = ('You have ' + numOfClicks + ' lives left')
        // calculateGuessesLeft()
    // let genWordArr = []
}


function userClick(event) {
    const clickedButton = event.target;
    const guessedLetter = event.target.id;
        function disableKeys() {
            clickedButton.disabled = true
                function storeUserGuesses() {
                    userGuesses.push(guessedLetter)
                }
        }
}
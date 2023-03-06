# SPACEMAN
Spaceman is a game where a random word is generated and the player has to guess the word by selecting letters to reveal the word. The player only has 6 tries to guess correctly or the player loses.

Formerly known as 'Hangman,' Spaceman is said to have originated in England during the 17th century, where a prisoner facing death by hanging could request the 'Rite of Words and Life' in an attempt to guess the word chosen by the executioner and be set free.

<!-- HTML -->
<!-- Texts -->
<h1>GAME TITLE</h1>
<h3>One liner about game</h3>
<h4>You Win!/ You Lose! declaration<h4>
<divs>for letter buttons</div>

<!-- JAVASCRIPT -->
<!-- Alphabet -->
- will need to declare the letters of the alphabet into an array
- create a button for each value in array

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

<!-- Lives -->
- will need a counter that provides 6 "lives" 
- counter goes down by 1 with each "click" on a letter, if letter is not in generated string
- look into how to subtract/ opposite of i++? i--?
- does i become > instead of < when counting backwards?

const counter = function(display6Lives) {
    function(eventListenerOnAlphabet) {
        for (i = 6; i > alphabet.length; i--)
    }
}

<!-- Guess Word -->
- create an array of strings (try to keep words similarly themed)
- 6 or more characters, unless it's difficult to guess, no spaces (for now)
- each word/string will be assigned an index number, create random number function
- the random number will represent the index number of whatever string will be the mystery word
- make randomWord function work for any/all category arrays (in case there are more-- will function like a method)

const countriesCat = ['Algeria', 'Albania', 'Botswana', 'Bulgaria', 'Cambodia', 'Cameroon', 'Djibouti', 'Denmark', 'Eritrea', 'Estonia', 'Finland', 'Fiji', 'Guatemala', 'Grenada', 'Haiti', 'Honduras', 'Israel', 'Indonesia', 'Jordan', 'Jamaica', 'Kenya', 'Kiribati', 'Lebanon', 'Liechtenstein', 'Malawi', 'Moldova', 'Nicaragua', 'Nauru']

const randomWord = Math.floor(Math.random() * countriesCat.length);

console.log(countriesCat[randomWord])

<!-- Ideally, if time permits -->
- add different categories with larger library of possible words
- add a "hint" button that generates hint depending on the generated word
- allow for 2 players



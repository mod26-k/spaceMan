![](/photos/SPACE%20MAN.png)

<style>
    .flex-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flex-item {
       margin: 0.5rem;
       flex-direction: column;
       
    }
</style>

<div class="flex-container">
<div class="flex-item">![](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)</div>

<div class="flex-item">![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)</div>

<div class="flex-item">![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)</div>
</div>

# Introduction
Space Man is a word-guessing game where the computer generates a random word within a specific theme, and the user has several attempts to guess the correct letters to reveal the word. If the user uses all attempts and does not guess the word correctly, they lose. If they do, they win.

<div>[LIVE DEMO HERE](https://mod26-k.github.io/spaceMan/)</div>

### How It Works
![](/photos/gamepage.png)
The player starts the game by selecting a category, which generates a word within that category. The category button becomes disabled to prevent players from 

![](/photos/wordgenerated.png)
The game informs the player of how many letters are in the generated word and displays the blank spaces for each letter. There is a guess counter at the bottom that tells the player how many attempts at guessing a letter is remaining.

![](/photos/youwin.png)
If the user guesses the word correctly, they win the game. If they don't guess the word correctly, and they've used all their guesses, they lose.

### Technologies Used:
*HTML
*CSS
*Javascript
*VSCode

#### Code I had trouble with
```
querySelectorAll(`.${guessedLetter}`)
        genWordArr[0].forEach(function(letter) {
            if (letter === guessedLetter) {
                character.forEach(function(guess){
                    guess.style.visibility = "visible"
                })
            }
        })
```
This code took me several hours over the course of days to solve because I had to fix many things to make it work. For example:
1. I had created an array within an array which affected the length and values of some variables I was referencing.
2. I had declared variables within a function and I had trouble figuring out how to reference them. I was eventually able to write the function without referencing them.
There was a lot of researching, trouble shooting, testing, and console logging that took up a large chunk of time.

#### Some immediate changes I'd like to make are:
    * To add more categories.
    * To fix the event-listener to only account for clicks on the letter buttons, not in the entire fieldset.
    * To add CSS.
    * To be able to start a new game without refreshing the page. Ideally, by selecting a new category at the end of the game.
    * To fix the category button so that it does not continuously generate new words without clearing the original array.

#### Some features I would like to add to this game in the future are: 
    * To change the guess counter to only subtract guesses, if the player guessed incorrectly. It currently counts down regardless of if the guess is correct or not, which will create problems with larger words.
    * To add an all or nothing feature that allows the player to type in their guess of the entire word. If they guess the entire word, they win. If they get it wrong, game over.
    * To add a timer to prevent unreasonably long game times, but the timer should be able to be toggled on/off by the user.
    * To allow for multiple players. I'd like multiple players to be able to take turns guessing the generated word, and to be able to input their own word to have other players guess, rather than just the generated word.
    * To be able to keep score for all players.
    * To allow players to use their physical keyboard to input words or guesses.
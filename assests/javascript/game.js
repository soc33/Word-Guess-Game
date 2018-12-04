//empty variables for stats
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];

// empty variables for grabbing the HTML text
var answerText = document.getElementById("answerText");
var picture = document.getElementById("picture");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var wordText = document.getElementById("word");
var guessesLeftText = document.getElementById("guessesLeft");
var guessedLettersText = document.getElementById("lettersUsed");
var recipeLinks = document.getElementById("recipeLinks")

// global variables to be used in functions
var computerChoices = ["tomato", "apple", "carrot", "watermelon", "pear"];
var j = "";
var computerWord = "tomato";
var userGuess = "";
var pictures = ["assests/images/tomatoes.jpg", "assests/images/apples.jpg", "assests/images/colorfulcarrots.jpg", "assests/images/Watermelon.jpg", "assests/images/pears.jpg", "assests/images/winner.jpg"];
var flavorText = ["Tomato soup is my favorite soup!", "Cinnamon roll apple pie is the best thing you've ever had!", "The best carrots are multicolored", "Watermelon is the best fruit for centerpieces", "Pears are best served cold", "You solved all the words! Refresh the page to play again."];
var recipes = ["assests/recipes/tomato.html", "assests/recipes/apple.html", "assests/recipes/carrots.html", "assests/recipes/watermelon.html", "assests/recipes/pear.html"];
var usedWords = [];

// function to get new word for blanks
getnewword = function () {
    computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerWord);
    j = "";
    for (i = 0; i < computerWord.length; i++) {
        j += "_";
    }
    wordText.textContent = j;
};

// function to replace the blank with the guessed letter
replaceAt = function (text, index, replacement) {
    return text.substr(0, index) + replacement + text.substr(index + replacement.length);
};

//function to find the correct blank and then use replace function to replace it correctly
setCharacter = function () {
    for (var i = 0; i < computerWord.length; i++) { // loop on all characters
        if (computerWord[i] == userGuess) { // if this is an occurance
            j = replaceAt(j, i, userGuess);
        }
    }
    wordText.textContent = j;
};

//function to "reset" the game
resetGame = function () {
    guessedLetters = [];
    guessedLettersText.textContent = guessedLetters;
    guessesLeft = 10;
    guessesLeftText.textContent = guessesLeft;
    getnewword();
    if (usedWords.indexOf(computerWord) != -1) {
        getnewword();
    }
}

//to get a word upon page load
getnewword();

// function to run game upon a release or a key press
document.onkeyup = function (event) {
    userGuess = event.key;
    if (userGuess >= 'a' && userGuess <= 'z') {
        if (guessedLetters.indexOf(userGuess) === -1) {
            if (guessesLeft != 1) { //if you have guesses left
                if (computerWord.indexOf(userGuess) > -1) { // if the character is found
                    setCharacter();
                    if (j === computerWord) {
                        wins++;
                        winsText.textContent = ("Wins: " + wins);
                        picture.src=pictures[computerChoices.indexOf(computerWord)];
                        answerText.textContent = flavorText[computerChoices.indexOf(computerWord)];
                        recipeLinks.href = recipes[computerChoices.indexOf(computerWord)];
                        recipeLinks.textContent = ("Sample Recipe");
                        usedWords.push(computerWord);
                        resetGame();
                        if (wins === 5) {
                            picture.src=pictures[pictures.length -1];
                            answerText.textContent = flavorText[flavorText.length -1];
                        }
                    }
                } else {//this part works!
                    guessesLeft--;
                    guessesLeftText.textContent = guessesLeft;
                    guessedLetters.push(userGuess);
                    guessedLettersText.textContent = guessedLetters;
                }
            } else {
                // this part works too!!
                losses++;
                lossesText.textContent = ("Losses: " + losses);
                resetGame();
            };
        } else {
            alert("You've already guessed that letter!");
        }
    } else {
        alert("That is not a valid choice!");
    }
}


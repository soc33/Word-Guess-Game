//empty variables for stats
var wins = 0;
var losses = 0;
var guessesLeft = 20;
var guessedLetters = [];
// empty variables for grabbing the HTML text
var answerText = document.getElementById("answerText");
var picture = document.getElementById("picture");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var wordText = document.getElementById("word");
var guessesLeftText = document.getElementById("guessesLeft");
var guessedLettersText = document.getElementById("lettersUsed");

var computerChoices = ["tomato", "apple", "carrot", "watermelon", "pear"];

var computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerWord);
// var wordLength = computerWord.length;
var j;
for (j = ""; j.length <= computerWord.length; j += "_") {
    wordText.textContent = j;
};
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (guessesLeft != 1) {
        if (computerWord.indexOf(userGuess) > -1) {
            for (var i = 0; i < computerWord.length; i++) {
                if (computerWord.charAt(i) === userGuess) {
                    var letter = computerWord.charAt(i);
                    j.prototype.CharAt(i) = letter;
                    if (j === computerWord) {
                        wins++;
                        winsText.textContent = wins;
                        computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                        console.log(computerWord);
                        for (j = ""; j.length <= computerWord.length; j += "_") {
                            wordText.textContent = j;
                        }
                    }
                }
            }
        } else {
            guessesLeft--;
            guessesLeftText.textContent = guessesLeft;
            guessedLetters.push(userGuess);
            guessedLettersText.textContent = guessedLetters;
        }
    } else {

        losses++;
        lossesText.textContent = ("Losses: " + losses);
        guessedLetters = [];
        guessedLettersText.textContent = guessedLetters;
        guessesLeft = 20;
        guessesLeftText.textContent = guessesLeft;
        computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerWord);
        for (j = ""; j.length <= computerWord.length; j += "_") {
            wordText.textContent = j;
        };
    }
}

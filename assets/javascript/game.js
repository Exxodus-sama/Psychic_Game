// Game's variables

var wins = 0;
var W = document.getElementById("number-of-wins");
W.innerHTML = wins;

var losses = 0;
var L =document.getElementById("number-of-losses");
L.innerHTML = losses;

var guessesLeft = 9;
var GL = document.getElementById("guesses-left");
GL.innerHTML = guessesLeft

// Guesses so far is an array because there are multiple varying letters every game

var guessesSoFar = [];

// Answer is determined

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Function that initiates the game

document.onkeyup = function(event) {
    // Gets the keys pressed by the user and uses the push() method to
    var userGuess = event.key;
    guessesSoFar.push(userGuess);
    var letterAnswer = letters[Math.floor(Math.random() * letters.length)];
    var GSF = document.getElementById("guesses-so-far");
    GSF.innerHTML = guessesSoFar;

    // Reset Function
        var reset = function (){
        guessesLeft = 9;
        guessesSoFar = [];
    };

// Win and loss conditions
    if (userGuess === letterAnswer) {
        wins++;
        var W = document.getElementById("number-of-wins");
        W.innerHTML = wins;
        reset(guessesLeft, guessesSoFar);
    }

    else if (userGuess !== letterAnswer) {
        guessesLeft--
        var GL = document.getElementById("guesses-left");
        GL.innerHTML = guessesLeft;
    }

    if (guessesLeft === 0) {
        losses++;
        var L = document.getElementById("number-of-losses");
        L.innerHTML = losses;
        reset(guessesLeft, guessesSoFar);
    }
}

// I see that my reset() function doesn't work as intended, it is supposed to clear the letter array and reset--
// the counter to 9 but it doesn't. The user still gets their 9 tries, but the display is confusing. Eventually--
// I will look into properly fixing the function.

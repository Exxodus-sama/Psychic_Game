// Game's variables

var wins = 0;

var losses = 0;

var guessesLeft = 9;

// Guesses so far is an array because there are multipe varying letters every game

var guessesSoFar = [];

// Answer is determined

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Function that initiates the game

document.onkeyup = function(event) {
    // Gets the keys pressed by the user and uses the push() method to 
    var userGuess = event.key;
    guessesSoFar.push(userGuess);
    // Answer is determined
    var letterAnswer = letters[Math.floor(Math.random() * letters.length)];

// Reset Function
    var reset = function() {
        guessesLeft = 9;
        guessesSoFar = [];
    }

// Win and loss conditions
    if (userGuess === letterAnswer) {
        wins++;
        guessesLeft = 9;
    }

    else {
        guessesLeft--
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        reset();
    }
}

// We need a list of words to choose from in an array

var words = ["earth", "mars", "neptune", "venus", "mercury", "saturn", "pluto", "jupiter", "uranus", ];

//global vars

var chosenWord = "";
var charInWord = [];
var underScores = 0;
var underSoreAndCorrect = []; // m _ _ s
var wrongChar = [];


    // Keep track of losses, wins, & ties

var losses = 0;
var wins = 0;
var tries = 0;

// Randomly select a word from the array

function game() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    charInWord = chosenWord.split("");
    underScores = charInWord.length;

    // Resets

    tries = 9;
    wrongChar = [];
    underSoreAndCorrect = [];  

    for (var i=0; i < underScores; i++) {
        underSoreAndCorrect.push("_");
    }

    document.getElementById("underScore").innerHTML = underSoreAndCorrect.join(" ");
    document.getElementById("tries").innerHTML = tries;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;

}

    // If userInput !== a correct character  and display incorrect character chosen
    // If userInput === a correct character replace "_" with correct character

function check(letters) {
    var charInWord = false;
    
        for (var i = 0; i <underScores; i++) {
            if(chosenWord[i] == letters) {
                charInWord = true;
            }
        }
        if (charInWord) {
            for (var i = 0; i < underScores; i++) {
                if(chosenWord[i] == letters) {
                    underSoreAndCorrect[i] = letters;
                }
            }
        }
        else {
            wrongChar.push(letters);
            tries--
        }
}

// finishes and starts new game

function gameOver() {

    // restarts these counters each time new game starts

        document.getElementById("tries").innerHTML = tries;
        document.getElementById("underScore").innerHTML = underSoreAndCorrect.join(" ");
        document.getElementById("wrongGuess").innerHTML = wrongChar.join(" ");

        // Alert of win once all "_ _ _ _" are replaced with char

        if (charInWord.toString() == underSoreAndCorrect.toString()) {
            wins++;
            alert("you Won!");
            document.getElementById("wins").innerHTML = wins;

            game(); // restarts game
        }

        // Alert of loss once all tries are used

        else if (tries == 0) {
            losses++;
            alert("You Loose, Try Again!");
            document.getElementById("losses").innerHTML = losses;
        
            game(); // restarts game
        }

}
// Call on func's

game();

// Create user input

document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    check(userInput);
    gameOver();
}
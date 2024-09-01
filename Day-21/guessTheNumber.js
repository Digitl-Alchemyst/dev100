const readline = require('readline');

function numberGuessingGame() {
    // Generate a random number between 1 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    // Create the readline interface
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Prompt the user for a guess
    rl.question("Guess the number between 1 to 100: ", (guessTheNumber) => {
        // Convert the guess to an integer
        guessTheNumber = parseInt(guessTheNumber);

        console.log("You guessed the number: " + guessTheNumber);

        // Check if the guessed number is correct
        if (guessTheNumber === randomNumber) {
            console.log("You guessed the correct number!");
        } else {
            console.log("You guessed the wrong number. The correct number was: " + randomNumber);
        }

        // Close the readline interface
        rl.close();
    });
}

numberGuessingGame();
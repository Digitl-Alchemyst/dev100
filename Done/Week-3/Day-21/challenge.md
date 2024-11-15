Day 7 Coding Challenge: Number Guessing Game

## Problem Statement
Implement a simple number guessing game. The computer will think of a random number between 1 and 100, and the player (user) will try to guess it. The game should provide feedback on whether the guess is too high, too low, or correct.

## Function Signature
```javascript
function numberGuessingGame() {
   // Your code here 
}
```

## Input
The function should prompt the user for guesses.

## Output
The function should print feedback for each guess and a congratulatory message when the correct number is guessed.

## Example Interaction

Guess a number between 1 and 100:

50 Too high! Try again. 25 Too low! Try again. 37 Correct! You guessed the number in 3 tries.


## Test the Function
numberGuessingGame();

## Expanded Instructions

### Step 1: Understanding the Problem

In this challenge, you need to create a game where the computer picks a random number between 1 and 100. The player will try to guess this number. After each guess, the computer will tell the player whether the guessed number is too high, too low, or correct. The game keeps going until the player guesses the correct number. The computer should also count how many guesses it took for the player to get the right answer.

### Step 2: Potential Solutions

**While Loop Approach:**
- **What is a Loop?**  
  A loop is a programming concept that repeats a block of code as long as a certain condition is true. In this game, you can use a loop to keep asking the player for guesses until they guess the correct number.
  
- **Using the `while` loop:**  
  The `while` loop is perfect for this scenario because it keeps running the game until the player guesses the right number. Inside the loop, you will check if the player’s guess is higher, lower, or equal to the computer's number and give feedback accordingly.

### Step 3: Implementing the Function

**1. Generate a Random Number:**
- **Why Generate a Random Number?**  
  The game needs a number for the player to guess. We use a built-in function to create this number randomly so that it’s different each time the game starts.

- **Code to Generate:**  
  We use `Math.random()` to generate a decimal number between 0 and 1. Since we need a whole number between 1 and 100, we multiply this number by 100 and then use `Math.floor()` to round it down to the nearest whole number. Finally, we add 1 to ensure the number is at least 1.

**2. Set Up the Game:**
- **Initializing Variables:**  
  We need to keep track of how many guesses the player makes, so we set up a variable called `attempts` and start it at 0. Another variable called `guess` will hold the player’s current guess.

**3. Start the Game Loop:**
- **Why Use a Loop?**  
  The loop will keep asking the player for their guess until they get it right. Each time through the loop, we:
  - Ask the player for their guess (using `prompt()` in a browser).
  - Increase the number of attempts by 1.
  - Check if the guess is too high, too low, or correct.

- **Checking the Guess:**  
  - If the guess is not a number (maybe the player typed something wrong), we tell them to enter a valid number.
  - If the guess is too high, we tell the player it’s too high.
  - If the guess is too low, we tell the player it’s too low.
  - If the guess is correct, we congratulate them and tell them how many tries it took.

**4. Finish the Game:**
- **When the Player Wins:**  
  Once the player guesses correctly, the loop ends, and we print a message that includes the number of attempts it took.

**5. Notes for Different Environments:**
- **Browser vs. Node.js:**  
  This example uses `prompt()` to get user input, which works in web browsers. If you're using Node.js, you'll need to use a different method, such as the `readline` module, to get user input from the console.

**Sample Implementation:**

```javascript
function numberGuessingGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let guess;

  console.log("Guess a number between 1 and 100:");

  while (guess !== randomNumber) {
    guess = parseInt(prompt("Enter your guess:"));
    attempts++;

    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
    } else if (guess > randomNumber) {
      console.log("Too high! Try again.");
    } else if (guess < randomNumber) {
      console.log("Too low! Try again.");
    } else {
      console.log(`Correct! You guessed the number in ${attempts} tries.`);
    }
  }
}
```

### Bonus Challenge

**Make the Game Replayable**
- **Problem:**  
  Modify the game so that after the player guesses the correct number, they are asked if they want to play again. If they say yes, the game starts over with a new random number. If they say no, the game ends.

- **Hint:**  
  You can wrap the entire game logic in a loop that keeps the game running until the player decides to stop playing. After each game, ask the player if they want to play again, and based on their response, either restart the game or exit.


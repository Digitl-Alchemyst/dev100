# Day 2 Coding Challenge: FizzBuzz

## Problem Statement

Implement the classic FizzBuzz problem. Create a function that prints numbers from 1 to `n`, but for multiples of 3, print `"Fizz"` instead of the number, for multiples of 5, print `"Buzz"`, and for numbers that are multiples of both 3 and 5, print `"FizzBuzz"`.

## Function Signature

This function will take 1 input, which we'll call `n`. The function will not return any values, but it will print the appropriate sequence.

```javascript
function fizzBuzz(n) {
   // Your code here 
}
```

### Input

- **n**: A positive integer

### Output

The function should print the FizzBuzz sequence up to `n`.

### Example

- **Input:** `15`
- **Output:** `1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz`

### Test the Function

```javascript
fizzBuzz(15);
```

### Expanded Instructions

#### Step 1: Understanding the Problem
The FizzBuzz problem is a classic programming challenge that tests your understanding of conditionals and loops. You need to iterate through numbers from 1 to `n`, applying different rules based on divisibility.

#### Step 2: Potential Solutions
Using a `for` loop and `if-else` statements:

- Iterate through the numbers using a `for` loop, and use `if-else` statements to check divisibility and print the appropriate output.

#### Step 3: Implementing the Function

```javascript
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
```

### Explanation:

The function uses a for loop to iterate from 1 to n. For each number, it checks if it's divisible by both 3 and 5 ("FizzBuzz"), then if it's divisible by 3 ("Fizz"), then if it's divisible by 5 ("Buzz"). If none of these conditions are met, it prints the number itself.
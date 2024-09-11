# Day 6 Coding Challenge: Currying

## Problem Statement

Implement a function called `curry` that takes a function as an argument and returns a curried version of that function. Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

Then, create a function called `add` that takes three numbers as arguments and returns their sum. Use the `curry` function to create a curried version of `add`.

## Function Signatures

1. Curry Function:
   `function curry(fn)`

2. Add Function:
   `function add(a, b, c)`

## Input
- `fn`: A function to be curried

## Output
The `curry` function should return a curried version of the input function.

## Examples
1. Usage:
```javascript
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Should output 6
console.log(curriedAdd(1, 2)(3)); // Should also output 6
console.log(curriedAdd(1)(2, 3)); // Should also output 6
```

## Test the Functions

Create a curried version of the `add` function using the `curry` function. Test it with various combinations of arguments to ensure it works correctly.

## Expanded Instructions

### Step 1: Understanding the Problem
The goal is to create a function that can curry other functions. Currying transforms a function with multiple arguments into a sequence of functions, each with a single argument.

### Step 2: Implementing the Functions

Implement the `curry` function and the `add` function as described in the function signatures.

### Step 3: Testing the Functions

After implementing the functions, create a curried version of `add` and test it with various combinations of arguments.

### Explanation:
This challenge introduces currying, an advanced functional programming technique. Currying can be useful for creating more flexible and reusable functions, as it allows partial application of a function's arguments.
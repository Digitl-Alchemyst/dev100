# Day 2 Coding Challenge: Higher-Order Functions

## Problem Statement

Create a higher-order function called `operateOnArray` that takes an array and a callback function as arguments. The `operateOnArray` function should apply the callback function to each element of the array and return a new array with the results.

Then, create three callback functions to use with `operateOnArray`:
1. A function that doubles a number
2. A function that squares a number
3. A function that converts a number to its absolute value

## Function Signatures

1. Higher-Order Function:
```javascript
   `function operateOnArray(arr, callback)`
```

2. Callback Functions:
```javascript
   `const double = (num) =>`
   `const square = (num) =>`
   `const absolute = (num) =>`
```

## Input
- `arr`: An array of numbers
- `callback`: A function to apply to each element of the array

## Output
A new array with the results of applying the callback function to each element of the input array.

## Examples
1. Input: `arr = [1, 2, 3, 4, 5], callback = double`
   Output: `[2, 4, 6, 8, 10]`

2. Input: `arr = [1, 2, 3, 4, 5], callback = square`
   Output: `[1, 4, 9, 16, 25]`

3. Input: `arr = [-2, -1, 0, 1, 2], callback = absolute`
   Output: `[2, 1, 0, 1, 2]`

## Test the Functions

Test the `operateOnArray` function with each of the callback functions and the following array:
`[-3, -2, -1, 0, 1, 2, 3]`

## Expanded Instructions

### Step 1: Understanding the Problem
The goal is to create a higher-order function that can apply any given operation to all elements of an array. This demonstrates how functions can be passed as arguments and used to create more flexible and reusable code.

### Step 2: Implementing the Functions

Implement the `operateOnArray` function and the three callback functions as described in the function signatures.

### Step 3: Testing the Functions

After implementing the functions, test `operateOnArray` with each of the callback functions using the provided test case.

### Explanation:
This challenge introduces higher-order functions, which are functions that can accept other functions as arguments or return functions. It also demonstrates how callback functions can be used to create more flexible and reusable code.
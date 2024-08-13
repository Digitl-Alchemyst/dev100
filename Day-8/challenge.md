# Coding Challenge: Variable Swap

## Problem

Write a JavaScript function that swaps the values of two variables without using a temporary variable.

The challenge is to swap the values of two variables without using a third, temporary variable. Normally, if you want to swap two variables, you'd temporarily store one of them in another variable. However, this challenge asks you to find a way to swap them directly.

## Function Signature

```javascript
function swapVariables(a, b) {
  // Your code here
}
```

## Input

- **a** and **b**: These are the two values that you need to swap. They can be any type of values, such as numbers, strings, or even objects.

## Output

The function should return an array containing the swapped values, in the format `[b, a]`. Additionally, the function should reassign the values of `a` and `b` within the function itself, so that after the function call, `a` holds the value of `b` and vice versa.

## Example

- **Input:** `a = 5`, `b = 10`
- **Output:** `[10, 5]`, `a = 10`, `b = 5`
- **After Function Call:** `a = 10`, `b = 5`


## Test the Function

```javascript
let a = 5;
let b = 10;

let swappedNumbers = swapVariables(a, b);
console.log(swappedNumbers); // Should print [10, 5]

[a, b] = swappedNumbers;
console.log(a); // Should print 10
console.log(b); // Should print 5

let x = 'apple';
let y = 'orange';

swappedString = swapVariables(x, y);
console.log(swappedString); // Should print ['orange', 'apple']

[x, y] = swappedString;
console.log(x); // Should print 'orange'
console.log(y); // Should print 'apple'
```
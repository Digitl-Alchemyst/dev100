# Day 1 Coding Challenge: Variable Swap

## Problem

Write a JavaScript function that swaps the values of two variables without using a temporary variable.

The challenge is to swap the values of two variables without using a third, temporary variable. Normally, if you want to swap two variables, you'd temporarily store one of them in another variable. However, this challenge asks you to find a way to swap them directly.

## Function Signature

This function will take 2 inputs, You can use any value in the example we will use `a` & `b`, and it will return an array containing the swapped values, in the format `[a, b]`.

Here’s how the structure of the function should look:

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

- **Input:** `a = 'apple'`, `b = 'orange'`
- **Output:** `['orange', 'apple']`, `a = 'orange'`, `b = 'apple'`
- **After Function Call:** `a = 'orange'`, `b = 'apple'`


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

## Expanded Instructions

**Spiolers**

### Step 1: Understand the Problem
The challenge is to swap the values of two variables without using a third, temporary variable. Normally, if you want to swap two variables, you'd temporarily store one of them in another variable. However, this challenge asks you to find a way to swap them directly. Here are some key points to consider:
- **Variables**: You have two variables, `a` and `b`, and you need to swap their values.
- **No Temporary Variable**: You cannot use a third variable to store one of the values temporarily.
- **Return Value**: The function should return an array containing the swapped values.
- **Reassigning Variables**: After the function call, the values of `a` and `b` should be swapped.

 ## Step 2: Consider Possible Solutions
There are several ways to achieve this in JavaScript. Here are two common methods:

### Using Arithmetic Operations:

You can use addition and subtraction (or multiplication and division) to swap the values.
Example:

```javascript
a = a + b;
b = a - b;
a = a - b;
```

This method modifies a and b directly, ensuring the swap happens in place.

### Using Destructuring Assignment:

JavaScript has a feature called destructuring assignment, which allows you to swap values easily.
Example:

```javascript
[a, b] = [b, a];
```

In this case, the values of a and b are swapped in a single line. The function should return [a, b] after this swap to show the swapped values.



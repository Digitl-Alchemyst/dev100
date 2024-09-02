# Day 1 Coding Challenge: Even or Odd Checker

## Problem Statement

Create a function in JavaScript that determines whether a given number is even or odd. This challenge will introduce you to basic conditional statements and the use of the modulo operator.

## Function Signature

This function will take 1 input, which we'll call `num`, and it will return a string indicating whether the number is even or odd.

```javascript
function isEvenOrOdd(num) {
  // Your code here
}
```

### Input

- **num**: An integer

### Output

A string that is either:

- `"Even"` if the number is even
- `"Odd"` if the number is odd

## Examples

- **Input:** `4`
- **Output:** `"Even"`

- **Input:** `7`
- **Output:** `"Odd"`

## Test the Function

```javascript
console.log(isEvenOrOdd(4)); // Should print "Even"
console.log(isEvenOrOdd(7)); // Should print "Odd"
```

## Bonuses

- **Bonus 1:** The function should handle and array of numbers.

```javascript
arr = [47, 183, 76, 92, 129, 251, 39, 168, 102, 205, 88, 149, 214, 54, 33, 238, 71, 187, 121, 43, 97, 215, 134, 210, 6];

function isArrayEvenOrOdd(arr) {
  // Your code here
}

console.log(isArrayEvenOrOdd(arr)); // [  '47 is odd',   '183 is odd',  '76 is even',  '92 is ven',  '129 is odd',  '251 is odd',  '39 is odd',   '168 is even',  '102 is even', '205 is dd',  '88 is even',  '149 is odd',  '214 is even', '54 is even',  '33 is odd',   '238 is even',  '71 is odd',   '187 is odd',  '121 is odd',  '43 is odd',  '97 is odd',   '215 is odd',  '134 is even', '210 is even',  '6 is even' ]
```

- **Bonus 2:** Sort the array of numbers into seperate even and odd arrays.

```javascript
function sortOddsAndEvens(arr) {
  // Your code here
}

console.log(sortOddsAndEvens([12, 7, 24, 3, 18, 22, 5, 9, 41, 14, 33, 28])); // Should print { even: [12, 24, 18, 22, 14, 28], odd: [7, 3, 5, 9, 41, 33] }
console.log(sortOddsAndEvens([45, 19, 8, 30, 2, 27, 10, 50, 4, 39, 17, 13])); // Should print { even: [8, 30, 2, 10, 4, 50, 4], odd: [45, 19, 27, 39, 17, 13] }
console.log(
  sortOddsAndEvens([132, 475, 256, 104, 387, 294, 189, 412, 67, 439, 311, 489]),
); // Should print { even: [132, 256, 104, 294, 412, 4], odd: [475, 387, 67, 439, 311, 489] }
console.log(
  sortOddsAndEvens([101, 236, 482, 319, 77, 405, 152, 279, 451, 18, 163, 396]),
); // Should print { even: [236, 482, 152, 405, 18, 396], odd: [101, 319, 77, 451, 163] }
```

## Expanded Instructions

### Step 1: Understanding the Problem
The goal is to create a function that can determine if a given number is even or odd. An even number is divisible by 2 with no remainder, while an odd number leaves a remainder of 1 when divided by 2.

**Key Concepts:**
- **Even Numbers:** Numbers divisible by 2 (e.g., 2, 4, 6).
- **Odd Numbers:** Numbers not divisible by 2 (e.g., 1, 3, 5).
- **Modulo Operator (`%`):** This operator returns the remainder when one number is divided by another. In this challenge, you’ll use it to determine whether the number is even or odd.


### Step 2: Potential Solutions
Using the Modulo Operator: The most straightforward way to check if a number is even or odd is to use the modulo operator (`%`). If a number modulo 2 equals 0, it's even; otherwise, it's odd.

### Step 3: Implementing the Function

```javascript
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
```

**Explanation:**
The function uses an `if-else` statement to check if the remainder of the number divided by 2 is 0. If it is, the function returns `"Even"`. Otherwise, it returns `"Odd"`.

### Example Usage:

```javascript
console.log(isEvenOrOdd(4)); // Output: "Even"
console.log(isEvenOrOdd(7)); // Output: "Odd"
```
````

# Day 3 Coding Challenge: String Reversal

## Problem Statement

Create a function that takes a string as input and returns the string reversed, without using the built-in `reverse()` method in JavaScript.

For example, if the input string is `"JavaScript"`, the function should return `"tpircSavaJ"`.

Reversing a string is a common task that helps you better understand how to manipulate strings and work with different data structures in JavaScript. It’s a good exercise for practicing loops, arrays, and string manipulation.

**Do NOT Use**

```javascript
.reverse();
array.reverse();
.toReversed();
array.toReversed()
Array.prototype.reverse();
Array.prototype.toReversed();
```

## Function Signature

This function will take 1 input, which we'll call `str`, and it will return the reversed version of that string.

Here’s how the structure of the function should look:

```javascript
function reverseString(str) {
  // Your code here
}
```

## Input

- **str**: This is the string you want to reverse.

## Output

The function should return a new string that is the reverse of the input string. For example, if you provide the string `"JavaScript"`, the function should return `"tpircSavaJ"`.

## Example

- **Input:** `"JavaScript"`
- **Output:** `"tpircSavaJ"`

- **Input:** `"Hello"`
- **Output:** `"olleH"`

- **Input:** `"12345"`
- **Output:** `"54321"`

## Test the Function

```javascript
console.log(reverseString("JavaScript")); // Should print "tpircSavaJ"
console.log(reverseString("Hello")); // Should print "olleH"
console.log(reverseString("12345")); // Should print "54321"
```

## Expanded Instructions

**Spiolers**

### Step 1: Understanding the Problem
Your goal is to create a function that can take any string and return it in reverse order. This task helps reinforce your understanding of string manipulation and working with loops or other methods to rearrange data.

### Step 2: Potential Solutions
Since you cannot use the built-in `reverse()` method, you’ll need to think of other ways to reverse a string. One common approach is to convert the string into an array of characters, reverse the array manually, and then join it back into a string. Alternatively, you could loop through the string from the end to the beginning and build a new reversed string.

### Step 3: Implementing the Function
You can loop through the string, starting from the last character and working your way to the first character, appending each character to a new string.

For example:
```javascript
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
```

This function works by iterating through the string from the end to the beginning, and adding each character to a new string that is returned as the reversed string.
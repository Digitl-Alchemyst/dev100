# Day 2 Coding Challenge: Data Type Checker

## Problem Statement

Create a function that can take any kind of value—whether it's a number, a string of text, a boolean value (`true` or `false`), or even more complex types like objects or arrays—and determine what type it is. The function should then return that type as a string of text.

For example, if the input is the number `5`, the function should return the string `"number"`. If the input is the text `"Hello"`, the function should return the string `"string"`.

In JavaScript, every piece of data has a specific type, such as a number, string, boolean, object, etc. Knowing the type of a value is important because it determines how the value can be used in your code. This kind of function is useful because it helps you understand what kind of data you’re dealing with, which can prevent errors and help your code run smoothly.

## Function Signature

This function will take 1 input, which we'll call `value`, and it will return the type of that input as a string.

Here’s how the structure of the function should look:

```javascript
function getDataType(value) {
  // Your code here
}
```

## Input

- **value**: This is any value that you can use in JavaScript. It could be a number, a string, a boolean (`true` or `false`), or any other type of value that JavaScript can recognize.

## Output

The function should return a string (text) that tells you the type of the value you provided as input. For example, if you provide a number like `5`, the function should return the word `"number"` to indicate that the value is of type number.

## Examples

- **Input:** `5`
- **Output:** `"number"`

- **Input:** `"Hello"`
- **Output:** `"string"`

- **Input:** `true`
- **Output:** `"boolean"`


## Test the Function

```javascript
console.log(getDataType(5)); // Should print "number"
console.log(getDataType("Hello")); // Should print "string"
console.log(getDataType(true)); // Should print "boolean"
```

# Bonus Challenge
In JavaScript, arrays are a type of object. When you use the typeof operator to check the type of an array, it will return "object" instead of "array". This is because, under the hood, arrays are just special kinds of objects that have additional properties and methods for handling ordered collections of data.

Include functionality to check if the input is an array and return the type as "array" if it is.

## Expanded Instructions

**Spiolers**

### Step 1: Understanding the Problem
Your goal is to create a function that can look at any value and tell you what kind of value it is. In JavaScript, every value has a type, such as `number`, `string`, or `boolean`. This function will help identify that type.

### Step 2: Implementing the Function
You can use JavaScript's `typeof` operator to find out what type a value is. The `typeof` operator returns a string that represents the type of the value you give it. 

For example:
```javascript
typeof 5; // returns "number"
typeof "Hello"; // returns "string"
typeof true; // returns "boolean"
```
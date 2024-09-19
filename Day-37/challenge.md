# Day 2 Challenge: Object Methods and 'this' Keyword

## Problem Statement
Create an object representing a calculator with methods for basic arithmetic operations (add, subtract, multiply, divide). Each method should use the 'this' keyword to access a 'result' property of the object, updating it with each operation.

## Function Signature
`createCalculator()`

## Input
No input for creating the calculator. The arithmetic methods will take numbers as inputs.

## Output
An object with methods for add, subtract, multiply, divide, and getResult.

## Example
const calc = createCalculator();
calc.add(5);
calc.multiply(3);
calc.subtract(2);
calc.divide(2);
console.log(calc.getResult()); // Should output 5.5

## Test the Function
Create a calculator object and perform a series of operations, testing edge cases like division by zero.
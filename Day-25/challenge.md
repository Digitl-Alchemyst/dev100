# Day 4 Coding Challenge: Function Composition

## Problem Statement

Implement a function called `compose` that takes multiple functions as arguments and returns a new function that composes the given functions. The composition should be applied from right to left.

Then, create three simple functions to use with `compose`:
1. A function that adds 2 to a number
2. A function that multiplies a number by 3
3. A function that subtracts 1 from a number

## Function Signatures

1. Compose Function:
   `function compose(...functions)`

2. Simple Functions:
   `const add2 = (x) =>`
   `const multiplyBy3 = (x) =>`
   `const subtract1 = (x) =>`

## Input
- `...functions`: Any number of functions to be composed

## Output
The `compose` function should return a new function that is the composition of the input functions.

## Examples
1. Usage:
const composed = compose(add2, multiplyBy3, subtract1);
console.log(composed(4)); // Should output 13
// Explanation: add2(multiplyBy3(subtract1(4))) = add2(multiplyBy3(3)) = add2(9) = 11

## Test the Function

Create a composed function using the `compose` function and the three simple functions. Test it with several different input values.

## Expanded Instructions

### Step 1: Understanding the Problem
The goal is to create a function that can compose any number of functions together. Function composition is the process of combining two or more functions to produce a new function.

### Step 2: Implementing the Functions

Implement the `compose` function and the three simple functions as described in the function signatures.

### Step 3: Testing the Function

After implementing the functions, create a composed function and test it with various inputs to ensure it works correctly.

### Explanation:
This challenge introduces function composition, a fundamental concept in functional programming. It demonstrates how we can create more complex functions by combining simpler ones, promoting code reuse and modularity.
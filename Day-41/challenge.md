# Day 6 Challenge: Advanced Object Manipulation

## Problem Statement
Implement a deep clone function for objects (including nested objects and arrays), and a function to perform a deep comparison between two objects.

## Function Signatures
1. `deepClone(obj)`
2. `deepEqual(obj1, obj2)`

## Input
- `obj`, `obj1`, `obj2`: Objects (potentially with nested structures)

## Output
- `deepClone`: A new object that is a deep copy of the input
- `deepEqual`: A boolean indicating whether the objects are deeply equal

## Example
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const clone = deepClone(original);
console.log(deepEqual(original, clone)); // Should output true
clone.b.c = 5;
console.log(deepEqual(original, clone)); // Should output false

## Test the Functions
Test with objects containing various data types, nested structures, and edge cases like circular references.
# Day 7 Challenge: Advanced Array Operations

## Problem Statement
Implement a function that performs a deep comparison of two arrays, and another function that flattens a nested array structure.

## Function Signatures
1. `deepArrayComparison(arr1, arr2)`
2. `flattenNestedArray(arr)`

## Input
- `arr1`, `arr2`: Two arrays to compare for `deepArrayComparison`
- `arr`: A nested array structure for `flattenNestedArray`

## Output
- `deepArrayComparison`: A boolean indicating whether the arrays are deeply equal
- `flattenNestedArray`: A new, flattened array

## Example
Input: 
- arr1 = [1, [2, [3, 4]], 5]
- arr2 = [1, [2, [3, 4]], 5]
- nestedArr = [1, [2, [3, 4]], 5]

Output:
- deepArrayComparison(arr1, arr2) should return true
- flattenNestedArray(nestedArr) should return [1, 2, 3, 4, 5]

## Test the Functions
Test each function with various inputs, including arrays with different nesting levels and arrays containing different data types.
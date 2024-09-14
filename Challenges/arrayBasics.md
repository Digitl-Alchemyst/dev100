# Day 1 Challenge: Array Creation and Basic Operations

## Problem Statement
Create a function that generates an array of numbers from 1 to n, where n is provided as an input. Then, implement functions to find the sum and average of the array elements.

## Function Signatures
1. `generateArray(n)`
2. `arraySum(arr)`
3. `arrayAverage(arr)`

## Input
- `n`: A positive integer for `generateArray`
- `arr`: An array of numbers for `arraySum` and `arrayAverage`

## Output
- `generateArray`: An array of numbers from 1 to n
- `arraySum`: The sum of all elements in the array
- `arrayAverage`: The average of all elements in the array

## Example
Input: n = 5
Output:
- generateArray(5) should return [1, 2, 3, 4, 5]
- arraySum([1, 2, 3, 4, 5]) should return 15
- arrayAverage([1, 2, 3, 4, 5]) should return 3

## Test the Functions
Test each function with various inputs, including edge cases like an empty array or n = 0.
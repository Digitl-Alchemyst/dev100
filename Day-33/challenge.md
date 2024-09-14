# Day 5 Challenge: Multi-dimensional Arrays

## Problem Statement
Implement functions to work with 2D arrays: one that transposes a 2D array (swaps rows and columns), and another that calculates the sum of each row in a 2D array.

## Function Signatures
1. `transposeMatrix(matrix)`
2. `rowSums(matrix)`

## Input
- `matrix`: A 2D array of numbers for both functions

## Output
- `transposeMatrix`: A new 2D array with rows and columns swapped
- `rowSums`: An array containing the sum of each row in the input matrix

## Example
Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Output:
- transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
- rowSums([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [6, 15, 24]

## Test the Functions
Test each function with various inputs, including non-square matrices and matrices with negative numbers.
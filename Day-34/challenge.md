# Day 6 Challenge: Array Manipulation and Algorithms

## Problem Statement
Create a function that rotates an array to the right by k steps, and another function that finds the longest increasing subsequence in an array.

## Function Signatures
1. `rotateArray(arr, k)`
2. `longestIncreasingSubsequence(arr)`

## Input
- `arr`: An array of numbers for both functions
- `k`: The number of steps to rotate for `rotateArray`

## Output
- `rotateArray`: A new array rotated k steps to the right
- `longestIncreasingSubsequence`: The length of the longest increasing subsequence in the array

## Example
Input: [1, 2, 3, 4, 5], k = 2
Output:
- rotateArray([1, 2, 3, 4, 5], 2) should return [4, 5, 1, 2, 3]
- longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]) should return 4

## Test the Functions
Test each function with various inputs, including arrays of different lengths and edge cases like k being larger than the array length.
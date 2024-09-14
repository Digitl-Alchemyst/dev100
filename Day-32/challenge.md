# Day 4 Challenge: Array Sorting and Searching

## Problem Statement
Create a function that sorts an array of numbers in ascending order, and another function that performs a binary search on a sorted array.

## Function Signatures
1. `sortArray(arr)`
2. `binarySearch(arr, target)`

## Input
- `arr`: An array of numbers for both functions
- `target`: The number to search for in `binarySearch`

## Output
- `sortArray`: A new array with elements sorted in ascending order
- `binarySearch`: The index of the target element if found, or -1 if not found

## Example
Input: [5, 2, 8, 1, 9]
Output:
- sortArray([5, 2, 8, 1, 9]) should return [1, 2, 5, 8, 9]
- binarySearch([1, 2, 5, 8, 9], 5) should return 2

## Test the Functions
Test each function with various inputs, including arrays with duplicate elements and searching for elements not in the array.
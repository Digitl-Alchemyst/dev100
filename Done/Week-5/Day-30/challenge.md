# Code Challenge: Array Filtering and Mapping

## Problem Statement

Create two JavaScript functions: one that filters an array to keep only even numbers, and another that squares each element in an array. These functions will demonstrate the use of array methods and basic mathematical operations in JavaScript.

## Function Signatures

```javascript
function filterEvenNumbers(arr) {
   // Your code here 
}

function squareElements(arr) {
   // Your code here
}
```

## Input

Both functions take a single parameter:
- `arr`: An array of numbers (can include positive integers, negative integers, and zero)

## Output

- `filterEvenNumbers`: Returns a new array containing only the even numbers from the input array
- `squareElements`: Returns a new array with each element squared from the input array

## Example

### Input:

`[1, 2, 3, 4, 5]`

### Output:

For `filterEvenNumbers`:
`[2, 4]`

For `squareElements`:
`[1, 4, 9, 16, 25]`

## Constraints

- The input array can contain up to 10^5 elements
- Each element in the array is an integer between -10^6 and 10^6
- The functions should not modify the original input array

## Bonus Challenge

Implement a third function `filterAndSquare(arr)` that combines both operations: first filtering for even numbers, then squaring the results. Try to do this in a single line using method chaining.

## Detailed Explanation

### **Spoilers Ahead**

1. For `filterEvenNumbers`:
   - Use the `filter` method to create a new array
   - The filter condition should check if each number is even using the modulo operator (`%`)

2. For `squareElements`:
   - Use the `map` method to create a new array
   - The mapping function should square each element

3. For the bonus `filterAndSquare`:
   - Chain the `filter` and `map` methods together

## Code Solution

```javascript
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function squareElements(arr) {
    return arr.map(num => num * num);
}

// Bonus challenge
function filterAndSquare(arr) {
    return arr.filter(num => num % 2 === 0).map(num => num * num);
}
```

## Time and Space Complexity

- Time Complexity: O(n) for both functions, where n is the length of the input array
- Space Complexity: O(n) in the worst case, where all elements meet the filtering criteria or for the squaring operation

Both functions iterate through the array once, performing a constant-time operation on each element.

## Test Cases

1. Test Case 1:
   - Input: `[1, 2, 3, 4, 5]`
   - Expected Output for filterEvenNumbers: `[2, 4]`
   - Expected Output for squareElements: `[1, 4, 9, 16, 25]`

2. Test Case 2:
   - Input: `[-2, -1, 0, 1, 2]`
   - Expected Output for filterEvenNumbers: `[-2, 0, 2]`
   - Expected Output for squareElements: `[4, 1, 0, 1, 4]`

3. Test Case 3:
   - Input: `[]`
   - Expected Output for both functions: `[]`

4. Test Case 4 (for bonus challenge):
   - Input: `[1, 2, 3, 4, 5, 6]`
   - Expected Output for filterAndSquare: `[4, 16, 36]`

## Notes

- These functions demonstrate the power of JavaScript's built-in array methods.
- The `filter` method is useful for selecting elements that meet certain criteria.
- The `map` method is excellent for transforming each element in an array.
- Chaining these methods can lead to concise and readable code.

## Related Problems

- Array Sum: Calculate the sum of all elements in an array
- Array Transformation: Apply more complex transformations to array elements
- Reduce Method: Use the `reduce` method to perform cumulative operations on arrays

## Key Takeaways

- JavaScript array methods like `filter` and `map` are powerful tools for data manipulation
- These methods create new arrays, which helps in writing immutable code
- Chaining array methods can lead to elegant solutions for complex operations
- Understanding these concepts is crucial for effective array manipulation in JavaScript

## References

- [MDN Web Docs: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN Web Docs: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [JavaScript.info: Array methods](https://javascript.info/array-methods)

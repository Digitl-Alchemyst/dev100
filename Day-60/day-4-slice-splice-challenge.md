# Code Challenge: Array Manipulation with slice() and splice()

## Problem Statement

In this challenge, you will work with an array of fruit names. Your task is to use the `slice()` method to create a new array containing a subset of the fruits, and then use the `splice()` method to modify the original array by removing and adding elements.

This challenge introduces two important array methods: `slice()` for creating a new array with a portion of an existing array, and `splice()` for adding or removing elements from an array at a specified position. These methods are crucial for array manipulation in JavaScript and are commonly used in various programming scenarios.

## Function Signatures

```javascript
function selectFruits(fruits, start, end) {
    // Your code here
}

function modifyFruits(fruits, startIndex, itemsToRemove, ...itemsToAdd) {
    // Your code here
}
```

## Input

For `selectFruits`:
- `fruits`: An array of fruit names
- `start`: The starting index (inclusive) for the slice
- `end`: The ending index (exclusive) for the slice

For `modifyFruits`:
- `fruits`: An array of fruit names
- `startIndex`: The index at which to start modifying the array
- `itemsToRemove`: The number of items to remove
- `...itemsToAdd`: A rest parameter for any number of items to add

## Output

`selectFruits`: Returns a new array containing the selected fruits.
`modifyFruits`: Modifies the original array in place and returns the removed items.

## Example

### Input:

```javascript
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
```

### Output:

For `selectFruits(fruits, 1, 4)`:
```javascript
["banana", "cherry", "date"]
```

For `modifyFruits(fruits, 2, 1, "grape", "kiwi")`:
```javascript
["cherry"]  // returned value (removed items)
// fruits array is now ["apple", "banana", "grape", "kiwi", "date", "elderberry", "fig"]
```

## Constraints

- The input array will contain at least one element.
- The indices for `slice()` and `splice()` should be valid (within the array bounds).

## Testing the Script

To test your solution, you can use the following code:

```javascript
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

console.log(selectFruits(fruits, 1, 4));

const removed = modifyFruits(fruits, 2, 1, "grape", "kiwi");
console.log("Removed:", removed);
console.log("Modified fruits:", fruits);
```

## Bonus Challenge

Implement a function that uses both `slice()` and `splice()` to rotate an array by a given number of positions (positive for right rotation, negative for left rotation).

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge involves two main tasks:

1. Using `slice()` to create a new array containing a subset of elements from the original array.
2. Using `splice()` to modify the original array by removing elements and adding new ones.

Key concepts to understand:

- The `slice()` method extracts a portion of an array without modifying the original array.
- The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

### Step 2: Implementing the Functions

#### Implementation of selectFruits

```javascript
function selectFruits(fruits, start, end) {
    return fruits.slice(start, end);
}
```

This function uses the `slice()` method to create a new array containing elements from the `start` index up to, but not including, the `end` index.

#### Implementation of modifyFruits

```javascript
function modifyFruits(fruits, startIndex, itemsToRemove, ...itemsToAdd) {
    return fruits.splice(startIndex, itemsToRemove, ...itemsToAdd);
}
```

This function uses the `splice()` method to remove `itemsToRemove` number of elements starting from `startIndex`, and then adds the `itemsToAdd` elements at that position. The spread operator (`...`) is used to pass all additional arguments as individual elements to add.

### Step 3: Testing the Functions

You can test the functions with the provided example:

```javascript
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

console.log(selectFruits(fruits, 1, 4));

const removed = modifyFruits(fruits, 2, 1, "grape", "kiwi");
console.log("Removed:", removed);
console.log("Modified fruits:", fruits);
```

**Test Cases**

1. Test Case for selectFruits:
   - Input: `selectFruits(fruits, 0, 3)`
   - Expected Output: `["apple", "banana", "cherry"]`

2. Test Case for selectFruits (empty selection):
   - Input: `selectFruits(fruits, 2, 2)`
   - Expected Output: `[]`

3. Test Case for modifyFruits (only remove):
   - Input: `modifyFruits(fruits, 1, 2)`
   - Expected Output: `["banana", "cherry"]`
   - Modified fruits: `["apple", "date", "elderberry", "fig"]`

4. Test Case for modifyFruits (only add):
   - Input: `modifyFruits(fruits, 2, 0, "grape", "kiwi")`
   - Expected Output: `[]`
   - Modified fruits: `["apple", "banana", "grape", "kiwi", "cherry", "date", "elderberry", "fig"]`

## Time and Space Complexity

- For selectFruits:
  - Time Complexity: O(n), where n is the number of elements being sliced.
  - Space Complexity: O(n), as it creates a new array with the sliced elements.

- For modifyFruits:
  - Time Complexity: O(n), where n is the number of elements after the insertion point.
  - Space Complexity: O(1) for the operation itself, but it modifies the original array.

## References

- [MDN Web Docs: Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [MDN Web Docs: Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## Related Problems

- Implement a function that uses `slice()` to extract alternating elements from an array.
- Create a function that uses `splice()` to insert elements at multiple positions in an array simultaneously.

## Key Takeaways

- `slice()` is useful for creating a new array with a portion of an existing array without modifying the original.
- `splice()` is powerful for in-place array modification, allowing both removal and addition of elements.
- Understanding the difference between methods that modify arrays in place (like `splice()`) and those that create new arrays (like `slice()`) is crucial for effective array manipulation.
- The spread operator (`...`) can be used with `splice()` to add multiple elements in a clean, readable way.

## Notes

While `slice()` and `splice()` are powerful, they have different use cases. `slice()` is often used when you want to work with a portion of an array without affecting the original, making it useful for non-destructive operations. `splice()`, on the other hand, is used when you need to modify the original array, which can be more efficient but requires caution to avoid unintended side effects in your code.

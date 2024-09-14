# Code Challenge: Array Reduction and Transformation

## Problem Statement 

- These functions demonstrate important array manipulation techniques in JavaScript, including iteration, comparison, and filtering.

## Function Signatures

```javascript
function findMaxElement(arr) {
   // Your code here 
}

function removeDuplicates(arr) {
   // Your code here
}
```

## Input

Both functions take a single parameter:
- `arr`: An array of numbers

## Output

- `findMaxElement`: Returns the maximum element in the array (a number)
- `removeDuplicates`: Returns a new array with duplicate elements removed

## Example

### Input:
`[3, 7, 1, 7, 8, 3, 9, 2]`

### Output:
- `findMaxElement([3, 7, 1, 7, 8, 3, 9, 2])` should return `9`
- `removeDuplicates([3, 7, 1, 7, 8, 3, 9, 2])` should return `[3, 7, 1, 8, 9, 2]`

## Constraints

- The input array can contain positive integers, negative integers, and floating-point numbers.
- The array may be empty.
- For `removeDuplicates`, the order of elements in the output array should maintain the order of their first occurrence in the input array.

## Testing the Script

To test the functions, you can use the following code:

```javascript
console.log(findMaxElement([3, 7, 1, 7, 8, 3, 9, 2])); // Expected output: 9
console.log(removeDuplicates([3, 7, 1, 7, 8, 3, 9, 2])); // Expected output: [3, 7, 1, 8, 9, 2]

// Additional test cases
console.log(findMaxElement([-1, -5, -2, -8, -3])); // Expected output: -1
console.log(findMaxElement([0.5, 1.5, 1.2, 3.7, 2.1])); // Expected output: 3.7
console.log(findMaxElement([])); // Expected output: undefined or null (depending on implementation)

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // Expected output: [1, 2, 3]
console.log(removeDuplicates([1.5, 1.5, 2.5, 2.5, 3.5])); // Expected output: [1.5, 2.5, 3.5]
console.log(removeDuplicates([])); // Expected output: []
```

## Bonus Challenge

Implement the `removeDuplicates` function without using any built-in methods like `Set` or `filter`. Use only basic array operations and loops.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge focuses on two common array operations:

1. Finding the maximum element: This requires iterating through the array and keeping track of the largest element seen so far.
2. Removing duplicates: This involves creating a new array with only unique elements from the original array.

Both operations are fundamental in computer science and are often used in data processing and algorithm implementation.

### Step 2: Implementing the Functions

#### findMaxElement

Method 1: Using a loop

```javascript
function findMaxElement(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
```

Method 2: Using Math.max() and spread operator

```javascript
function findMaxElement(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
}
```

#### removeDuplicates

Method 1: Using Set

```javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
```

Method 2: Using filter and indexOf

```javascript
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
```

### Step 3: Testing the Functions

Use the provided test cases in the "Testing the Script" section to verify your implementation.

**Additional Test Cases**

1. Test Case for findMaxElement:
   - Input: `[-1, -5, -2, -8, -3]`
   - Expected Output: `-1`

2. Test Case for removeDuplicates:
   - Input: `[1, 1, 1, 2, 2, 3]`
   - Expected Output: `[1, 2, 3]`

## Time and Space Complexity

- findMaxElement:
  - Time Complexity: O(n)
  - Space Complexity: O(1)

- removeDuplicates (using Set):
  - Time Complexity: O(n)
  - Space Complexity: O(n)

The findMaxElement function needs to iterate through each element once, resulting in linear time complexity. The removeDuplicates function using Set also has linear time complexity, but requires additional space to store the unique elements.

## References

- [MDN Web Docs: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs: Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [JavaScript Array Methods](https://www.w3schools.com/js/js_array_methods.asp)

## Related Problems

- Maximum Subarray: Find the contiguous subarray with the largest sum.
- Two Sum: Find two numbers in an array that add up to a specific target.

## Key Takeaways

- Array iteration and comparison are fundamental operations in programming.
- There are often multiple ways to solve a problem in JavaScript, each with its own trade-offs in terms of readability, performance, and memory usage.
- Built-in methods like `Math.max()` and `Set` can significantly simplify certain operations.
- When dealing with arrays, always consider edge cases like empty arrays or arrays with a single element.

## Notes

While the Set method for removing duplicates is concise and efficient, it may not be suitable in all situations, especially when working with older JavaScript environments or when order preservation is critical. The filter method, while slightly less efficient, can be more flexible and doesn't rely on ES6 features.

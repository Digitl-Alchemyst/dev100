# Code Challenge: Advanced Array Operations

## Problem Statement

Implement two functions that demonstrate advanced array operations in JavaScript:

1. A function that performs a deep comparison of two arrays, potentially containing nested arrays and various data types.
2. A function that flattens a nested array structure into a single-level array.

This challenge aims to enhance your understanding of recursive algorithms, array manipulation, and handling complex data structures, which are crucial skills for dealing with nested data in real-world applications.

## Function Signatures

```javascript
function deepArrayComparison(arr1, arr2) {
   // Your code here 
}

function flattenNestedArray(arr) {
   // Your code here
}
```

## Input

- For `deepArrayComparison`:
  - `arr1`, `arr2`: Two arrays to compare, potentially containing nested arrays and various data types

- For `flattenNestedArray`:
  - `arr`: A nested array structure

## Output

- `deepArrayComparison`: Returns a boolean indicating whether the arrays are deeply equal
- `flattenNestedArray`: Returns a new, flattened array containing all elements from the input array

## Example

### Input:
```javascript
let arr1 = [1, [2, [3, 4]], 5];
let arr2 = [1, [2, [3, 4]], 5];
let nestedArr = [1, [2, [3, 4]], 5];
```

### Output:
```javascript
deepArrayComparison(arr1, arr2);
// should return true

flattenNestedArray(nestedArr);
// should return [1, 2, 3, 4, 5]
```

## Constraints

- The input arrays can contain any valid JavaScript data types, including numbers, strings, booleans, null, undefined, and nested arrays.
- The arrays may have any level of nesting.
- The original arrays should not be modified by the functions.

## Testing the Script

To test the functions, you can use the following code:

```javascript
let arr1 = [1, [2, [3, 4]], 5];
let arr2 = [1, [2, [3, 4]], 5];
let arr3 = [1, [2, [3, 5]], 5];
let nestedArr = [1, [2, [3, 4]], 5];

console.log("Deep comparison (equal):", deepArrayComparison(arr1, arr2));
console.log("Deep comparison (not equal):", deepArrayComparison(arr1, arr3));
console.log("Flattened array:", flattenNestedArray(nestedArr));

// Additional test cases
console.log("Deep comparison (different types):", 
            deepArrayComparison([1, "2", [3]], [1, 2, [3]]));
console.log("Deep comparison (nested objects):", 
            deepArrayComparison([{a: 1}, [{b: 2}]], [{a: 1}, [{b: 2}]]));
console.log("Flatten complex nested array:", 
            flattenNestedArray([1, [2, [3, [4]]], [5, 6]]));
```

## Bonus Challenge

Implement a `deepFlatten` function that not only flattens nested arrays but also "flattens" nested objects, creating a single-level object with keys representing the path to each value.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

1. Deep Array Comparison:
   - This operation involves comparing two arrays element by element, including nested arrays.
   - It's different from shallow comparison (==) which only compares references for non-primitive types.
   - This is useful when you need to compare complex data structures, like JSON responses or configuration objects.

2. Flattening Nested Arrays:
   - This operation involves converting a multi-level array into a single-level array.
   - It's commonly used when dealing with hierarchical data or when you need to process nested structures uniformly.

### Step 2: Implementing the Functions

#### deepArrayComparison

Method: Recursive comparison

```javascript
function deepArrayComparison(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            if (!deepArrayComparison(arr1[i], arr2[i])) return false;
        } else if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    
    return true;
}
```

#### flattenNestedArray

Method 1: Using recursion

```javascript
function flattenNestedArray(arr) {
    let result = [];
    
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenNestedArray(item));
        } else {
            result.push(item);
        }
    }
    
    return result;
}
```

Method 2: Using flat() method (ES2019+)

```javascript
function flattenNestedArray(arr) {
    return arr.flat(Infinity);
}
```

### Step 3: Testing the Functions

Use the provided test cases in the "Testing the Script" section to verify your implementation.

**Additional Test Cases**

1. Test Case for deepArrayComparison:
   - Input: `([1, [2, [3]]], [1, [2, [3]]])`
   - Expected Output: `true`
   - Input: `([1, [2, [3]]], [1, [2, [4]]])`
   - Expected Output: `false`

2. Test Case for flattenNestedArray:
   - Input: `[1, [2, [3, [4, 5]]], 6]`
   - Expected Output: `[1, 2, 3, 4, 5, 6]`

## Time and Space Complexity

- deepArrayComparison:
  - Time Complexity: O(n), where n is the total number of elements in both arrays
  - Space Complexity: O(d), where d is the maximum depth of nesting (due to recursion stack)

- flattenNestedArray (recursive method):
  - Time Complexity: O(n), where n is the total number of elements
  - Space Complexity: O(n) for the result array, plus O(d) for the recursion stack

- flattenNestedArray (using flat() method):
  - Time Complexity: O(n)
  - Space Complexity: O(n)

## References

- [MDN Web Docs: Array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [JavaScript.info: Recursion and stack](https://javascript.info/recursion)
- [Medium: Deep comparison in JavaScript](https://medium.com/frontend-canteen/deep-comparison-in-javascript-b69032b2b87f)

## Related Problems

- Implement a deep clone function for arrays and objects
- Create a function to find the difference between two nested arrays
- Implement a custom JSON.stringify() function

## Key Takeaways

- Recursive algorithms are powerful tools for dealing with nested structures.
- Deep comparison and flattening are common operations when working with complex data structures.
- Understanding these concepts helps in handling JSON data, working with APIs, and processing hierarchical information.

## Notes

When implementing deep comparison, consider edge cases like comparing arrays with objects or other complex types. For flattening, while the `flat()` method is convenient, it's not supported in older browsers, so the recursive method might be more widely compatible. Always consider the trade-offs between readability, performance, and compatibility when choosing an implementation.

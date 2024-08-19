# Day 5 Coding Challenge: Array Flattener

## Problem Statement

Write a function that flattens a nested array into a single-level array. In other words, given an array that may contain other arrays as elements, your function should return a new array where all elements are at the same level.

For example, if the input is `[1, [2, 3], [4, [5, 6]]]`, the function should return `[1, 2, 3, 4, 5, 6]`.

Flattening arrays is a common task in JavaScript, especially when dealing with data structures that may have multiple levels of nested arrays. This challenge helps in understanding how to traverse and manipulate arrays in JavaScript.

## Function Signature

This function will take 1 input, which we'll call `arr`, and it will return a new array that is flattened to a single level.

Here’s how the structure of the function should look:

```javascript
function flattenArray(arr) {
  // Your code here
}
```

## Input

- **arr**: A nested array. This array can contain numbers, other arrays, or a mix of both.

## Output

The function should return a new array that contains all the elements of the input array but without any nested structure. All elements should be at the same level.

## Examples

- **Input:** `[1, [2, 3], [4, [5, 6]]]`
- **Output:** `[1, 2, 3, 4, 5, 6]`

- **Input:** `[7, [8, [9, 10]], 11]`
- **Output:** `[7, 8, 9, 10, 11]`

- **Input:** `[12, [13, [14, [15]]]]`
- **Output:** `[12, 13, 14, 15]`

- **Input:** `[rice, [apples, oranges, [mango, pineapple, [lemon, lime]]]]`
- **Output:** `[rice, apples, oranges, mango, pineapple, lemon, lime]`

- **Input:** `["hello", [true, false, ["yes", "no"]], ["world", [undefined, null]]]`
- **Output:** `["hello", true, false, "yes", "no", "world", undefined, null]`

- **Input:** `[{"key": "value"}, [["anotherKey", "anotherValue"], [{}, []]], ["end"]]`
- **Output:** `[{"key": "value"}, "anotherKey", "anotherValue", {}, [], "end"]`

- **Input:** `[new Date(2024, 7, 19), ["nested", ["deeper", ["deepest"]]], [42, Symbol("sym")]]`
- **Output:** `[new Date(2024, 7, 19), "nested", "deeper", "deepest", 42, Symbol("sym")]`

- **Input:** `["start", [[1, "middle", {a: 1}], [null, [false, [undefined, "end"]]]]]`
- **Output:** `["start", 1, "middle", {a: 1}, null, false, undefined, "end"]`



## Test the Function

```javascript
console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // Should print [1, 2, 3, 4, 5, 6]
console.log(flattenArray([7, [8, [9, 10]], 11]));    // Should print [7, 8, 9, 10, 11]
console.log(flattenArray([12, [13, [14, [15]]]]));   // Should print [12, 13, 14, 15]
console.log(flattenArray(["rice", ["apples", "oranges", ["mango", "pineapple", ["lemon", "lime"]]]])); // Should print ["rice", "apples", "oranges", "mango", "pineapple", "lemon", "lime"]
console.log(flattenArray(["hello", [true, false, ["yes", "no"]], ["world", [undefined, null]]])); // Should print ["hello", true, false, "yes", "no", "world", undefined, null]
console.log(flattenArray([{"key": "value"}, [["anotherKey", "anotherValue"], [{}, []]], ["end"]])); // Should print [{"key": "value"}, "anotherKey", "anotherValue", {}, [], "end"]
console.log(flattenArray([new Date(2024, 7, 19), ["nested", ["deeper", ["deepest"]]], [42, Symbol("sym")]])); // Should print [new Date(2024, 7, 19), "nested", "deeper", "deepest", 42, Symbol("sym")]
console.log(flattenArray(["start", [[1, "middle", {a: 1}], [null, [false, [undefined, "end"]]]]])); // Should print ["start", 1, "middle", {a: 1}, null, false, undefined, "end"]
```

# Bonus Challenge
Implement the function without using built-in array methods like `flat()` or `reduce()`. Instead, try to write the logic from scratch, using loops or recursion.

# **Spiolers**

## Expanded Instructions

## Step 1: Understanding the Problem
Your goal is to create a function that takes a nested array and returns a new array where all elements are flattened into a single level. This means you need to iterate over the entire structure and gather each element into a new array.

## Step 2: Potential Solutions

There are a couple of ways to approach this problem:

1. **Using Recursion:**
   - Recursion is a natural fit for this problem because the structure is inherently recursive (an array that can contain arrays).
   - The function should check if each element is an array; if so, it should recursively flatten that array. If not, it should add the element to the result array.

2. **Using Iterative Approach:**
   - An iterative approach might involve using a stack or a queue to keep track of the arrays that still need to be processed.
   - This method can be more efficient in terms of memory usage for deep nesting, but it may be more complex to implement.

## Step 3: Implementing the Function

###We'll use the **Recursive Approach** for this implementation.

**Algorithm:**
1. Initialize an empty array to store the flattened elements.
2. Iterate over each element in the input array:
   - If the element is an array, recursively flatten it and concatenate the result to the output array.
   - If the element is not an array, add it directly to the output array.
3. Return the flattened array.

**Implementation:**
```javascript
function flattenArray(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  
  return result;
}
```

**Explanation:**
- We start by initializing an empty array `result` to store our flattened elements.
- We then loop through each element of the input array `arr`.
- If an element is an array (`Array.isArray(arr[i])`), we recursively flatten it and add the resulting elements to `result`.
- If an element is not an array, we simply push it into `result`.
- Finally, we return the `result` array, which contains all elements in a single level.

This recursive solution is elegant and easy to understand, but depending on the depth of the input array, it might use significant stack memory. Consider the iterative approach if you need to handle deeply nested arrays.

### In addition to the **Recursive Approach**, we can also flatten a nested array using an **Iterative Approach:**. This method avoids the potential call stack limitations of recursion by using a stack or an explicit loop.

**Algorithm:**
1. Initialize an empty array `result` to store the flattened elements.
2. Use a stack (array) to keep track of the elements that need to be processed. Start by pushing the initial input array onto the stack.
3. While the stack is not empty:
   - Pop the top element from the stack.
   - If the popped element is an array, push its elements onto the stack (in reverse order to maintain order).
   - If the popped element is not an array, add it to the `result` array.
4. Return the `result` array.

**Implementation:**
```javascript
function flattenArray(arr) {
  let result = [];
  let stack = [...arr];
  
  while (stack.length > 0) {
    let item = stack.pop();
    
    if (Array.isArray(item)) {
      stack.push(...item);  // Push array items onto the stack
    } else {
      result.push(item);
    }
  }
  
  return result.reverse();  // Reverse the result to maintain original order
}
```

**Explanation:**
- We start by initializing an empty array `result` to store the flattened elements and a stack containing the initial input array.
- We use a `while` loop to process each item in the stack:
  - If the item is an array, we push its elements onto the stack. This is done in reverse order to maintain the correct order of elements when they are eventually popped from the stack.
  - If the item is not an array, we add it directly to the `result` array.
- After processing all items, we reverse the `result` array to restore the original order of elements since the stack processes items in LIFO (Last In, First Out) order.

This iterative approach is useful for avoiding recursion depth issues and can be more efficient for certain cases.
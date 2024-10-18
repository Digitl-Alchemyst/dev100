# Code Challenge: Advanced Object Manipulation in JavaScript

## Problem Statement

Implement two advanced object manipulation functions:
1. A deep clone function for objects (including nested objects and arrays)
2. A function to perform a deep comparison between two objects

These functions should handle complex nested structures and various data types. This challenge aims to reinforce understanding of recursive algorithms, object manipulation, and deep equality concepts in JavaScript.

## Function Signatures

```javascript
function deepClone(obj) {
   // Your code here 
}

function deepEqual(obj1, obj2) {
   // Your code here
}
```

## Input

For both functions:
- `obj`, `obj1`, `obj2`: Objects (potentially with nested structures)

## Output

- `deepClone`: Returns a new object that is a deep copy of the input
- `deepEqual`: Returns a boolean indicating whether the objects are deeply equal

## Example

```javascript
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const clone = deepClone(original);
console.log(deepEqual(original, clone)); // Should output true
clone.b.c = 5;
console.log(deepEqual(original, clone)); // Should output false
```

## Constraints

- The functions should handle all JavaScript primitive types, objects, and arrays
- Circular references should be handled (for `deepClone`) or detected (for `deepEqual`)
- Functions within objects should be handled appropriately

## Testing the Script

To test your implementation, create objects with various data types, nested structures, and edge cases. Here's an example:

```javascript
// Test case 1: Simple object
const obj1 = { a: 1, b: 'string', c: true };
const clonedObj1 = deepClone(obj1);
console.log(deepEqual(obj1, clonedObj1)); // Should be true

// Test case 2: Nested object with array
const obj2 = { a: { b: [1, 2, 3] }, c: { d: { e: 'nested' } } };
const clonedObj2 = deepClone(obj2);
console.log(deepEqual(obj2, clonedObj2)); // Should be true

// Test case 3: Object with function
const obj3 = { a: 1, b: function() { return 'Hello'; } };
const clonedObj3 = deepClone(obj3);
console.log(deepEqual(obj3, clonedObj3)); // Should be true

// Test case 4: Circular reference
const obj4 = { a: 1 };
obj4.b = obj4;
try {
    const clonedObj4 = deepClone(obj4);
    console.log('Circular reference handled');
} catch (error) {
    console.log('Circular reference detected:', error.message);
}

// Test case 5: Different objects
const obj5 = { a: 1, b: 2 };
const obj6 = { a: 1, b: 3 };
console.log(deepEqual(obj5, obj6)); // Should be false
```

## Bonus Challenge

1. Optimize the `deepClone` function to handle large objects efficiently.
2. Implement a `deepMerge` function that combines two objects deeply.
3. Add support for cloning and comparing ES6 Set and Map objects.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding Deep Cloning and Comparison

Deep cloning creates a new object with all nested objects and arrays also cloned, ensuring no references to the original object remain. Deep comparison checks if two objects have the same structure and values, including all nested properties.

### Step 2: Implementing the deepClone Function

Here's a basic implementation of `deepClone`:

```javascript
function deepClone(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj) return obj; // primitives
    if (hash.has(obj)) return hash.get(obj); // circular reference
    let result;
    if (obj instanceof Set) {
        result = new Set(obj);
    } else if (obj instanceof Map) {
        result = new Map(Array.from(obj, ([key, val]) => [key, deepClone(val, hash)]));
    } else if (obj instanceof Date) {
        result = new Date(obj);
    } else if (obj instanceof RegExp) {
        result = new RegExp(obj.source, obj.flags);
    } else if (typeof obj === 'function') {
        result = function() { return obj.apply(this, arguments); };
    } else {
        result = Array.isArray(obj) ? [] : {};
        hash.set(obj, result);
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                result[key] = deepClone(obj[key], hash);
            }
        }
    }
    return result;
}
```

### Step 3: Implementing the deepEqual Function

Here's a basic implementation of `deepEqual`:

```javascript
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null) return false;
    let keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
}
```

### Step 4: Understanding the Implementations

- `deepClone` uses recursion to clone nested structures. It handles circular references using a WeakMap.
- `deepEqual` also uses recursion, comparing each property of the objects.
- Both functions handle various types of objects and primitives differently.

### Step 5: Testing the Implementation

Use the testing script provided earlier to verify that your implementation works correctly. Make sure to test with various object structures and edge cases.

## Time and Space Complexity

- Time Complexity: O(n) for both functions, where n is the number of properties in the object (including nested properties)
- Space Complexity: O(n) for `deepClone` (as it creates a new object), O(d) for `deepEqual` where d is the maximum depth of recursion

Both functions need to traverse all properties of the objects, leading to linear time complexity. The space complexity of `deepClone` is linear as it creates a new object, while `deepEqual` uses recursive call stack space.

## References

- [MDN Web Docs: Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [MDN Web Docs: WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Related Problems

- Implement a function to flatten a nested object
- Create a function to perform a deep freeze on an object

## Key Takeaways

- Handling nested structures often requires recursive approaches
- Circular references are a key consideration in deep cloning and comparison
- Different object types (Date, RegExp, Map, Set) require special handling
- WeakMap is useful for handling circular references without memory leaks

## Notes

While these implementations cover many cases, they may not handle every possible edge case. In production environments, it's often recommended to use well-tested libraries for deep cloning and comparison, as they handle a wider range of scenarios and potential pitfalls.

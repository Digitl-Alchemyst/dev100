# Code Challenge: Working with Object Keys

## Problem Statement

In JavaScript, objects are fundamental data structures that allow us to store key-value pairs. Understanding how to work with object properties and their keys is essential for any JavaScript developer. This challenge focuses on using `Object.keys()` to manipulate and analyze object properties.

This challenge introduces you to working with object properties in JavaScript, specifically using the `Object.keys()` method. This is a crucial skill as objects are one of the most commonly used data structures in JavaScript, and being able to access and manipulate their properties is fundamental to many programming tasks.

## Function Signature

```javascript
const analyzeObjectKeys = (obj, searchKey) => {
    // TODO: Return an object containing:
    // - keys: array of all property names
    // - count: number of properties
    // - hasKey: boolean indicating if searchKey exists
}
```

## Input

- `obj`: An object containing various properties and values
- `searchKey`: A string representing the property name to search for

## Output

An object containing:
- `keys`: Array of strings (property names)
- `count`: Number (total property count)
- `hasKey`: Boolean (whether searchKey exists)

## Example

### Input:
```javascript
const student = {
    id: "ST101",
    name: "John Doe",
    age: 20,
    grade: "A",
    subjects: ["Math", "Physics", "English"]
};
analyzeObjectKeys(student, "grade")
```

### Output:
```javascript
{
    keys: ["id", "name", "age", "grade", "subjects"],
    count: 5,
    hasKey: true
}
```

## Constraints

- Input object must be a valid JavaScript object
- Property names are case-sensitive
- The object may contain any valid JavaScript values (strings, numbers, arrays, nested objects, etc.)
- Empty objects are valid inputs

## Testing the Script

```javascript
const student = {
    id: "ST101",
    name: "John Doe",
    age: 20,
    grade: "A",
    subjects: ["Math", "Physics", "English"]
};

console.log(analyzeObjectKeys(student, "grade"));
console.log(analyzeObjectKeys(student, "address"));
```

## Bonus Challenge

1. Add a feature to count nested properties (properties within nested objects)
2. Implement a case-insensitive search option

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Object.keys() is a built-in JavaScript method that returns an array of a given object's own enumerable property names. Key concepts to understand:

1. Object Properties: In JavaScript, objects are collections of properties where each property has a name (key) and value
2. Enumerable Properties: These are properties that can be iterated over using loops
3. Property Access: Properties can be accessed using dot notation (obj.property) or bracket notation (obj["property"])

### Step 2: Implementing the Functions

Method 1: Using Object.keys() directly
```javascript
const analyzeObjectKeys = (obj, searchKey) => {
    const keys = Object.keys(obj);
    return {
        keys: keys,
        count: keys.length,
        hasKey: keys.includes(searchKey)
    };
};
```

Method 2: Using Object.hasOwn() for more precise key checking
```javascript
const analyzeObjectKeys = (obj, searchKey) => {
    const keys = Object.keys(obj);
    return {
        keys: keys,
        count: keys.length,
        hasKey: Object.hasOwn(obj, searchKey)
    };
};
```

### Step 3: Testing the Functions

**Test Cases**

1. Regular object test:
   - Input: `analyzeObjectKeys(student, "grade")`
   - Expected Output: `{ keys: ["id", "name", "age", "grade", "subjects"], count: 5, hasKey: true }`

2. Empty object test:
   - Input: `analyzeObjectKeys({}, "test")`
   - Expected Output: `{ keys: [], count: 0, hasKey: false }`

3. Non-existent key test:
   - Input: `analyzeObjectKeys(student, "address")`
   - Expected Output: `{ keys: ["id", "name", "age", "grade", "subjects"], count: 5, hasKey: false }`

## Time and Space Complexity

- Time Complexity: O(n) where n is the number of properties in the object
- Space Complexity: O(n) to store the array of keys

The complexity is linear because we need to iterate through all properties once to create the keys array.

## References

- [MDN Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [MDN Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [MDN Object.hasOwn()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)

## Related Problems

- Object Value Extraction: Creating an array of all values in an object
- Object Entry Manipulation: Working with key-value pairs using Object.entries()
- Deep Object Comparison: Comparing two objects for equality

## Key Takeaways

- Object.keys() is a fundamental method for working with object properties in JavaScript
- Understanding how to access and check for object properties is crucial for data manipulation
- There are multiple ways to check for property existence in JavaScript objects
- Working with objects is a core skill for JavaScript development

## Notes

- Consider using Object.hasOwn() instead of the in operator or hasOwnProperty() for more reliable property checking
- Remember that Object.keys() only returns enumerable properties
- The order of keys in the returned array is not guaranteed in all JavaScript engines

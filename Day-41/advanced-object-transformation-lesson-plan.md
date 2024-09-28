# Lesson Plan: Advanced Object Transformation in JavaScript

## Lesson Duration: 90 minutes

### Objective
By the end of this lesson, students will understand and be able to implement advanced object transformation techniques in JavaScript, including recursion, higher-order functions, type checking, and complex object manipulation.

### Introduction (5 minutes)

Welcome to our deep dive into advanced object transformation techniques in JavaScript. Today, we'll explore recursion, higher-order functions, type checking, and various ways to manipulate objects, including filtering, key mapping, and handling nested structures. These techniques are crucial for dealing with complex data structures and writing efficient, scalable code.

### 1. Recursion Basics (15 minutes)

Recursion is a programming concept where a function calls itself to solve a problem. It's particularly useful when dealing with nested structures. Let's start with a simple example:

```javascript
function countdown(n) {
    if (n <= 0) {
        console.log("Done!");
        return;
    }
    console.log(n);
    countdown(n - 1);
}

countdown(5);
```

This function counts down from a given number to 1. The key components of recursion are:
1. Base case: `if (n <= 0)` - this tells the function when to stop.
2. Recursive call: `countdown(n - 1)` - the function calls itself with a modified argument.

Now, let's apply recursion to object traversal:

```javascript
function deepPrint(obj, indent = '') {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            console.log(`${indent}${key}:`);
            deepPrint(obj[key], indent + '  ');
        } else {
            console.log(`${indent}${key}: ${obj[key]}`);
        }
    }
}
```

This function recursively prints the structure of a nested object. When it encounters a nested object, it calls itself with an increased indent. This demonstrates how recursion can handle nested structures of unknown depth.

[need more detail and breakdown]

### 2. Higher-Order Functions (15 minutes)

Higher-order functions are functions that can take other functions as arguments or return functions. They're a key concept in functional programming. Let's explore some examples:

```javascript
// Map: Transforms each element of an array
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(x => x * x);

// Filter: Selects elements based on a condition
const evenNumbers = numbers.filter(x => x % 2 === 0);

// Reduce: Accumulates values
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Custom higher-order function
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
```

Higher-order functions allow us to abstract over actions, not just values. This makes our code more flexible and reusable. For instance, `map`, `filter`, and `reduce` are powerful tools for array manipulation, while custom functions like `repeat` allow us to create our own abstractions.

### 3. Type Checking (10 minutes)

Type checking is crucial when working with objects, especially in a dynamically-typed language like JavaScript. Let's create a custom `typeOf` function:

```javascript
function typeOf(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
}
```

This function provides more precise type checking than the built-in `typeof` operator. It correctly identifies null and arrays, which `typeof` doesn't distinguish. This level of precision is important when manipulating complex objects.

### 4. Object Manipulation Techniques (40 minutes)

Now, let's combine our knowledge of recursion, higher-order functions, and type checking to perform advanced object transformations.

#### 4.1 Deep Clone (10 minutes)

```javascript
function deepClone(obj) {
    if (typeOf(obj) !== 'object' && typeOf(obj) !== 'array') {
        return obj;
    }
    
    let clone = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }
    
    return clone;
}
```

This function creates a deep copy of an object, including all nested objects and arrays. It uses recursion to handle nested structures of any depth. This is useful when you need to create a completely independent copy of a complex object.

#### 4.2 Deep Filter (10 minutes)

```javascript
function deepFilter(obj, predicate) {
    if (typeOf(obj) !== 'object' && typeOf(obj) !== 'array') {
        return predicate(obj) ? obj : undefined;
    }
    
    if (Array.isArray(obj)) {
        return obj.map(item => deepFilter(item, predicate)).filter(item => item !== undefined);
    }
    
    let result = {};
    for (let key in obj) {
        const value = deepFilter(obj[key], predicate);
        if (value !== undefined) {
            result[key] = value;
        }
    }
    return Object.keys(result).length > 0 ? result : undefined;
}
```

This function applies a filter to every level of a nested object or array. It's a powerful tool for extracting specific data from complex structures.

#### 4.3 Key Mapping (10 minutes)

```javascript
function mapKeys(obj, mapFn) {
    if (typeOf(obj) !== 'object') {
        return obj;
    }
    
    let result = {};
    for (let key in obj) {
        const newKey = mapFn(key);
        result[newKey] = mapKeys(obj[key], mapFn);
    }
    return result;
}
```

This function transforms all the keys in an object, even in nested objects. It's useful for tasks like converting between naming conventions (e.g., snake_case to camelCase).

#### 4.4 Flattening Nested Structures (10 minutes)

```javascript
function flattenObject(obj, maxDepth = Infinity, currentDepth = 0) {
    if (typeOf(obj) !== 'object' || currentDepth >= maxDepth) {
        return obj;
    }
    
    let result = {};
    for (let key in obj) {
        if (typeOf(obj[key]) === 'object' && currentDepth < maxDepth) {
            const flattened = flattenObject(obj[key], maxDepth, currentDepth + 1);
            for (let subKey in flattened) {
                result[`${key}.${subKey}`] = flattened[subKey];
            }
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}
```

This function flattens a nested object structure up to a specified depth. It's useful for simplifying complex data structures or preparing data for certain APIs or data analysis tasks.

### Conclusion (5 minutes)

Today, we've explored advanced object transformation techniques in JavaScript. We've seen how recursion, higher-order functions, and type checking can be combined to create powerful tools for manipulating complex data structures.

We've implemented deep cloning, deep filtering, key mapping, and flattening of nested structures. These techniques are invaluable when working with complex data in real-world applications.

Remember, the key to mastering these concepts is practice. Try to apply these techniques to your own projects and experiment with different combinations.

### Additional Resources

For further study, consider exploring:

1. "Functional-Light JavaScript" by Kyle Simpson
2. "JavaScript: The Good Parts" by Douglas Crockford
3. MDN Web Docs on Object manipulation methods

Keep practicing, and you'll be transforming complex objects with ease in no time!

# Day 6 Coding Challenge: Deep Copy

## Problem Statement

Implement a function that creates a deep copy of an object, handling nested objects and arrays. A deep copy means that all levels of nested objects and arrays are duplicated, so changes made to the new object won't affect the original object.

In JavaScript, objects and arrays are copied by reference, not by value. This means that if you copy an object or array, the new variable will reference the same underlying data. To create a true copy (deep copy) where nested structures are duplicated, you need to manually copy each element.

## Function Signature

This function will take 1 input, which we'll call `obj`, and it will return a deep copy of that object.

Here’s how the structure of the function should look:

```javascript 
function deepCopy(obj) {
   // Your code here 
   }
```


## Input

- **obj**: An object that may contain nested objects and arrays. The object can contain primitive types (like numbers, strings, booleans), arrays, or other objects.

## Output

The function should return a new object that is a deep copy of the input object. This new object should have the same structure and values as the original object, but changes to the new object should not affect the original.

## Examples

- **Input:** `{ a: 1, b: { c: 2 }, d: [3, 4] }`
- **Output:** `{ a: 1, b: { c: 2 }, d: [3, 4] }` (a new object with the same structure)

- **Input:** `{ x: [1, 2, { y: "yes" }], z: { w: "no" } }`
- **Output:** `{ x: [1, 2, { y: "yes" }], z: { w: "no" } }` (a new object with the same structure)

## Test the Function

```javascript  
const original = { a: 1, b: { c: 2 }, d: [3, 4] }; const copy = deepCopy(original); copy.b.c = 10; copy.d.push(5);

console.log(original); // Should print { a: 1, b: { c: 2 }, d: [3, 4] } 
console.log(copy); // Should print { a: 1, b: { c: 10 }, d: [3, 4, 5] }
```


## Bonus Challenge

Handle circular references in objects. Circular references occur when an object contains a reference to itself, either directly or indirectly.

## Expanded Instructions

### Step 1: Understanding the Problem

The goal is to create a function that can copy all the elements and nested structures in an object. A deep copy duplicates everything, including nested arrays and objects, so that changes to the new object do not affect the original one.

### Step 2: Potential Solutions

#### Using Recursion:

The most straightforward way to create a deep copy is to use recursion. The function will iterate through each key-value pair in the object. If the value is an object or array, the function will call itself to copy that structure.

#### Using JSON.stringify and JSON.parse:

For simpler objects without functions or circular references, you can use `JSON.stringify` to convert the object to a JSON string and then `JSON.parse` to create a deep copy. However, this method has limitations, such as not handling functions, `undefined`, `NaN`, or circular references.

#### Using a Stack or Queue:

Another method involves using a stack or queue to iteratively copy each element, which can help avoid the potential pitfalls of recursion (like exceeding the call stack limit).

### Step 3: Implementing the Function (Using Recursion)

We'll implement the deep copy using recursion since it's a straightforward approach that handles most cases well.

#### Algorithm:

1. Create a new object or array to hold the copied values.
2. Iterate over each key-value pair in the input object.
3. If the value is an object or array, recursively call the deep copy function to copy it.
4. If the value is a primitive (number, string, boolean, etc.), directly copy it.
5. Return the new object or array.

#### Implementation:

```javascript 
function deepCopy(obj) { if (typeof obj !== 'object' || obj === null) { return obj; // Return the value if obj is not an object }

let copy = Array.isArray(obj) ? [] : {};

for (let key in obj) { if (obj.hasOwnProperty(key)) { copy[key] = deepCopy(obj[key]); // Recursively copy for nested objects } }

return copy; }

```

#### Explanation:

The function first checks if the input is an object or not. If it's not an object (e.g., a number, string, or `null`), the function returns the value directly.
If the input is an array, the function initializes an empty array for the copy; otherwise, it initializes an empty object.
The function then iterates over the properties of the object and recursively copies each property, ensuring that nested objects and arrays are properly duplicated.
Finally, the function returns the copied object or array.

### Step 3: Implementing the Function (Handling Circular References)

In more complex cases, objects might reference themselves, directly or indirectly. Handling such cases requires tracking the objects you've already copied to avoid infinite loops.

#### Implementation:

```javascript  
function deepCopy(obj, seen = new Map()) { if (typeof obj !== 'object' || obj === null) { return obj; }

if (seen.has(obj)) { return seen.get(obj); // Return the already copied object }

let copy = Array.isArray(obj) ? [] : {}; seen.set(obj, copy); // Track this object as copied

for (let key in obj) { if (obj.hasOwnProperty(key)) { copy[key] = deepCopy(obj[key], seen); // Pass the seen map along } }

return copy; }
```

#### Explanation:

The function now includes an additional `seen` parameter, which is a `Map` that keeps track of objects that have already been copied.
Before copying an object, the function checks if it has already been copied. If so, it returns the previously copied object to prevent an infinite loop.
This method allows the function to handle objects with circular references.

### Using JSON.stringify and JSON.parse

#### Explanation:

The method involving `JSON.stringify` and `JSON.parse` leverages JavaScript's built-in JSON serialization capabilities to create a deep copy of an object. When you stringify an object using `JSON.stringify`, it converts the object into a JSON-formatted string representation. This string can then be parsed back into a JavaScript object using `JSON.parse`, effectively creating a deep copy of the original object.

#### Implementation:

```javascript  
function deepCopy(obj) { return JSON.parse(JSON.stringify(obj)); }
```


#### Limitations and Handling Circular References:

- **Limitations:** This method cannot copy objects that contain functions, `undefined`, `NaN`, or circular references, as these are not supported by JSON serialization.
- **Circular References:** By default, attempting to stringify an object with circular references will result in a `TypeError`. However, you can work around this limitation by providing a replacer function to `JSON.stringify` that tracks objects already serialized and replaces them with a placeholder or removes them entirely. Similarly, you can use a reviver function with `JSON.parse` to restore references or handle placeholders.

**Example of handling circular references with JSON.stringify and JSON.parse**

```javascript 
// Original object with circular reference
const originalObject = {};
originalObject.self = originalObject;

// Replacer function to detect and replace circular references
const replacer = (key, value) => {
  if (value === originalObject) {
    return '[Circular Reference]';
  }
  return value;
};

// Reviver function to restore circular references or handle placeholders
const reviver = (key, value) => {
  if (value === '[Circular Reference]') {
    return originalObject;
  }
  return value;
};

// Stringify the object with replacer function
const stringified = JSON.stringify(originalObject, replacer);

console.log(stringified);
// Output: {"self":"[Circular Reference]"}

// Parse the stringified object with reviver function
const parsedObject = JSON.parse(stringified, reviver);

console.log(parsedObject === originalObject);
// Output: true, indicating the circular reference has been restored
```

### Using a Stack or Queue for Iterative Copying

#### Explanation:

Iteratively copying objects using a stack or queue avoids the potential stack overflow issues that can arise with recursive approaches, especially with deeply nested objects. This method involves manually managing a collection of objects to be copied, typically starting with the root object and then adding its children (properties that are objects or arrays) to the collection. This process continues until the collection is empty, ensuring all nested structures are copied.

#### Implementation Sketch:

```javascript  
function deepCopy(obj) { const stack = [[obj, {}]]; const seen = new Map([[obj, {}]]);

while (stack.length) { const [srcObj, destObj] = stack.pop();

for (const key in srcObj) {
  if (srcObj.hasOwnProperty(key)) {
    const val = srcObj[key];
    if (val !== null && typeof val === 'object') {
      if (!seen.has(val)) {
        seen.set(val, {});
        stack.push([val, seen.get(val)]);
      }
      destObj[key] = seen.get(val);
    } else {
      destObj[key] = val;
    }
  }
}
}

return seen.get(obj); }
```

#### Handling Circular References:

- **Circular References:** This method inherently handles circular references by keeping track of objects already copied (`seen` map). When encountering an object that has already been copied, it simply links to the existing copy instead of creating a new one, thus preventing infinite loops and correctly handling circular references.

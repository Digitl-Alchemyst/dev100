# Code Challenge: Advanced Object Transformation in JavaScript

## Problem Statement

Implement a function called `transformObject` that performs complex transformations on a deeply nested object structure. The function should be able to:

1. Filter out properties based on a predicate function
2. Transform values based on their types and a set of rules
3. Flatten nested structures up to a specified depth
4. Rename keys based on a provided mapping

This challenge aims to reinforce understanding of recursive algorithms, object manipulation, and functional programming concepts in JavaScript.

## Function Signature

```javascript
function transformObject(obj, options) {
   // Your code here 
}
```

## Input

- `obj`: An object (potentially with nested structures)
- `options`: An object containing the following optional properties:
  - `filterPredicate`: A function that takes a key and value, and returns true if the property should be kept
  - `transformRules`: An object where keys are type names (e.g., 'string', 'number') and values are functions to transform that type
  - `maxDepth`: A number specifying the maximum depth to flatten nested objects
  - `keyMap`: An object mapping old key names to new key names

## Output

Returns a new object that is the result of applying all the specified transformations to the input object.

## Example

```javascript
const input = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    coordinates: {
      lat: 40.7128,
      long: -74.0060
    }
  },
  hobbies: ['reading', 'cycling'],
  metadata: {
    lastUpdated: '2023-04-01',
    version: 2
  }
};

const options = {
  filterPredicate: (key, value) => key !== 'metadata',
  transformRules: {
    string: s => s.toUpperCase(),
    number: n => n * 2
  },
  maxDepth: 2,
  keyMap: {
    name: 'fullName',
    address: 'location'
  }
};

const result = transformObject(input, options);
console.log(result);
// Expected output:
// {
//   fullName: 'JOHN DOE',
//   age: 60,
//   location: {
//     street: '123 MAIN ST',
//     city: 'ANYTOWN',
//     coordinates_lat: 81.2256,
//     coordinates_long: -148.012
//   },
//   hobbies: ['READING', 'CYCLING']
// }
```

## Constraints

- The function should not modify the original object
- It should handle all JavaScript primitive types, objects, and arrays
- The transformation should be applied recursively to nested objects and arrays
- If `maxDepth` is reached, nested objects should be flattened with keys joined by underscores

## Testing the Script

To test your implementation, create objects with various data types, nested structures, and edge cases. Here's an example:

```javascript
// Test case 1: Simple object
const obj1 = { a: 1, b: 'string', c: true };
const result1 = transformObject(obj1, {
  transformRules: { number: n => n * 2, string: s => s.repeat(2) }
});
console.log(result1); // Should be { a: 2, b: 'stringstring', c: true }

// Test case 2: Nested object with array
const obj2 = { a: { b: [1, 2, 3] }, c: { d: { e: 'nested' } } };
const result2 = transformObject(obj2, { maxDepth: 2 });
console.log(result2); // Should be { a: { b: [1, 2, 3] }, c_d_e: 'nested' }

// Test case 3: Filtering and renaming
const obj3 = { foo: 1, bar: 2, baz: 3 };
const result3 = transformObject(obj3, {
  filterPredicate: (key, value) => value % 2 === 1,
  keyMap: { foo: 'first', baz: 'last' }
});
console.log(result3); // Should be { first: 1, last: 3 }

// Test case 4: Complex nested structure
const obj4 = {
  level1: {
    a: 1,
    level2: {
      b: 'hello',
      level3: {
        c: [1, 2, 3],
        d: { key: 'value' }
      }
    }
  }
};
const result4 = transformObject(obj4, {
  maxDepth: 2,
  transformRules: {
    string: s => s.toUpperCase(),
    number: n => n * 10
  }
});
console.log(result4);
// Should be:
// {
//   level1: {
//     a: 10,
//     level2_b: 'HELLO',
//     level2_level3_c: [10, 20, 30],
//     level2_level3_d_key: 'VALUE'
//   }
// }
```

## Bonus Challenge

1. Implement a custom rule for transforming Date objects.
2. Add support for transforming keys based on a predicate function.
3. Implement a 'deep' mode for the `keyMap` option that allows renaming nested keys.


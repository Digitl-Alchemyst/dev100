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

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The object transformation challenge requires implementing a function that can perform complex operations on nested JavaScript objects. This involves several key concepts:

1. **Recursion**: To handle nested structures of unknown depth.
2. **Higher-order functions**: For filtering and transforming based on predicates and rules.
3. **Type checking**: To apply different transformations based on data types.
4. **Object manipulation**: Including creating new objects, renaming keys, and flattening structures.

The challenge tests your ability to combine these concepts into a single, flexible function that can handle various transformation scenarios.

### Step 2: Implementing the Functions

Let's break down the implementation into steps and provide two different approaches.

#### Approach 1: Recursive Implementation

1. **Base case**: If the input is not an object or is null, return it as is.
2. **Create a new object**: To avoid modifying the original.
3. **Apply filtering**: Use the `filterPredicate` if provided.
4. **Apply transformations**: Based on the `transformRules`.
5. **Rename keys**: Use the `keyMap` if provided.
6. **Handle nested structures**: 
   - If `maxDepth` is reached, flatten the structure.
   - Otherwise, recursively call the function on nested objects and arrays.

```javascript
function transformObject(obj, options = {}) {
  const {
    filterPredicate = () => true,
    transformRules = {},
    maxDepth = Infinity,
    keyMap = {}
  } = options;

  function transform(item, currentDepth = 0) {
    if (item === null || typeof item !== 'object') {
      return applyTransformRule(item);
    }

    if (Array.isArray(item)) {
      return item.map(element => transform(element, currentDepth + 1));
    }

    const newObj = {};

    for (let [key, value] of Object.entries(item)) {
      if (!filterPredicate(key, value)) continue;

      const newKey = keyMap[key] || key;
      
      if (currentDepth >= maxDepth && typeof value === 'object' && value !== null) {
        Object.entries(value).forEach(([subKey, subValue]) => {
          newObj[`${newKey}_${subKey}`] = applyTransformRule(subValue);
        });
      } else {
        newObj[newKey] = transform(value, currentDepth + 1);
      }
    }

    return newObj;
  }

  function applyTransformRule(value) {
    const type = typeof value;
    return transformRules[type] ? transformRules[type](value) : value;
  }

  return transform(obj);
}
```

#### Approach 2: Using Object.fromEntries and Array methods

This approach uses more functional programming concepts and might be more concise for some developers.

```javascript
function transformObject(obj, options = {}) {
  const {
    filterPredicate = () => true,
    transformRules = {},
    maxDepth = Infinity,
    keyMap = {}
  } = options;

  const transform = (item, currentDepth = 0) => {
    if (item === null || typeof item !== 'object') {
      return applyTransformRule(item);
    }

    if (Array.isArray(item)) {
      return item.map(element => transform(element, currentDepth + 1));
    }

    return Object.fromEntries(
      Object.entries(item)
        .filter(([key, value]) => filterPredicate(key, value))
        .map(([key, value]) => {
          const newKey = keyMap[key] || key;
          
          if (currentDepth >= maxDepth && typeof value === 'object' && value !== null) {
            return Object.entries(value).map(([subKey, subValue]) => 
              [`${newKey}_${subKey}`, applyTransformRule(subValue)]
            );
          }
          
          return [newKey, transform(value, currentDepth + 1)];
        })
        .flat()
    );
  };

  const applyTransformRule = (value) => {
    const type = typeof value;
    return transformRules[type] ? transformRules[type](value) : value;
  };

  return transform(obj);
}
```

### Step 3: Testing the Functions

To thoroughly test the function, create a variety of test cases that cover different scenarios:

1. Simple objects with various data types
2. Nested objects and arrays
3. Edge cases (empty objects, null values, etc.)
4. Different combinations of options

Here's an expanded set of test cases:

```javascript
// Test case 1: Simple object with various types
const simpleObj = { a: 1, b: 'hello', c: true, d: null };
console.log(transformObject(simpleObj, {
  transformRules: { 
    number: n => n * 2, 
    string: s => s.toUpperCase(),
    boolean: b => !b
  }
}));

// Test case 2: Nested object with array
const nestedObj = { 
  x: { y: [1, 2, { z: 3 }] }, 
  w: { v: { u: 'nested' } } 
};
console.log(transformObject(nestedObj, { 
  maxDepth: 2,
  transformRules: { number: n => n * 10 }
}));

// Test case 3: Filtering and renaming
const filterObj = { foo: 1, bar: 2, baz: 3, qux: 4 };
console.log(transformObject(filterObj, {
  filterPredicate: (key, value) => value % 2 === 0,
  keyMap: { bar: 'even1', qux: 'even2' }
}));

// Test case 4: Complex nested structure with all options
const complexObj = {
  level1: {
    a: 1,
    level2: {
      b: 'hello',
      level3: {
        c: [1, 2, 3],
        d: { key: 'value' }
      }
    }
  },
  metadata: {
    created: '2023-04-01',
    version: 1
  }
};
console.log(transformObject(complexObj, {
  maxDepth: 2,
  filterPredicate: (key) => key !== 'metadata',
  transformRules: {
    string: s => s.toUpperCase(),
    number: n => n * 10
  },
  keyMap: { level1: 'topLevel', a: 'first' }
}));
```

## Time and Space Complexity

- Time Complexity: O(n), where n is the total number of elements in the object (including nested elements)
- Space Complexity: O(n) in the worst case, when creating a new object with the same structure

The function traverses each element once, leading to linear time complexity. The space complexity is also linear as we're creating a new object that could potentially be as large as the input object.

## References

- [MDN Web Docs: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [MDN Web Docs: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript Info: Recursion and stack](https://javascript.info/recursion)

## Related Problems

- Deep Clone Object: Implement a function to create a deep copy of an object
- JSON Parser: Create a custom JSON parser that can handle nested structures
- Tree Traversal: Implement various tree traversal algorithms, which share similar concepts with nested object traversal

## Key Takeaways

- Recursion is a powerful tool for handling nested structures of unknown depth
- Higher-order functions allow for flexible and reusable code
- When working with objects, it's important to consider immutability and create new objects rather than modifying existing ones
- Breaking down complex problems into smaller, manageable functions can lead to more maintainable code

## Notes

- Consider performance implications when working with very large or deeply nested objects
- For production use, you might want to add more robust error handling and input validation
- This function could be extended to handle more complex scenarios, such as circular references or custom object types

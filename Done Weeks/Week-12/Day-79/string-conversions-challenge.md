# Code Challenge: String Conversion Methods

## Problem Statement

Create a function that demonstrates different methods of converting values to strings in JavaScript. The function should explore various string conversion techniques including `String()`, `toString()`, template literals, and string concatenation.

String conversion is a fundamental operation in JavaScript, with each method having its own unique behavior when dealing with different types of values. This challenge explores these differences and helps developers choose the most appropriate method for their needs.

## Function Signature

```javascript
const stringConversions = (value) => {
    // TODO: Convert input value using different string conversion methods
    // Return an object with results from each conversion method
}
```

## Input

- Any JavaScript value that needs to be converted to a string
- Can include numbers, booleans, objects, arrays
- Must handle special cases like null and undefined
- May include nested objects and arrays

## Output

An object containing the results of different conversion methods:
```javascript
{
    usingString: string,
    usingToString: string,
    usingTemplate: string,
    usingConcatenation: string
}
```

## Example

### Input:
```javascript
stringConversions(123)
```

### Output:
```javascript
{
    usingString: "123",
    usingToString: "123",
    usingTemplate: "123",
    usingConcatenation: "123"
}
```

## Constraints

- Must handle all JavaScript data types
- Must gracefully handle null and undefined
- Must handle circular references in objects
- Should preserve number precision
- Must handle multi-line strings
- Maximum string length: 1000 characters

## Testing the Script

```javascript
console.log(stringConversions(123));                    // Test number
console.log(stringConversions(null));                   // Test null
console.log(stringConversions(undefined));              // Test undefined
console.log(stringConversions({ name: "John" }));       // Test object
console.log(stringConversions([1, 2, 3]));             // Test array
console.log(stringConversions(Symbol("test")));         // Test symbol
```

## Bonus Challenge

Implement additional conversion features:
- Custom object serialization
- Formatting options (padding, alignment)
- Multi-language support
- HTML escaping
- Base64 encoding

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

JavaScript provides several ways to convert values to strings:

1. `String()`: Global function that safely converts any value
2. `toString()`: Method available on most objects
3. Template literals: Using backticks and ${} syntax
4. String concatenation: Using the + operator with an empty string

Each method handles edge cases differently:
- `null` and `undefined`
- Objects and arrays
- Symbols and special values
- Numbers with high precision

### Step 2: Implementing the Functions

#### Method 1: Basic Implementation

```javascript
const stringConversions = (value) => {
    return {
        usingString: String(value),
        usingToString: value?.toString() ?? 'null',
        usingTemplate: `${value}`,
        usingConcatenation: '' + value
    };
}
```

#### Method 2: With Error Handling

```javascript
const stringConversions = (value) => {
    const convert = {
        usingString: () => {
            try {
                return String(value);
            } catch (error) {
                return 'Error: Unable to convert';
            }
        },
        usingToString: () => {
            try {
                if (value === null) return 'null';
                if (value === undefined) return 'undefined';
                return value.toString();
            } catch (error) {
                return 'Error: Unable to convert';
            }
        },
        usingTemplate: () => {
            try {
                return `${value}`;
            } catch (error) {
                return 'Error: Unable to convert';
            }
        },
        usingConcatenation: () => {
            try {
                return '' + value;
            } catch (error) {
                return 'Error: Unable to convert';
            }
        }
    };

    return {
        usingString: convert.usingString(),
        usingToString: convert.usingToString(),
        usingTemplate: convert.usingTemplate(),
        usingConcatenation: convert.usingConcatenation()
    };
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Number:
   - Input: `123`
   - Expected Output: All methods return `"123"`

2. Null:
   - Input: `null`
   - Expected Output: All methods return `"null"`

3. Object:
   - Input: `{ name: "John" }`
   - Expected Output: All methods return `"[object Object]"`

4. Array:
   - Input: `[1, 2, 3]`
   - Expected Output: All methods return `"1,2,3"`

5. Symbol:
   - Input: `Symbol("test")`
   - Expected Output: Varies by method

## Time and Space Complexity

- Time Complexity: O(n) where n is the size of the input (for arrays/objects)
- Space Complexity: O(n) for the resulting string

## References

- [MDN String()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
- [MDN Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Related Problems

- JSON Stringification
- Custom toString Implementation
- String Formatting
- Template Engine Implementation

## Key Takeaways

- String() is the safest method for general use
- toString() requires null checking
- Template literals offer the most readable syntax
- String concatenation is simple but can be misleading
- Always consider edge cases when converting types

## Notes

- String() is preferred for null/undefined handling
- toString() is useful for custom object representations
- Template literals are best for string interpolation
- Some values (like Symbol) have special conversion rules
- Consider using JSON.stringify() for complex objects

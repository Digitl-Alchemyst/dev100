# Code Challenge: Number Conversion Methods

## Problem Statement

Create a function that demonstrates different methods of converting values to numbers in JavaScript. The function should showcase the nuances between various conversion methods including `Number()`, `parseInt()`, `parseFloat()`, and mathematical operators.

JavaScript offers multiple ways to convert values to numbers, each with its own unique behavior and use cases. This challenge explores these differences and helps developers understand when to use each method for optimal type conversion.

## Function Signature

```javascript
const numberConversions = (value) => {
    // TODO: Convert input value using different number conversion methods
    // Return an object with results from each conversion method
}
```

## Input

- Any JavaScript value that needs to be converted to a number
- Can be strings, booleans, arrays, objects, or actual numbers
- Input may include numeric strings with units (e.g., "12px")
- May include decimal values as strings (e.g., "12.34")

## Output

An object containing the results of different conversion methods:
```javascript
{
    usingNumber: number,
    usingParseInt: number,
    usingParseFloat: number,
    usingUnaryPlus: number,
    usingMultiplication: number
}
```

## Example

### Input:
```javascript
numberConversions("123.45px")
```

### Output:
```javascript
{
    usingNumber: NaN,
    usingParseInt: 123,
    usingParseFloat: 123.45,
    usingUnaryPlus: NaN,
    usingMultiplication: NaN
}
```

## Constraints

- Input can be any JavaScript value
- Must handle edge cases like empty strings, arrays, and objects
- Must preserve decimal precision where applicable
- Must handle positive and negative numbers
- Must properly handle special values like Infinity and NaN

## Testing the Script

```javascript
console.log(numberConversions("123"));        // Test integer string
console.log(numberConversions("12.34"));      // Test decimal string
console.log(numberConversions("12px"));       // Test string with units
console.log(numberConversions(true));         // Test boolean
console.log(numberConversions([]));           // Test empty array
console.log(numberConversions(undefined));    // Test undefined
```

## Bonus Challenge

Implement additional conversion methods:
- Binary string conversion (e.g., "0b1010")
- Hexadecimal string conversion (e.g., "0xFF")
- Octal string conversion (e.g., "0o777")
- Scientific notation (e.g., "1e-10")

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

JavaScript provides several ways to convert values to numbers, each with distinct behaviors:

1. `Number()`: Strict conversion that returns NaN for invalid numbers
2. `parseInt()`: Parses integer values, ignoring decimals and trailing non-numeric characters
3. `parseFloat()`: Parses floating-point numbers, handling decimals but ignoring trailing non-numeric characters
4. Unary Plus (`+`): Similar to Number() but more concise
5. Multiplication (`* 1`): Implicit conversion through mathematical operation

### Step 2: Implementing the Functions

#### Method 1: Direct Implementation

```javascript
const numberConversions = (value) => {
    return {
        usingNumber: Number(value),
        usingParseInt: parseInt(value, 10),
        usingParseFloat: parseFloat(value),
        usingUnaryPlus: +value,
        usingMultiplication: value * 1
    };
}
```

#### Method 2: With Error Handling

```javascript
const numberConversions = (value) => {
    const convert = {
        usingNumber: () => {
            try {
                return Number(value);
            } catch {
                return NaN;
            }
        },
        usingParseInt: () => {
            try {
                return parseInt(value, 10);
            } catch {
                return NaN;
            }
        },
        usingParseFloat: () => {
            try {
                return parseFloat(value);
            } catch {
                return NaN;
            }
        },
        usingUnaryPlus: () => {
            try {
                return +value;
            } catch {
                return NaN;
            }
        },
        usingMultiplication: () => {
            try {
                return value * 1;
            } catch {
                return NaN;
            }
        }
    };

    return {
        usingNumber: convert.usingNumber(),
        usingParseInt: convert.usingParseInt(),
        usingParseFloat: convert.usingParseFloat(),
        usingUnaryPlus: convert.usingUnaryPlus(),
        usingMultiplication: convert.usingMultiplication()
    };
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Basic Number String:
   - Input: `"123"`
   - Expected Output: All methods should return `123`

2. Decimal String:
   - Input: `"12.34"`
   - Expected Output: 
     - parseInt: `12`
     - Others: `12.34`

3. String with Units:
   - Input: `"12px"`
   - Expected Output:
     - parseInt/parseFloat: `12`
     - Others: `NaN`

4. Boolean:
   - Input: `true`
   - Expected Output: All methods should return `1`

5. Empty Array:
   - Input: `[]`
   - Expected Output:
     - parseInt/parseFloat: `NaN`
     - Others: `0`

## Time and Space Complexity

- Time Complexity: O(1) - All conversions are constant time operations
- Space Complexity: O(1) - Only stores a fixed number of conversion results

## References

- [MDN Number()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [MDN parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

## Related Problems

- String to Integer (atoi) - LeetCode
- Implement Calculator - Common Interview Question
- Type Coercion in JavaScript

## Key Takeaways

- Different conversion methods serve different purposes
- parseInt() and parseFloat() are more forgiving with malformed input
- Number() and unary plus are stricter and better for validation
- Understanding type coercion is crucial for JavaScript development
- Always consider edge cases when dealing with type conversion

## Notes

- Always specify the radix parameter in parseInt() for consistent behavior
- Consider using Number() when strict type checking is needed
- parseFloat() is best for handling decimal string inputs
- Unary plus operator is the most concise but can be less readable
- Multiplication by 1 is generally not recommended for explicit conversion

# Code Challenge: Type-Safe Calculator

## Problem Statement

Create a TypeScript calculator that performs basic arithmetic operations while leveraging TypeScript's type system to ensure type safety and prevent runtime errors. This challenge introduces fundamental TypeScript concepts including type annotations, union types, and return type declarations.

The purpose of this challenge is to demonstrate the benefits of TypeScript's static typing system over JavaScript's dynamic typing. It serves as an introduction to TypeScript's core type system while building something practical that showcases how type safety can prevent common runtime errors.

## Function Signature

```typescript
enum Operation {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
}

const calculate = (
  operation: Operation,
  a: number,
  b: number
): number => {
  // TODO: Implement type-safe arithmetic operations
  // TODO: Handle division by zero case
  // TODO: Return result with proper type checking
};
```

## Input

- `operation`: A string literal type representing the arithmetic operation ('add', 'subtract', 'multiply', 'divide')
- `a`: A number representing the first operand
- `b`: A number representing the second operand

## Output

- Returns a number representing the result of the arithmetic operation
- Throws an error for division by zero

## Example

### Input:
```typescript
calculate('add', 5, 3)
calculate('divide', 10, 2)
calculate('multiply', 4, 3)
```

### Output:
```typescript
8
5
12
```

## Constraints

- Input numbers can be any valid JavaScript number (including decimals)
- Division by zero should throw an error
- All arguments must be explicitly typed
- No use of the `any` type allowed
- Function must include return type annotation

## Testing the Script

```typescript
console.log(calculate('add', 5, 3));        // Expected: 8
console.log(calculate('subtract', 10, 4));   // Expected: 6
console.log(calculate('multiply', 3, 5));    // Expected: 15
console.log(calculate('divide', 20, 4));     // Expected: 5
```

## Bonus Challenge

Extend the calculator to include:
- Type-safe error handling using a custom Result type
- Support for optional parameters with default values
- Unit type for zero division cases

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

TypeScript adds static typing to JavaScript, allowing us to catch errors at compile time rather than runtime. In this challenge, we're creating a calculator that uses TypeScript's type system to:

1. Define specific types for operations using string literal types
2. Ensure numbers are passed as operands
3. Guarantee return type consistency
4. Handle edge cases with proper typing

Key TypeScript concepts introduced:
- Type annotations
- String literal types
- Union types
- Return type declarations
- Basic error handling with types

### Step 2: Implementing the Functions

**Method 1: Basic Implementation**

```typescript
enum Operation {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
}

const calculate = (
  operation: Operation,
  a: number,
  b: number
): number => {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    default:
      throw new Error('Invalid operation');
  }
};
```

**Method 2: Using a Result Type**

```typescript
type Result<T> = {
  success: true;
  value: T;
} | {
  success: false;
  error: string;
};

const calculateWithResult = (
  operation: Operation,
  a: number,
  b: number
): Result<number> => {
  try {
    const result = calculate(operation, a, b);
    return { success: true, value: result };
  } catch (error) {
    return { success: false, error: String(error) };
  }
};
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1:
   - Input: `calculate('add', 5, 3)`
   - Expected Output: `8`

2. Test Case 2:
   - Input: `calculate('divide', 10, 0)`
   - Expected Output: `Error: Division by zero`

3. Test Case 3:
   - Input: `calculate('multiply', 4.5, 2)`
   - Expected Output: `9`

## Time and Space Complexity

- Time Complexity: O(1)
- Space Complexity: O(1)

The calculator performs constant-time arithmetic operations with no additional space requirements.

## References

- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [TypeScript Deep Dive - Types](https://basarat.gitbook.io/typescript/type-system)

## Related Problems

- Type-safe Array Operations
- Generic Function Implementation
- Custom Type Guards

## Key Takeaways

- TypeScript's type system helps prevent runtime errors through compile-time checking
- String literal types can create specific, type-safe options for function parameters
- Union types allow for flexible yet type-safe parameter options
- Type annotations provide clear documentation and ensure correct usage
- Error handling can be enhanced with custom type definitions

## Notes

This challenge serves as an introduction to TypeScript's type system while building something practical. The concepts learned here will be essential for future TypeScript development, especially when working with larger codebases where type safety becomes crucial for maintainability.

Students should pay special attention to:
- How TypeScript infers types when not explicitly declared
- The difference between type annotations and type assertions
- The benefits of using specific types over `any`
- How the TypeScript compiler catches potential errors before runtime

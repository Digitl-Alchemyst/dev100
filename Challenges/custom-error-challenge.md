# Code Challenge: Building Custom Error Classes

## Problem Statement

Create a robust error handling system for a banking application using custom error classes. You'll need to implement specific error types for different banking operations and demonstrate proper error handling and propagation.

The purpose of this challenge is to understand how to create and use custom error classes in JavaScript, which is crucial for building maintainable applications with meaningful error messages and proper error handling hierarchies.

This challenge will help developers learn to create more specific and helpful error messages, making debugging easier and improving the overall user experience by providing clear feedback when operations fail.

## Function Signature

```javascript
class BankingError extends Error {
  // TODO: Implement custom error base class
}

class InsufficientFundsError extends BankingError {
  // TODO: Implement specific error for insufficient funds
}

class AccountNotFoundError extends BankingError {
  // TODO: Implement specific error for account not found
}

const processBankingTransaction = ({ accountId, amount, type }) => {
  // TODO: Implement banking transaction logic that uses custom errors
}
```

## Input

- `accountId`: String (Account identifier)
- `amount`: Number (Transaction amount)
- `type`: String ('deposit' or 'withdrawal')

## Output

- Successful transaction: Returns transaction details object
- Failed transaction: Throws appropriate custom error

## Example

### Input:
```javascript
processBankingTransaction({
  accountId: "ACC123",
  amount: 1000,
  type: "withdrawal"
})
```

### Output:
```javascript
// Success case:
{
  success: true,
  balance: 500,
  transactionId: "TXN123"
}

// Error case:
throw new InsufficientFundsError("Insufficient funds: Required $1000, available $500")
```

## Constraints

- All custom errors must extend the base `BankingError` class
- Error messages must be descriptive and include relevant details
- Each error type must include additional context (e.g., available balance, account details)
- Maximum transaction amount: $1,000,000
- Minimum account balance: $0

## Testing the Script

```javascript
try {
  const result = processBankingTransaction({
    accountId: "ACC123",
    amount: 1000,
    type: "withdrawal"
  });
  console.log("Transaction successful:", result);
} catch (error) {
  if (error instanceof InsufficientFundsError) {
    console.error("Insufficient funds:", error.message);
  } else if (error instanceof AccountNotFoundError) {
    console.error("Account not found:", error.message);
  } else {
    console.error("Unknown error:", error.message);
  }
}
```

## Bonus Challenge

Implement a transaction retry mechanism that attempts to process failed transactions up to 3 times with exponential backoff, but only for specific error types.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Custom error classes in JavaScript allow us to create specific error types for different scenarios. This is particularly useful in complex applications where different types of errors need to be handled differently.

Key concepts to understand:
- JavaScript's Error class hierarchy
- The `extends` keyword for inheritance
- Error stack traces
- Error propagation in JavaScript

### Step 2: Implementing the Functions

Method 1: Basic Custom Errors
1. Create base BankingError class
2. Extend for specific error types
3. Implement error handling in main function

```javascript
class BankingError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BankingError';
  }
}
```

Method 2: Enhanced Custom Errors with Context
1. Add additional properties to error classes
2. Include error codes and timestamps
3. Implement detailed error messages

```javascript
class BankingError extends Error {
  constructor(message, errorCode, context = {}) {
    super(message);
    this.name = 'BankingError';
    this.errorCode = errorCode;
    this.context = context;
    this.timestamp = new Date();
  }
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1:
   - Input: `{accountId: "ACC123", amount: 500, type: "withdrawal"}`
   - Expected Output: Success object with new balance

2. Test Case 2:
   - Input: `{accountId: "ACC123", amount: 5000, type: "withdrawal"}`
   - Expected Output: InsufficientFundsError

3. Test Case 3:
   - Input: `{accountId: "INVALID", amount: 500, type: "deposit"}`
   - Expected Output: AccountNotFoundError

## Time and Space Complexity

- Time Complexity: O(1) for error creation
- Space Complexity: O(1) for error object storage

The complexity is constant as error creation and throwing is a simple operation.

## References

- [MDN Web Docs - Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
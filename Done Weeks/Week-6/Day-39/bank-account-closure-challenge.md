# Code Challenge: Encapsulation and Closures in JavaScript

## Problem Statement

Implement a bank account object using closures to encapsulate private variables (balance) and provide public methods for deposit, withdrawal, and checking balance. This challenge aims to reinforce understanding of closures and encapsulation, two fundamental concepts in JavaScript that allow for data privacy and the creation of public interfaces for interacting with objects.

## Function Signature

```javascript
function createBankAccount(initialBalance) {
   // Your code here 
}
```

## Input

- `initialBalance` (number): A number representing the initial account balance

## Output

The function should return an object with the following methods:
- `deposit(amount)`: Adds the specified amount to the account balance
- `withdraw(amount)`: Subtracts the specified amount from the account balance if sufficient funds are available
- `getBalance()`: Returns the current account balance

## Example

```javascript
const account = createBankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Should output 1300
account.withdraw(1500); // Should output an error message
```

## Constraints

- The initial balance and all transactions should be positive numbers
- The account balance should never go below zero
- All monetary values should be handled with two decimal places of precision

## Testing the Script

To test your implementation, create multiple accounts and perform various transactions, including edge cases. Here's an example of how you might test your code:

```javascript
// Create an account with an initial balance of 1000
const account1 = createBankAccount(1000);

// Test deposit
account1.deposit(500);
console.log(account1.getBalance()); // Should output 1500

// Test withdrawal
account1.withdraw(200);
console.log(account1.getBalance()); // Should output 1300

// Test overdraw
account1.withdraw(1500); // Should output an error message
console.log(account1.getBalance()); // Should still be 1300

// Test edge cases
account1.deposit(-100); // Should output an error message
account1.withdraw(-50); // Should output an error message

// Create another account to test independence
const account2 = createBankAccount(500);
account2.deposit(100);
console.log(account2.getBalance()); // Should output 600
console.log(account1.getBalance()); // Should still be 1300
```

## Bonus Challenge

Implement additional features such as:
1. A `transfer(amount, targetAccount)` method to transfer money between accounts
2. A `getTransactionHistory()` method that returns an array of all transactions (deposits and withdrawals)
3. Interest calculation: Add an annual interest rate and a method to apply interest based on the number of days since the last interest application

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding Closures and Encapsulation

Closures in JavaScript provide a way to create private variables and methods. A closure is created when a function is defined within another function, allowing the inner function to access the outer function's variables even after the outer function has finished executing.

Encapsulation is a fundamental principle of object-oriented programming that bundles data and the methods that operate on that data within a single unit (like an object). It restricts direct access to some of an object's components, which is a means of preventing accidental interference and misuse of the methods and data.

In our bank account example:
- The account balance is the private data we want to encapsulate.
- The deposit, withdraw, and getBalance methods form the public interface for interacting with the account.

### Step 2: Implementing the createBankAccount Function

Here's a step-by-step guide to implementing the `createBankAccount` function:

1. Define the outer function that takes the initial balance as a parameter:

```javascript
function createBankAccount(initialBalance) {
    if (typeof initialBalance !== 'number' || initialBalance < 0) {
        throw new Error('Initial balance must be a positive number');
    }

    let balance = Number(initialBalance.toFixed(2));

    // The rest of the implementation will go here...
}
```

2. Define the public methods within the outer function:

```javascript
function createBankAccount(initialBalance) {
    // ... (previous code)

    function deposit(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error('Deposit amount must be a positive number');
        }
        balance += Number(amount.toFixed(2));
        return balance;
    }

    function withdraw(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error('Withdrawal amount must be a positive number');
        }
        if (amount > balance) {
            throw new Error('Insufficient funds');
        }
        balance -= Number(amount.toFixed(2));
        return balance;
    }

    function getBalance() {
        return balance;
    }

    // The return statement will go here...
}
```

3. Return an object containing the public methods:

```javascript
function createBankAccount(initialBalance) {
    // ... (previous code)

    return {
        deposit,
        withdraw,
        getBalance
    };
}
```

### Step 3: Understanding How Closures Provide Encapsulation

In this implementation:

- The `balance` variable is not directly accessible from outside the `createBankAccount` function. It's a private variable.
- The `deposit`, `withdraw`, and `getBalance` functions form a closure over the `balance` variable. They can access and modify it, but external code cannot.
- Each time `createBankAccount` is called, it creates a new closure with its own `balance` variable, ensuring that different account objects don't interfere with each other's balances.

### Step 4: Testing the Implementation

Use the testing script provided earlier to verify that your implementation works correctly. Make sure to test edge cases and error conditions.

## Time and Space Complexity

- Time Complexity: O(1) for all operations (deposit, withdraw, getBalance)
- Space Complexity: O(1) for creating each account

The time complexity is constant because all operations perform a fixed number of steps regardless of the balance or transaction amount. The space complexity is also constant because each account object uses a fixed amount of memory.

## References

- [MDN Web Docs: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [JavaScript.info: Closure](https://javascript.info/closure)
- [MDN Web Docs: Encapsulation](https://developer.mozilla.org/en-US/docs/Glossary/Encapsulation)

## Related Problems

- Implement a counter with increment, decrement, and reset methods using closures
- Create a module pattern for a library management system using closures

## Key Takeaways

- Closures provide a powerful way to create private variables and methods in JavaScript
- Encapsulation helps in creating secure and modular code by restricting direct access to internal details
- Proper error handling and input validation are crucial for creating robust financial software
- Using `Number().toFixed(2)` helps in handling monetary values with precision

## Notes

While this implementation provides basic encapsulation, it's important to note that determined developers could still find ways to access the private variables (e.g., through the browser's debugging tools). For highly sensitive financial applications, additional security measures would be necessary.

# Day 7 Coding Challenge: IIFE and Module Pattern

## Problem Statement

Create a module that manages a bank account using the Immediately Invoked Function Expression (IIFE) and module pattern. The module should have private variables for the account balance and account holder name, and public methods for depositing, withdrawing, and checking the balance.

## Module Structure

The module should be created using an IIFE and should return an object with the following methods:
- `deposit(amount)`
- `withdraw(amount)`
- `getBalance()`
- `getAccountHolder()`

## Input
- For `deposit` and `withdraw`: `amount` (a positive number)
- No input for `getBalance` and `getAccountHolder`

## Output
- `deposit`: Should return the new balance
- `withdraw`: Should return the new balance, or an error message if insufficient funds
- `getBalance`: Should return the current balance
- `getAccountHolder`: Should return the account holder's name

## Example Usage

const account = bankAccount("John Doe", 1000);
console.log(account.getBalance()); // Output: 1000
console.log(account.deposit(500)); // Output: 1500
console.log(account.withdraw(200)); // Output: 1300
console.log(account.getAccountHolder()); // Output: John Doe
console.log(account.withdraw(2000)); // Output: Error message

## Test the Module

Create an instance of the bank account module and test all its methods with various inputs.

## Expanded Instructions

### Step 1: Understanding the Problem
The goal is to create a module that encapsulates the functionality of a bank account. This module should use the IIFE pattern to create a closure that protects the private variables (balance and account holder name) while exposing public methods to interact with the account.

### Step 2: Implementing the Module

Implement the bank account module using an IIFE. The IIFE should return an object with the public methods, while keeping the balance and account holder name as private variables within the closure.

### Step 3: Testing the Module

After implementing the module, create an instance of the bank account and test all its methods to ensure they work correctly and that the private variables cannot be accessed directly.

### Explanation:
This challenge introduces the module pattern using an Immediately Invoked Function Expression (IIFE). This is a common pattern in JavaScript for creating encapsulation and private state. It demonstrates how closures can be used to create privacy in JavaScript, a language that doesn't have built-in privacy mechanisms for object properties.
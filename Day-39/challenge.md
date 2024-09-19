# Day 4 Challenge: Encapsulation and Closures

## Problem Statement
Implement a bank account object using closures to encapsulate private variables (balance) and provide public methods for deposit, withdrawal, and checking balance.

## Function Signature
`createBankAccount(initialBalance)`

## Input
`initialBalance`: A number representing the initial account balance

## Output
An object with methods for deposit, withdraw, and getBalance

## Example
const account = createBankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Should output 1300
account.withdraw(1500); // Should output an error message

## Test the Function
Create multiple accounts and perform various transactions, testing edge cases like overdrawing an account.
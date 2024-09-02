Day 3 Coding Challenge: Prime Number Checker

## Problem Statement
Create a function that determines whether a given number is prime or not. A prime number is a natural number greater than 1 that is only divisible by 1 and itself.

## Function Signature

```javascript
function isPrime(num) {
   // Your code here 
}
```

## Input
- `num`: A positive integer greater than 1

## Output
The function should return a boolean: `true` if the number is prime, `false` otherwise.

## Examples
Input: 7  
Output: true

Input: 12  
Output: false

## Test the Function

```javascript
console.log(isPrime(7)); // Should print true  
console.log(isPrime(12)); // Should print false
```

## Expanded Instructions

### Step 1: Understanding the Problem
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The goal is to create a function that can efficiently determine if a given number meets this criterion.

### Step 2: Potential Solutions

**Naive Approach:**  
Check if the number is divisible by any integer from 2 to `num-1`.

**Optimized Approach:**  
Check divisibility only up to the square root of the number.

### Step 3: Implementing the Function (Optimized Approach)

```javascript
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  
  return true;
}
```

**Explanation:**  
This implementation first checks for small numbers and common divisors (2 and 3). Then it checks for divisibility by numbers of the form 6k ± 1 up to the square root of the input number. This is because all primes greater than 3 can be expressed in the form 6k ± 1.

## Bonus Challenge

### Extended Functionality: List All Prime Numbers Up to a Given Number

**Problem:**  
Modify the `isPrime` function or create a new function to return all prime numbers up to a given number `n`.

**Function Signature:**

```javascript
function listPrimes(n) {
   // Your code here 
}
```

**Example:**
Input: 10  
Output: [2, 3, 5, 7]

**Hint:**  
You can use the `isPrime` function inside a loop to check each number up to `n` and collect the primes in an array.

Day 4 Coding Challenge: Factorial Calculator

## Problem Statement
Implement a function that calculates the factorial of a given non-negative integer. The factorial of a non-negative integer `n` is the product of all positive integers less than or equal to `n`.

## Function Signature
```javascript
function factorial(n) {
   // Your code here 
}
```

## Input
- `n`: A non-negative integer

## Output
- The function should return the factorial of `n`.

## Examples
Input: 5  
Output: 120 (5 * 4 * 3 * 2 * 1 = 120)

Input: 0  
Output: 1 (The factorial of 0 is defined as 1)

## Test the Function
console.log(factorial(5)); // Should print 120  
console.log(factorial(0)); // Should print 1

## Expanded Instructions

**Spiolers ALERT**

### Step 1: Understanding the Problem
The factorial of a non-negative integer `n`, denoted as `n!`, is the product of all positive integers from 1 to `n`. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120. The factorial function grows rapidly with increasing `n`, which means that even small values of `n` can lead to large results. For example, 10! = 3,628,800.

The problem requires you to create a function that can calculate this product for any non-negative integer `n`. It's important to handle special cases like `0!`, which is defined as 1, and to consider how your function should behave with negative inputs (though by definition, factorials are not defined for negative numbers).

### Step 2: Potential Solutions

**Iterative Approach:**  
This method uses a loop to compute the factorial. You start with a result of 1 and multiply it by each integer from 2 up to `n`. This approach is straightforward and easy to understand.

**Recursive Approach:**  
In this approach, the factorial function calls itself with a smaller number. For example, `factorial(5)` would call `factorial(4)`, which would call `factorial(3)`, and so on, until reaching the base case of `factorial(1)` or `factorial(0)`. This method is elegant but can be less efficient for large values of `n` due to the overhead of multiple function calls.


### Step 3: Implementing the Function (Iterative Approach)
```javascript
function factorial(n) {
  if (n < 0) return undefined; // Factorial is not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

**Explanation:**  
- **Edge Cases:** The function first checks for edge cases. If `n` is less than 0, the function returns `undefined` since factorials are not defined for negative numbers. If `n` is 0 or 1, the function immediately returns 1, as 0! and 1! are both defined as 1.
- **Loop:** For values of `n` greater than 1, the function uses a loop to multiply `result` by every integer from 2 to `n`. The loop accumulates the product in the `result` variable, which is returned at the end.


### Step 3: Implementing the Function (Recursive Approach)
```javascript
function recursiveFactorial(n) {
  if (n < 0) return undefined; // Factorial is not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  
  return n * recursiveFactorial(n - 1);
}
```

**Explanation:**  
- **Edge Cases:** Just like in the iterative approach, the function first checks if `n` is less than 0, returning `undefined` since factorials are not defined for negative numbers. If `n` is 0 or 1, the function returns 1, as these are the base cases.
- **Recursion:** For values of `n` greater than 1, the function calls itself with `n-1` and multiplies the result by `n`. This process continues recursively until the base case (where `n` is 0 or 1) is reached. The multiplication chain then resolves backward, producing the factorial value.
- **Base Case:** The base case of the recursion is when `n` is 0 or 1, at which point the function stops calling itself and begins returning values up the call stack.


## Bonus Challenge

### Extended Functionality: Compute Factorials Recursively

**Problem:**  
Implement the factorial function using a recursive approach instead of an iterative one.

**Function Signature:**
```javascript
function recursiveFactorial(n) {
   // Your code here 
}
```

**Example:**
Input: 5  
Output: 120

**Hint:**  
The recursive formula for the factorial function is `n! = n * (n-1)!`, with the base case being `0! = 1`. This means that the function should call itself with `n-1` until it reaches the base case.
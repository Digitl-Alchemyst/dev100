Day 6 Coding Challenge: Pattern Printer

## Problem Statement
Create a function that prints a triangle pattern of asterisks. The function should take a number `n` as input and print `n` rows, where the i-th row contains `i` asterisks.

## Function Signature
function printTriangle(n) {
   // Your code here 
}

## Input
- `n`: A positive integer representing the number of rows.

## Output
The function should print a triangle pattern of asterisks to the console.

## Example
Input: 5  
Output:
*
**
***
**
*

## Test the Function
printTriangle(5);

## Expanded Instructions

### Step 1: Understanding the Problem
The goal is to create a function that prints a triangle pattern where each row contains a number of asterisks equal to its row number, up to `n` rows. For example, if `n` is 5, the function should print five rows, with the first row having 1 asterisk, the second row having 2 asterisks, and so on, until the fifth row, which will have 5 asterisks. This problem is straightforward and involves basic control structures like loops and string manipulation.

### Step 2: Potential Solutions

**Nested Loop Approach:**  
This approach involves using two loops:
- An outer loop to iterate over the number of rows.
- An inner loop to construct the string of asterisks for each row.

**Alternative Approach:**  
You could use a single loop and string repetition to build each row directly. While this is a more concise method, the nested loop approach is a good way to practice understanding basic looping constructs.

### Step 3: Implementing the Function

function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

**Explanation:**  
- **Outer Loop (i):** This loop runs from 1 to `n` and determines how many rows the triangle will have. Each iteration of this loop represents a new row of the triangle.
- **Inner Loop (j):** This loop runs from 1 to `i` (the current row number) and builds a string of asterisks. The number of asterisks in each row is equal to the row number `i`.
- **String Construction:** The `row` variable accumulates asterisks for each row, and `console.log(row)` prints the completed row of asterisks.

## Bonus Challenge

### Right-Aligned Triangle Pattern
**Problem:**  
Modify the function to print a right-aligned triangle pattern of asterisks. For example, if `n` is 5, the output should be:

*
**
***
****
*****
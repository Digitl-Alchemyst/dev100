
# Day 4 Coding Challenge: Number to Binary

## Problem Statement

Create a function that converts a decimal number to its binary representation as a string.

For example, if the input number is `10`, the function should return the string `"1010"`.

Avoid using the `toString(2)` method for this challenge.

This challenge helps you understand how numbers can be represented in different bases (binary, in this case) and how to work with numbers and strings in JavaScript. Converting between decimal and binary is a fundamental concept in computer science.

## Function Signature

This function will take 1 input, which we'll call `num`, and it will return a string representing the binary equivalent of the input number.

Here’s how the structure of the function should look:

```javascript
function decimalToBinary(num) {
  // Your code here
}
```

## Input

- **num**: A positive integer that you want to convert to binary.

## Output

The function should return a string that represents the binary equivalent of the input number. For example, if you provide the number `10`, the function should return the string `"1010"`.
## Example

- **Input:** `10`
- **Output:** `"1010"`

- **Input:** `0`
- **Output:** `"0"`

- **Input:** `255`
- **Output:** `"11111111"`

## Test the Function

```javascript
console.log(decimalToBinary(10)); // Should print "1010"
console.log(decimalToBinary(0));  // Should print "0"
console.log(decimalToBinary(255)); // Should print "11111111"
```

# Expanded Instructions

# **Spiolers**

## Step 1: Understanding the Problem

The goal is to create a function that takes a decimal number (base 10) and converts it into its binary representation (base 2). Binary numbers consist of only two digits: `0` and `1`. Each digit in a binary number represents a power of 2, with the least significant bit (rightmost) representing 2^0.

For example:
- Decimal 5 in binary is `101`
  - 1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 4 + 0 + 1 = 5

## Step 2: Potential Solutions

There are several ways to convert a decimal number to binary:

1. **Division by 2 Method:**
   - Continuously divide the decimal number by 2.
   - Record the remainder at each step (either 0 or 1).
   - The binary number is the remainders read from bottom to top (last to first).

2. **Using Bitwise Operators:**
   - Use bitwise operations to extract each bit of the number.
   - Shift the number right by one bit at each step and record the least significant bit.

3. **Using JavaScript's toString Method:**
   - JavaScript provides a built-in method `toString(2)` that converts a number to its binary representation. However, for the purpose of this challenge, you should implement the conversion manually to deepen your understanding.

## Step 3: Implementing the Function

### We'll use the **Division by 2 Method** for this implementation.

**Algorithm:**
1. Initialize an empty string to store the binary digits.
2. Handle the special case where the input number is 0. In this case, return `"0"`.
3. While the input number is greater than 0:
   - Divide the number by 2.
   - Append the remainder (0 or 1) to the beginning of the binary string.
   - Update the number by taking the integer division result of dividing by 2.
4. Return the binary string.

**Implementation:**
```javascript
function decimalToBinary(num) {
  if (num === 0) {
    return "0";
  }
  
  let binaryStr = "";
  while (num > 0) {
    let remainder = num % 2;
    binaryStr = remainder + binaryStr;
    num = Math.floor(num / 2);
  }
  return binaryStr;
}
```

Simplified Version:
```javascript
function decimalToBinary(num) {
  let binaryStr = '';
  while (num > 0) {
    binaryStr = (num % 2) + binaryStr;
    num = Math.floor(num / 2);
  }
  return binaryStr || '0'; // Return '0' if num is 0
}
```

**Explanation:**
- We start by checking if the input `num` is 0. If so, we return `"0"` since 0 in binary is 0.
- We initialize an empty string `binaryStr` to build our binary number.
- We use a `while` loop to repeatedly divide `num` by 2 and prepend the remainder to `binaryStr`.
- We use `Math.floor` to get the integer part of the division.
- Once `num` becomes 0, we exit the loop and return the `binaryStr`.




### We'll now use the **Bitwise Operators** method for this implementation.

**Algorithm:**
1. Initialize an empty string to store the binary digits.
2. Handle the special case where the input number is 0. In this case, return `"0"`.
3. While the input number is greater than 0:
   - Use the bitwise AND operator (`&`) with `1` to extract the least significant bit (0 or 1).
   - Append the extracted bit to the beginning of the binary string.
   - Use the right shift operator (`>>`) to shift the number one bit to the right.
4. Return the binary string.

**Implementation:**
```javascript
function decimalToBinary(num) {
  if (num === 0) {
    return "0";
  }
  
  let binaryStr = "";
  while (num > 0) {
    let bit = num & 1;  // Extract the least significant bit
    binaryStr = bit + binaryStr;
    num = num >> 1;  // Shift the number right by one bit
  }
  return binaryStr;
}
```

**Explanation:**
- We start by checking if the input `num` is 0. If so, we return `"0"` since 0 in binary is 0.
- We initialize an empty string `binaryStr` to build our binary number.
- We use a `while` loop to repeatedly extract the least significant bit using the `&` operator and prepend it to `binaryStr`.
- We then shift the number right by one bit using the `>>` operator, effectively dividing the number by 2.
- Once `num` becomes 0, we exit the loop and return the `binaryStr`.


**Testing the Function:**
```javascript
console.log(decimalToBinary(10)); // Should print "1010"
console.log(decimalToBinary(0));  // Should print "0"
console.log(decimalToBinary(255)); // Should print "11111111"
console.log(decimalToBinary(1));  // Should print "1"
console.log(decimalToBinary(2));  // Should print "10"
console.log(decimalToBinary(347));  // Should print "101011011"
console.log(decimalToBinary(782));  // Should print "1100001110"
console.log(decimalToBinary(123));  // Should print "1111011"
console.log(decimalToBinary(611));  // Should print "1001100011"
console.log(decimalToBinary(256));  // Should print "100000000"
console.log(decimalToBinary(943));  // Should print "1110101111"
console.log(decimalToBinary(429));  // Should print "110101101"
console.log(decimalToBinary(798));  // Should print "1100011110"
console.log(decimalToBinary(132));  // Should print "10000100"
console.log(decimalToBinary(511));  // Should print "111111111"

```



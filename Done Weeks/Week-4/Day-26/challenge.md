# Challenge: Secret Message Encoder

## Problem Statement

Your task is to complete the implementation of a **secret message encoder**. The encoder will use a series of **nested functions** to transform a given message. Each function in the chain will add a layer of encryption to the message. This challenge will involve closures to ensure that certain aspects of the encoding process remain hidden, making the encoder more secure.

## Requirements

1. **Implement the `createEncoder` function** that returns the main encoding function.
2. The main encoding function should **take a string message** as input and return the encoded message.
3. **Use closures** and function scope to create a secure encoding process.
4. Implement the following **encoding steps** in separate nested functions:
   - a. **Reverse the message**: The first step is to reverse the characters in the message.
   - b. **Shift each character's ASCII value** by a secret number (use closure to hide this number): In the second step, shift the ASCII value of each character by a specific secret number that will remain hidden inside the closure.
   - c. **Add a random prefix** of a specific length (use closure to hide the length): Finally, add a random string of characters of a certain length at the start of the message. The length of the prefix should also be hidden using closure.

## Function Signature

```javascript
function createEncoder() {
  // TODO: Implement the encoding logic here
  // Use nested functions and closure to create the encoding steps
  
  return function(message) {
    // TODO: Call the nested functions here to encode the message
    return encodedMessage;
  };
}
```

## Input

- A string `message`: The message to be encoded.

## Output

The function should return an encoded string, which has undergone several transformations, including:
- Reversing the string.
- Shifting each character's ASCII value.
- Adding a random prefix.

## Example Usage

```javascript
const encode = createEncoder();
console.log(encode("Hello, World!")); // Should output an encoded string
```

## Expanded Instructions

### Step 1: Understand the Encoding Process

You need to create a secure encoding process where:
1. The message is **reversed**.
2. Each character in the reversed message has its **ASCII value shifted** by a secret number. This secret number should be hidden inside the closure.
3. A **random prefix** of characters is added to the start of the transformed message. The length of the prefix should also be hidden using closure.

### Step 2: Use of Closure

**Why Closure?**

Closure allows you to create functions that "remember" values, even after they are executed. In this case, you can use closures to store secret values (such as the shift amount and prefix length) so that they are not accessible from outside the encoder function.

### Step 3: Implementing the `createEncoder` Function

- **Reversal of the Message:** Write a nested function that reverses the string. This will be the first step in the transformation process.
- **Shifting ASCII Values:** Write another nested function to iterate over the reversed string, shifting each character's ASCII value by a specific amount (e.g., +3).
- **Adding a Random Prefix:** Write a final function to generate a random prefix of a specific length and prepend it to the transformed message.
- Return the encoded message after applying these transformations.

## Bonus Challenge

### Implement a Matching Decoder Function

In addition to creating the encoder, write a `createDecoder` function that can reverse the process:
- Remove the random prefix.
- Reverse the character shifts.
- Reverse the entire string.

## Test the Function

```javascript
const encode = createEncoder();
console.log(encode("Hello, World!")); // Outputs an encoded string
```
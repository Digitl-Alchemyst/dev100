# Code Challenge: Delayed Greeting with Promises

## Problem Statement

In this challenge, you will create a function that uses a Promise to deliver a delayed greeting message. This challenge serves as an introduction to asynchronous programming in JavaScript, specifically focusing on Promises.

Promises are a fundamental concept in modern JavaScript, used to handle asynchronous operations. They provide a cleaner and more manageable way to work with callbacks, making your code more readable and easier to reason about. This challenge will help you understand the basics of creating and using Promises, setting the foundation for more complex asynchronous programming tasks.

## Function Signature

```javascript
function delayedGreeting(name, delay) {
  // Your code here
}
```

## Input

- `name` (string): The name of the person to greet
- `delay` (number): The delay in milliseconds before the greeting is delivered

## Output

The function should return a Promise that resolves with a string containing the greeting message.

## Example

### Input:

```javascript
delayedGreeting("Alice", 2000).then(message => console.log(message));
```

### Output:

After 2 seconds: `"Hello, Alice!"`

## Constraints

- The delay should be a positive integer representing milliseconds
- The function should use a Promise to handle the delayed greeting

## Testing the Script

To test your implementation, you can use the following code:

```javascript
delayedGreeting("Alice", 2000).then(message => console.log(message));
console.log("This message should appear before the greeting");
```

Expected console output:
```
This message should appear before the greeting
(After 2 seconds) Hello, Alice!
```

## Bonus Challenge

Modify the function to accept an array of names and return a Promise that resolves with an array of greeting messages, each delayed by an increasing amount of time (e.g., first name delayed by 1 second, second name by 2 seconds, etc.).

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The core of this challenge is to create a function that introduces a delay before delivering a greeting message. This is a perfect use case for Promises in JavaScript. 

Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They have three states:

1. Pending: initial state, neither fulfilled nor rejected
2. Fulfilled: meaning that the operation was completed successfully
3. Rejected: meaning that the operation failed

In our case, we'll use a Promise that fulfills after a specified delay with a greeting message.

### Step 2: Implementing the Functions

There are two main approaches we can take to solve this problem:

#### Approach 1: Using setTimeout with a new Promise

```javascript
function delayedGreeting(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`);
    }, delay);
  });
}
```

1. We create a new Promise and return it immediately.
2. Inside the Promise constructor, we use `setTimeout` to delay the resolution.
3. After the specified delay, we call `resolve` with our greeting message.

#### Approach 2: Using async/await with a helper function

```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedGreeting(name, delay) {
  await sleep(delay);
  return `Hello, ${name}!`;
}
```

1. We create a helper function `sleep` that returns a Promise resolving after a given delay.
2. We use the `async` keyword to define an asynchronous function.
3. We `await` the sleep function to introduce the delay.
4. We return the greeting message, which will be automatically wrapped in a Promise due to the `async` function.

### Step 3: Testing the Functions

To test the function, you can use the following code:

```javascript
console.log("Starting the greeting process...");
delayedGreeting("Alice", 2000).then(message => console.log(message));
console.log("This message should appear before the greeting");
```

**Test Cases**

1. Test Case 1:
   - Input: `delayedGreeting("Bob", 1000)`
   - Expected Output: (after 1 second) `"Hello, Bob!"`

2. Test Case 2:
   - Input: `delayedGreeting("Charlie", 3000)`
   - Expected Output: (after 3 seconds) `"Hello, Charlie!"`

## Time and Space Complexity

- Time Complexity: O(1) - The function itself executes in constant time, although the resolution of the Promise is delayed.
- Space Complexity: O(1) - The function uses a constant amount of memory regardless of input size.

The time complexity might seem counterintuitive because of the delay, but it's important to understand that the delay doesn't affect the computational complexity. The actual operations performed by the function (creating a string) take constant time.

## References

- [MDN Web Docs: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs: setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [JavaScript.info: Introduction to async/await](https://javascript.info/async-await)

## Related Problems

- Chaining multiple asynchronous operations
- Handling errors in Promises
- Implementing a Promise-based API for an existing callback-based function

## Key Takeaways

- Promises provide a way to handle asynchronous operations in JavaScript.
- The `setTimeout` function can be used to introduce delays in code execution.
- Async/await syntax can make working with Promises more readable and intuitive.
- Asynchronous code execution allows non-blocking operations, improving application responsiveness.

## Notes

While this challenge introduces Promises, it's important to note that in real-world scenarios, Promises are often used for more complex asynchronous operations like API calls, file operations, or database queries. The principles learned here form the foundation for understanding these more advanced use cases.

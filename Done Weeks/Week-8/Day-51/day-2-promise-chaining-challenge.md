# Code Challenge: Multi-Step Process with Promise Chaining

## Problem Statement

In this challenge, you will create a series of functions that return Promises, simulating a multi-step process. You'll then chain these Promises together to execute the steps in sequence. This challenge builds on the previous day's introduction to Promises, focusing on the powerful concept of Promise chaining.

Promise chaining is a technique that allows you to execute asynchronous operations in a specific order, with each operation starting when the previous one has completed. This is particularly useful when you have a series of tasks that depend on the results of previous tasks, or when you need to ensure that operations are performed in a specific sequence.

## Function Signatures

```javascript
function step1() {
  return new Promise(resolve => setTimeout(() => resolve("Step 1 complete"), 1000));
}

function step2(previousResult) {
  // Your code here
}

function step3(previousResult) {
  // Your code here
}
```

## Input

- `step1`: No input
- `step2` and `step3`: Takes the result from the previous step as input

## Output

Each function should return a Promise that resolves with a string indicating the completion of that step and incorporating the result from the previous step.

## Example

### Input:

```javascript
step1()
  .then(step2)
  .then(step3)
  .then(finalResult => console.log(finalResult))
  .catch(error => console.error(error));
```

### Output:

After about 3 seconds (assuming each step takes 1 second):
```
Step 3 complete: Step 2 complete: Step 1 complete
```

## Constraints

- Each step function should use a Promise to simulate an asynchronous operation
- The delay for each step should be at least 1000 milliseconds (1 second)
- Each step should build upon the result of the previous step

## Testing the Script

To test your implementation, you can use the following code:

```javascript
step1()
  .then(step2)
  .then(step3)
  .then(finalResult => console.log(finalResult))
  .catch(error => console.error(error));

console.log("This message should appear first");
```

Expected console output:
```
This message should appear first
(After about 3 seconds) Step 3 complete: Step 2 complete: Step 1 complete
```

## Bonus Challenge

Modify the chain to include error handling at each step. If an error occurs in any step, the chain should be broken, and the error should be caught and logged.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge focuses on Promise chaining, which allows you to perform a sequence of asynchronous operations where each operation starts when the previous operation is completed. In our case, we're simulating a three-step process where each step depends on the result of the previous step.

The key concepts to understand are:

1. Each function returns a Promise
2. The `then` method is used to chain Promises
3. Each `then` callback receives the result of the previous Promise

### Step 2: Implementing the Functions

We'll implement three functions: `step1`, `step2`, and `step3`. Each function will simulate an asynchronous operation using `setTimeout`.

#### Approach 1: Using setTimeout with new Promise

```javascript
function step1() {
  return new Promise(resolve => setTimeout(() => resolve("Step 1 complete"), 1000));
}

function step2(previousResult) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Step 2 complete: ${previousResult}`);
    }, 1000);
  });
}

function step3(previousResult) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Step 3 complete: ${previousResult}`);
    }, 1000);
  });
}
```

#### Approach 2: Using async/await

```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function step1() {
  await sleep(1000);
  return "Step 1 complete";
}

async function step2(previousResult) {
  await sleep(1000);
  return `Step 2 complete: ${previousResult}`;
}

async function step3(previousResult) {
  await sleep(1000);
  return `Step 3 complete: ${previousResult}`;
}
```

### Step 3: Testing the Functions

To test the functions, you can use the following code:

```javascript
step1()
  .then(step2)
  .then(step3)
  .then(finalResult => console.log(finalResult))
  .catch(error => console.error(error));

console.log("This message should appear first");
```

**Test Cases**

1. Test Case 1: Normal execution
   - Expected Output: (after about 3 seconds) `"Step 3 complete: Step 2 complete: Step 1 complete"`

2. Test Case 2: Error handling (for bonus challenge)
   - Modify step2 to throw an error
   - Expected Output: An error message should be logged, and step3 should not execute

## Time and Space Complexity

- Time Complexity: O(1) for each function, but the total execution time is the sum of all delays
- Space Complexity: O(1) - Each function uses a constant amount of memory

While the time complexity of each function is constant, the perceived execution time is about 3 seconds due to the cumulative delays. This illustrates an important aspect of asynchronous programming: computational complexity doesn't always directly correlate with execution time.

## References

- [MDN Web Docs: Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
- [JavaScript.info: Promises chaining](https://javascript.info/promise-chaining)
- [MDN Web Docs: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## Related Problems

- Implementing a sequence of API calls
- Creating a pipeline for data processing
- Building a multi-step form submission process

## Key Takeaways

- Promise chaining allows you to execute asynchronous operations in a specific sequence
- Each `then` in a Promise chain receives the result of the previous Promise
- Async/await can be used as an alternative syntax for working with Promises
- Error handling in Promise chains is crucial for robust applications

## Notes

While this challenge uses artificial delays to simulate asynchronous operations, in real-world scenarios, Promise chaining is often used for sequences of operations like multiple API calls, database operations, or file system interactions. The principles learned here directly apply to these more complex use cases.

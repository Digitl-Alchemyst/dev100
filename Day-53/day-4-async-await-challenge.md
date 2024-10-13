# Code Challenge: Refactoring Promise Chains with Async/Await

## Problem Statement

In this challenge, you will refactor the multi-step process from Day 2 using the modern async/await syntax. This challenge introduces async/await as a more readable and maintainable way to handle asynchronous operations in JavaScript.

Async/await is syntactic sugar built on top of Promises, providing a way to work with Promises that looks and feels more like synchronous code. This can make asynchronous code easier to read, write, and reason about, especially for complex operations.

## Function Signatures

```javascript
async function step1() {
  // Your code here
}

async function step2(previousResult) {
  // Your code here
}

async function step3(previousResult) {
  // Your code here
}

async function runProcess() {
  // Your code here
}
```

## Input

- `step1`: No input
- `step2` and `step3`: Takes the result from the previous step as input
- `runProcess`: No input, but calls the other functions internally

## Output

Each step function should return a string indicating the completion of that step and incorporating the result from the previous step (for `step2` and `step3`).

The `runProcess` function should return the final result after all steps are complete.

## Example

### Input:

```javascript
runProcess()
  .then(finalResult => console.log(finalResult))
  .catch(error => console.error(error));
```

### Output:

After about 3 seconds (assuming each step takes 1 second):
```
Step 3 complete: Step 2 complete: Step 1 complete
```

## Constraints

- Use the `async` keyword to define asynchronous functions
- Use the `await` keyword to handle asynchronous operations within the functions
- Each step should still simulate an asynchronous operation with a delay of at least 1000 milliseconds (1 second)
- The `runProcess` function should use try/catch for error handling

## Testing the Script

To test your implementation, you can use the following code:

```javascript
console.log("Starting the process...");
runProcess()
  .then(finalResult => console.log("Process completed:", finalResult))
  .catch(error => console.error("An error occurred:", error));
console.log("This message should appear before the process completes");
```

Expected console output:
```
Starting the process...
This message should appear before the process completes
(After about 3 seconds) Process completed: Step 3 complete: Step 2 complete: Step 1 complete
```

## Bonus Challenge

Implement a timeout mechanism using async/await and `Promise.race()`. If any step takes longer than 2 seconds, the process should abort with a timeout error.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding Async/Await

Async/await is a way to work with Promises that makes asynchronous code look and behave more like synchronous code. Here are the key points:

1. The `async` keyword is used to define a function that handles asynchronous operations.
2. The `await` keyword is used inside an async function to wait for a Promise to resolve.
3. `await` can only be used inside an async function.
4. An async function always returns a Promise.

### Step 2: Implementing the Functions

Let's refactor our functions from Day 2 to use async/await:

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

async function runProcess() {
  try {
    const result1 = await step1();
    const result2 = await step2(result1);
    const result3 = await step3(result2);
    return result3;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // re-throw the error for further handling if needed
  }
}
```

### Step 3: Understanding the Refactored Code

1. Each step function is now declared with the `async` keyword.
2. Inside each function, we `await` the `sleep` function to introduce a delay.
3. The `runProcess` function is also async and uses `await` to call each step in sequence.
4. We use a try/catch block in `runProcess` for error handling.

### Step 4: Testing the Functions

To test the refactored functions, you can use the following code:

```javascript
console.log("Starting the process...");
runProcess()
  .then(finalResult => console.log("Process completed:", finalResult))
  .catch(error => console.error("An error occurred:", error));
console.log("This message should appear before the process completes");
```

**Test Cases**

1. Test Case 1: Normal execution
   - Expected Output: (after about 3 seconds) `"Process completed: Step 3 complete: Step 2 complete: Step 1 complete"`

2. Test Case 2: Error handling
   - Modify one of the step functions to throw an error
   - Expected Output: An error message should be logged, and the process should not complete

## Time and Space Complexity

- Time Complexity: O(1) for each function, but the total execution time is the sum of all delays
- Space Complexity: O(1) - Each function uses a constant amount of memory

The time and space complexity remain the same as the Promise-based version. The main difference is in the readability and maintainability of the code.

## References

- [MDN Web Docs: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN Web Docs: await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [JavaScript.info: Async/await](https://javascript.info/async-await)

## Related Problems

- Refactoring complex Promise chains in existing codebases
- Implementing error retry mechanisms with async/await
- Creating asynchronous iterators using async/await

## Key Takeaways

- Async/await provides a more synchronous-looking way to write asynchronous code
- It's built on top of Promises, so understanding Promises is still crucial
- Error handling can be done using traditional try/catch blocks
- Async functions always return a Promise, even if you don't explicitly return one

## Notes

While async/await makes asynchronous code look synchronous, it's important to remember that it's still asynchronous under the hood. Each `await` statement can be seen as a potential point where the function will pause execution and allow other code to run. This mental model is crucial for understanding the behavior of async/await in more complex scenarios.

# Code Challenge: Robust Error Handling in Async Functions

## Problem Statement

In this challenge, you will enhance the multi-step process from Day 4 by implementing robust error handling using try/catch blocks and creating custom error types. You'll also implement retry logic for certain types of errors. This challenge emphasizes the importance of proper error handling in asynchronous JavaScript code, which is crucial for building reliable and maintainable applications.

Error handling in async/await functions allows you to catch and handle errors in a way that's similar to synchronous code, making it easier to reason about and manage errors in complex asynchronous operations.

## Function Signatures

```javascript
class StepError extends Error {
  constructor(step, message) {
    // Your code here
  }
}

async function step1() {
  // Your code here
}

async function step2(previousResult) {
  // Your code here
}

async function step3(previousResult) {
  // Your code here
}

async function runProcess(retries = 3) {
  // Your code here
}
```

## Input

- `step1`, `step2`, `step3`: Same as Day 4
- `runProcess`: 
  - `retries` (number, optional): The number of times to retry the process in case of a temporary error. Default is 3.

## Output

- On success: The final result after all steps are complete.
- On failure: Throws an error with details about which step failed and why.

## Example

### Input:

```javascript
runProcess()
  .then(result => console.log("Process completed successfully:", result))
  .catch(error => console.error("Process failed:", error.message));
```

### Output (success case):

```
Process completed successfully: Step 3 complete: Step 2 complete: Step 1 complete
```

### Output (failure case):

```
Process failed: Step 2 failed: Temporary error occurred
```

## Constraints

- Implement a custom `StepError` class that includes information about which step failed.
- Use try/catch blocks in each step function to catch and handle errors.
- In `step2`, simulate a temporary error that occurs 50% of the time.
- Implement retry logic in `runProcess` for temporary errors.
- If all retries fail, the process should fail with an appropriate error message.

## Testing the Script

To test your implementation, you can use the following code:

```javascript
console.log("Starting the process...");
runProcess()
  .then(result => console.log("Process completed successfully:", result))
  .catch(error => console.error("Process failed:", error.message));
console.log("This message should appear before the process completes");
```

Expected console output (success case):
```
Starting the process...
This message should appear before the process completes
(After a few seconds) Process completed successfully: Step 3 complete: Step 2 complete: Step 1 complete
```

Expected console output (failure case after retries):
```
Starting the process...
This message should appear before the process completes
(After several seconds) Process failed: Step 2 failed: Temporary error occurred (3 retries attempted)
```

## Bonus Challenge

Implement a timeout mechanism for each step. If any step takes longer than 2 seconds, it should throw a `TimeoutError`. The `runProcess` function should catch this error and log a message about which step timed out.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding Error Handling in Async/Await

Error handling in async/await functions is done using try/catch blocks, similar to synchronous code. However, there are some important points to remember:

1. Errors in async functions are automatically wrapped in a rejected Promise.
2. You can use a single try/catch block to handle errors from multiple await statements.
3. It's often useful to create custom error types for more informative error handling.

### Step 2: Implementing the Functions

Let's implement our functions with robust error handling:

```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class StepError extends Error {
  constructor(step, message) {
    super(`Step ${step} failed: ${message}`);
    this.name = 'StepError';
    this.step = step;
  }
}

async function step1() {
  try {
    await sleep(1000);
    return "Step 1 complete";
  } catch (error) {
    throw new StepError(1, error.message);
  }
}

async function step2(previousResult) {
  try {
    await sleep(1000);
    if (Math.random() < 0.5) {
      throw new Error("Temporary error occurred");
    }
    return `Step 2 complete: ${previousResult}`;
  } catch (error) {
    throw new StepError(2, error.message);
  }
}

async function step3(previousResult) {
  try {
    await sleep(1000);
    return `Step 3 complete: ${previousResult}`;
  } catch (error) {
    throw new StepError(3, error.message);
  }
}

async function runProcess(retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result1 = await step1();
      const result2 = await step2(result1);
      const result3 = await step3(result2);
      return result3;
    } catch (error) {
      if (error.name === 'StepError' && error.step === 2 && attempt < retries) {
        console.log(`Attempt ${attempt} failed. Retrying...`);
        continue;
      }
      if (attempt === retries) {
        throw new Error(`${error.message} (${retries} retries attempted)`);
      }
    }
  }
}
```

### Step 3: Understanding the Error Handling Implementation

1. We create a custom `StepError` class that includes information about which step failed.
2. Each step function is wrapped in a try/catch block. If an error occurs, it's caught and rethrown as a `StepError`.
3. In `step2`, we simulate a temporary error that occurs 50% of the time.
4. The `runProcess` function implements retry logic:
   - It runs the entire process up to `retries` times.
   - If a `StepError` occurs in step 2, it retries the process.
   - If all retries fail, it throws an error with information about the number of retries attempted.

### Step 4: Testing the Functions

To test the error handling, you can run the `runProcess` function multiple times:

```javascript
async function testProcess() {
  for (let i = 0; i < 5; i++) {
    console.log(`\nTest run ${i + 1}:`);
    try {
      const result = await runProcess();
      console.log("Process completed successfully:", result);
    } catch (error) {
      console.error("Process failed:", error.message);
    }
  }
}

testProcess();
```

This will run the process 5 times, allowing you to see both successful completions and failures after retries.

## Time and Space Complexity

- Time Complexity: O(n), where n is the number of retries in the worst case
- Space Complexity: O(1), as we're not using any data structures that grow with input size

The time complexity can vary based on how often the temporary error occurs and how many retries are needed.

## References

- [MDN Web Docs: try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [JavaScript.info: Error handling with promises](https://javascript.info/promise-error-handling)
- [MDN Web Docs: Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Related Problems

- Implementing a robust API calling function with retries and error handling
- Creating a task queue system with error recovery
- Developing a web scraper that can handle and recover from network errors

## Key Takeaways

- Proper error handling is crucial for writing robust asynchronous code
- Custom error types can provide more informative error messages
- Retry logic can help recover from temporary failures
- Try/catch blocks in async functions work similarly to those in synchronous code
- It's important to consider different types of errors and handle them appropriately

## Notes

While this example uses simple string returns and simulated errors, the same principles apply to more complex scenarios like API calls or database operations. In real-world applications, you might encounter various types of errors (network errors, validation errors, etc.), each of which might require different handling strategies.

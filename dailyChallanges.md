This week(4), we'll dive deep into functions and scope in JavaScript. Functions are one of the fundamental building blocks of JavaScript, allowing us to write reusable, modular code. We'll explore various aspects of functions, including function declarations, expressions, arrow functions, and higher-order functions.
Scope is another crucial concept in JavaScript that determines the visibility and accessibility of variables. We'll look at global scope, function scope, and block scope, as well as closures and the lexical environment.
Throughout the week, we'll progress from basic function concepts to more advanced topics, helping you build a solid understanding of how functions and scope work in JavaScript.



Week 2: Variables and Data Types
Week 3: Control Flow (Conditionals and Loops)
Week 4: Functions and Scope
Week 5: Arrays and Array Methods
Week 6: Objects and Object-Oriented Programming
Week 7: DOM Manipulation and Events
Week 8: Asynchronous JavaScript (Promises, Async/Await)
Week 9: Error Handling and Debugging
Week 10: Advanced Topics and Project Week









Week 7

// Week 8: Asynchronous JavaScript (Promises, Async/Await) Challenges

// Day 1: Introduction to Promises
// Challenge: Create a simple Promise that resolves after a set time
function delayedGreeting(name, delay) {
  // TODO: Return a Promise that resolves with a greeting message after the specified delay
}

// Test the function
delayedGreeting("Alice", 2000).then(message => console.log(message));

// Day 2: Chaining Promises
// Challenge: Create a chain of Promises to simulate a multi-step process
function step1() {
  return new Promise(resolve => setTimeout(() => resolve("Step 1 complete"), 1000));
}

function step2(previousResult) {
  // TODO: Return a Promise that builds on the previous result
}

function step3(previousResult) {
  // TODO: Return a Promise that builds on the previous result
}

// Test the chain
step1()
  .then(step2)
  .then(step3)
  .then(finalResult => console.log(finalResult))
  .catch(error => console.error(error));

// Day 3: Promise.all()
// Challenge: Use Promise.all() to handle multiple asynchronous operations
function fetchUserData(userId) {
  // Simulated API call
  return new Promise(resolve => setTimeout(() => resolve({ id: userId, name: `User ${userId}` }), 1000));
}

function fetchUserPosts(userId) {
  // Simulated API call
  return new Promise(resolve => setTimeout(() => resolve([`Post 1 by User ${userId}`, `Post 2 by User ${userId}`]), 1500));
}

// TODO: Use Promise.all() to fetch both user data and posts simultaneously

// Day 4: Introduction to Async/Await
// Challenge: Rewrite the Promise chain from Day 2 using async/await
async function processSteps() {
  // TODO: Implement the multi-step process using async/await
}

// Test the function
processSteps().then(result => console.log(result)).catch(error => console.error(error));

// Day 5: Error Handling with Async/Await
// Challenge: Implement proper error handling in an async function
async function fetchDataWithErrorHandling(endpoint) {
  // TODO: Implement fetching data with proper error handling using try/catch
}

// Test the function with both valid and invalid endpoints
fetchDataWithErrorHandling('/api/data').then(data => console.log(data)).catch(error => console.error(error));
fetchDataWithErrorHandling('/api/invalid').then(data => console.log(data)).catch(error => console.error(error));

// Day 6: Async Iteration
// Challenge: Use async iteration to process a stream of data
async function* dataStream() {
  for (let i = 1; i <= 5; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield `Data chunk ${i}`;
  }
}

async function processStream() {
  // TODO: Use a for-await-of loop to process the data stream
}

// Test the function
processStream();

// Day 7: Real-world Application
// Challenge: Build a simple async task queue
class AsyncTaskQueue {
  constructor() {
    this.queue = [];
  }

  addTask(task) {
    // TODO: Add a task to the queue
  }

  async processQueue() {
    // TODO: Process all tasks in the queue sequentially
  }
}

// Test the AsyncTaskQueue
const taskQueue = new AsyncTaskQueue();
taskQueue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 1 complete"), 1000)));
taskQueue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 2 complete"), 1500)));
taskQueue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 3 complete"), 800)));

taskQueue.processQueue().then(() => console.log("All tasks completed"));
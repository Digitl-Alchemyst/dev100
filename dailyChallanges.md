


Week 1: Mathematical Operations
Week 2: Variables and Data Types
Week 3: Control Flow (Conditionals and Loops)
Week 4: Functions and Scope
Week 5: Arrays and Array Methods
Week 6: Objects and Object-Oriented Programming
Week 7: DOM Manipulation and Events
Week 8: Asynchronous JavaScript (Promises, Async/Await)
Week 9: Array Operations
Week 10: Object: enteries(), values(), keys() & destructing
Week 11: Regular Expression Methods: test(), match(), replace()
Week 12: Type Casting - Conversion, Coercion, Implicit, Explicit
Week 13: State Management & Data Flow
Week 14: TypeScript Fundamentals
Day 99/100: Final Project: Build a Web Application Library System 

Week #: Error Handling and Debugging
Week #: Advanced Topics and Project Week





























week 9
Day 1: map() and filter()

Introduces transforming and filtering arrays, fundamental operations for data manipulation.


Day 2: reduce()

Focuses on using reduce() to perform complex calculations on an array, showcasing its versatility.


Day 3: find() and sort()

Combines searching for specific elements with sorting, using objects to demonstrate real-world scenarios.


Day 4: slice() and splice()

Covers creating new arrays with slice() and modifying existing arrays with splice(), important for array manipulation.


Day 5: shift(), pop(), and unshift()

Implements queue and stack data structures, reinforcing understanding of array-as-list operations.


Day 6: reverse() and Advanced sort()

Introduces array reversal and custom sorting functions, useful for more complex data arrangements.


Day 7: Combining Multiple Array Operations

Challenges users to chain multiple array methods, simulating real-world data processing tasks.

// Week: Array Operations in JavaScript

// Day 1: map() and filter()
// Challenge: Use map() and filter() to transform an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: Use map() to square each number, then use filter() to keep only the even results
const squaredEvens = numbers
  // Your code here

console.log(squaredEvens);

// Day 2: reduce()
// Challenge: Use reduce() to calculate statistics of an array
const grades = [85, 90, 78, 92, 88, 76];

// TODO: Use reduce() to calculate the sum, average, minimum, and maximum grades
const statistics = grades.reduce((stats, grade) => {
  // Your code here
}, { sum: 0, count: 0, min: Infinity, max: -Infinity });

console.log(statistics);
console.log(`Average: ${statistics.sum / statistics.count}`);

// Day 3: find() and sort()
// Challenge: Use find() to locate an element, then sort() the array
const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

// TODO: Use find() to locate the book published in 1949
const book1949 = // Your code here

console.log(book1949);

// TODO: Use sort() to order the books by publication year (oldest to newest)
books.sort(/* Your comparison function here */);

console.log(books);

// Day 4: slice() and splice()
// Challenge: Use slice() to create a new array, then modify the original with splice()
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

// TODO: Use slice() to create a new array with the 2nd, 3rd, and 4th fruits
const selectedFruits = // Your code here

console.log(selectedFruits);

// TODO: Use splice() to remove "cherry" and add "grape" and "kiwi" in its place
fruits.splice(/* Your code here */);

console.log(fruits);

// Day 5: shift(), pop(), and unshift()
// Challenge: Implement a queue and a stack using array methods
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    // TODO: Add element to the end of the queue
  }

  dequeue() {
    // TODO: Remove and return the first element of the queue
  }
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    // TODO: Add element to the top of the stack
  }

  pop() {
    // TODO: Remove and return the top element of the stack
  }
}

// Test the Queue and Stack
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());  // Should print 1

const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
console.log(stack.pop());  // Should print 'C'

/**
 * This section of the code demonstrates the use of the `reverse()` and `sort()` array methods.
 * 
 * The first part of the code reverses the order of the elements in the `words` array.
 * 
 * The second part of the code sorts the `words` array in a case-insensitive manner.
 */
// Day 6: reverse() and Advanced sort()
// Challenge: Use reverse() and implement a custom sort()
const words = ["apple", "Banana", "cherry", "Date", "Elderberry"];

// TODO: Reverse the array of words
// Your code here

console.log(words);

// TODO: Sort the words case-insensitively
words.sort(/* Your comparison function here */);

console.log(words);

// Day 7: Combining Multiple Array Operations
// Challenge: Use multiple array methods to analyze and transform data
const transactions = [
  { id: 1, type: "debit", amount: 100 },
  { id: 2, type: "credit", amount: 50 },
  { id: 3, type: "debit", amount: 75 },
  { id: 4, type: "credit", amount: 200 },
  { id: 5, type: "debit", amount: 150 }
];

// TODO: 
// 1. Filter out all credit transactions
// 2. Map the remaining transactions to just their amounts
// 3. Sort the amounts in descending order
// 4. Slice the top 2 expenses
// 5. Reduce to calculate the total of the top 2 expenses
const top2Expenses = transactions
  // Your code here

console.log(`Total of top 2 expenses: ${top2Expenses}`);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`



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
# Code Challenge: Parallel Data Fetching with Promise.all()

## Problem Statement

In this challenge, you will create a function that simulates fetching data from multiple sources concurrently using `Promise.all()`. This challenge introduces the concept of handling multiple Promises simultaneously, which is crucial for optimizing asynchronous operations in real-world applications.

`Promise.all()` is a powerful method that takes an iterable of Promises and returns a new Promise. This new Promise resolves when all of the input Promises have resolved, or rejects if any of the input Promises reject. It's particularly useful when you have multiple independent asynchronous operations that you want to execute in parallel.

## Function Signature

```javascript
function fetchAllData(endpoints) {
  // Your code here
}
```

## Input

- `endpoints` (array of strings): An array of API endpoint URLs to fetch data from

## Output

The function should return a Promise that resolves with an array of results from all endpoints.

## Example

### Input:

```javascript
const endpoints = [
  'https://api.example.com/user',
  'https://api.example.com/products',
  'https://api.example.com/orders'
];

fetchAllData(endpoints)
  .then(results => console.log(results))
  .catch(error => console.error(error));
```

### Output:

```javascript
[
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  [{ id: 101, name: 'Widget A' }, { id: 102, name: 'Widget B' }],
  [{ id: 1001, product_id: 101, quantity: 2 }, { id: 1002, product_id: 102, quantity: 1 }]
]
```

## Constraints

- The function should use `Promise.all()` to handle multiple Promises
- Each endpoint fetch should be simulated with a delay between 1000ms and 3000ms
- The function should handle potential errors from any of the fetch operations

## Testing the Script

To test your implementation, you can use the following code:

```javascript
const endpoints = [
  'https://api.example.com/user',
  'https://api.example.com/products',
  'https://api.example.com/orders'
];

console.log('Fetching data...');
fetchAllData(endpoints)
  .then(results => console.log('All data fetched:', results))
  .catch(error => console.error('Error fetching data:', error));

console.log('This message should appear before the data is fetched');
```

Expected console output:
```
Fetching data...
This message should appear before the data is fetched
(After 1-3 seconds) All data fetched: [/* array of fetched data */]
```

## Bonus Challenge

Implement a timeout mechanism. If the entire operation takes longer than 5 seconds, the Promise should reject with a timeout error.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge focuses on using `Promise.all()` to handle multiple asynchronous operations concurrently. In a real-world scenario, this could represent fetching data from multiple API endpoints simultaneously.

Key concepts to understand:

1. `Promise.all()` takes an array of Promises and returns a new Promise
2. The returned Promise resolves when all input Promises resolve
3. If any Promise in the array rejects, the entire `Promise.all()` rejects
4. The resolved value is an array of all the resolved values in the same order as the input array

### Step 2: Implementing the Function

We'll implement the `fetchAllData` function using `Promise.all()`. We'll also create a helper function to simulate fetching data from an endpoint.

```javascript
function simulateFetch(endpoint) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; // Random delay between 1000ms and 3000ms
    setTimeout(() => {
      // Simulate different data for different endpoints
      if (endpoint.includes('user')) {
        resolve({ id: 1, name: 'John Doe', email: 'john@example.com' });
      } else if (endpoint.includes('products')) {
        resolve([{ id: 101, name: 'Widget A' }, { id: 102, name: 'Widget B' }]);
      } else if (endpoint.includes('orders')) {
        resolve([{ id: 1001, product_id: 101, quantity: 2 }, { id: 1002, product_id: 102, quantity: 1 }]);
      } else {
        reject(new Error(`Invalid endpoint: ${endpoint}`));
      }
    }, delay);
  });
}

function fetchAllData(endpoints) {
  const fetchPromises = endpoints.map(endpoint => simulateFetch(endpoint));
  return Promise.all(fetchPromises);
}
```

### Step 3: Testing the Function

To test the function, you can use the following code:

```javascript
const endpoints = [
  'https://api.example.com/user',
  'https://api.example.com/products',
  'https://api.example.com/orders'
];

console.log('Fetching data...');
fetchAllData(endpoints)
  .then(results => console.log('All data fetched:', results))
  .catch(error => console.error('Error fetching data:', error));

console.log('This message should appear before the data is fetched');
```

**Test Cases**

1. Test Case 1: Successful fetch from all endpoints
   - Input: `['https://api.example.com/user', 'https://api.example.com/products', 'https://api.example.com/orders']`
   - Expected Output: An array containing data from all three endpoints

2. Test Case 2: Error handling
   - Input: `['https://api.example.com/user', 'https://api.example.com/invalid', 'https://api.example.com/orders']`
   - Expected Output: An error should be caught and logged

## Time and Space Complexity

- Time Complexity: O(n), where n is the number of endpoints
- Space Complexity: O(n), as we store n Promises and their results

While the time complexity is linear, it's important to note that `Promise.all()` allows these operations to run concurrently, potentially significantly reducing the total execution time compared to sequential execution.

## References

- [MDN Web Docs: Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [JavaScript.info: Promise API](https://javascript.info/promise-api)

## Related Problems

- Implementing a dashboard that needs data from multiple API endpoints
- Parallelizing multiple file read/write operations
- Aggregating data from multiple databases

## Key Takeaways

- `Promise.all()` is used for handling multiple Promises concurrently
- It's ideal for scenarios where multiple independent asynchronous operations need to be performed
- The order of results corresponds to the order of input Promises, not the order of completion
- Error handling is crucial, as any rejected Promise will cause the entire operation to reject

## Notes

In real-world applications, `Promise.all()` is often used with `fetch()` or other API calling mechanisms. While our example uses simulated data, the principle remains the same for actual API calls. It's a powerful tool for optimizing the performance of applications that need to handle multiple asynchronous operations.

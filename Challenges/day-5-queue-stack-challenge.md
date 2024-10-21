# Code Challenge: Implementing Queue and Stack with Array Methods

## Problem Statement

In this challenge, you will implement two fundamental data structures: a Queue and a Stack. You'll use JavaScript array methods `shift()`, `pop()`, and `unshift()` to manipulate these data structures.

- A Queue follows the First-In-First-Out (FIFO) principle. The first element added to the queue will be the first one to be removed.
- A Stack follows the Last-In-First-Out (LIFO) principle. The last element added to the stack will be the first one to be removed.

This challenge will help you understand how to use array methods to implement more complex data structures, which are fundamental concepts in computer science and programming.

## Class Signatures

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    // Your code here
  }

  dequeue() {
    // Your code here
  }
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    // Your code here
  }

  pop() {
    // Your code here
  }
}
```

## Input/Output

For Queue:
- `enqueue(element)`: Adds an element to the end of the queue. Returns nothing.
- `dequeue()`: Removes and returns the first element of the queue. Returns `undefined` if the queue is empty.

For Stack:
- `push(element)`: Adds an element to the top of the stack. Returns nothing.
- `pop()`: Removes and returns the top element of the stack. Returns `undefined` if the stack is empty.

## Example

```javascript
// Queue example
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());  // Should print 1
console.log(queue.dequeue());  // Should print 2

// Stack example
const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
console.log(stack.pop());  // Should print 'C'
console.log(stack.pop());  // Should print 'B'
```

## Constraints

- You must use the array methods `shift()`, `pop()`, and `unshift()` to implement these data structures.
- Do not use any other array methods or data structures.

## Testing the Script

To test your implementation, you can use the following code:

```javascript
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());  // Should print 1
console.log(queue.dequeue());  // Should print 2
console.log(queue.dequeue());  // Should print 3
console.log(queue.dequeue());  // Should print undefined

const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
console.log(stack.pop());  // Should print 'C'
console.log(stack.pop());  // Should print 'B'
console.log(stack.pop());  // Should print 'A'
console.log(stack.pop());  // Should print undefined
```

## Bonus Challenge

Implement additional methods for both Queue and Stack:
- `peek()`: Returns the next element to be removed without actually removing it.
- `isEmpty()`: Returns true if the data structure is empty, false otherwise.
- `size()`: Returns the number of elements in the data structure.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge involves implementing two data structures:

1. Queue: A First-In-First-Out (FIFO) data structure.
2. Stack: A Last-In-First-Out (LIFO) data structure.

Key concepts to understand:

- `shift()`: Removes the first element from an array and returns that removed element.
- `unshift()`: Adds one or more elements to the beginning of an array and returns the new length of the array.
- `pop()`: Removes the last element from an array and returns that element.

### Step 2: Implementing the Classes

#### Implementation of Queue

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }
}
```

In this implementation:
- `enqueue()` uses `push()` to add elements to the end of the array.
- `dequeue()` uses `shift()` to remove and return the first element of the array.

#### Implementation of Stack

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }
}
```

In this implementation:
- `push()` uses the array's `push()` method to add elements to the top of the stack.
- `pop()` uses the array's `pop()` method to remove and return the top element of the stack.

### Step 3: Testing the Classes

You can test the classes with the provided example:

```javascript
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());  // Should print 1
console.log(queue.dequeue());  // Should print 2

const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
console.log(stack.pop());  // Should print 'C'
console.log(stack.pop());  // Should print 'B'
```

**Additional Test Cases**

1. Test Case for Queue (empty queue):
   ```javascript
   const emptyQueue = new Queue();
   console.log(emptyQueue.dequeue());  // Should print undefined
   ```

2. Test Case for Stack (empty stack):
   ```javascript
   const emptyStack = new Stack();
   console.log(emptyStack.pop());  // Should print undefined
   ```

## Time and Space Complexity

For Queue:
- `enqueue()`: 
  - Time Complexity: O(1) (amortized)
  - Space Complexity: O(1)
- `dequeue()`: 
  - Time Complexity: O(n), where n is the number of elements in the queue
  - Space Complexity: O(1)

For Stack:
- `push()`: 
  - Time Complexity: O(1) (amortized)
  - Space Complexity: O(1)
- `pop()`: 
  - Time Complexity: O(1)
  - Space Complexity: O(1)

Note: The `shift()` operation used in `dequeue()` has O(n) time complexity because it needs to shift all remaining elements in the array.

## References

- [MDN Web Docs: Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [MDN Web Docs: Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
- [MDN Web Docs: Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [MDN Web Docs: Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

## Related Problems

- Implement a Deque (double-ended queue) using array methods.
- Create a priority queue where elements with higher priority are dequeued first.

## Key Takeaways

- Queues and Stacks are fundamental data structures used in many algorithms and real-world applications.
- JavaScript arrays and their methods can be used to implement more complex data structures.
- Understanding the differences between FIFO and LIFO principles is crucial for choosing the right data structure for a given problem.
- The choice of underlying data structure (in this case, an array) can affect the performance of operations (e.g., `dequeue()` in the Queue implementation).

## Notes

While these implementations work, they are not the most efficient for large-scale applications. For example, the `dequeue()` operation in the Queue class has a time complexity of O(n) due to the use of `shift()`. In practice, more efficient implementations might use a linked list for the Queue or consider using a circular buffer with two pointers for constant-time enqueue and dequeue operations. For the Stack, the current array-based implementation is generally efficient for most use cases.

# Code Challenge: Event Emitter Implementation

## Problem Statement

Create a custom EventEmitter class that implements the core functionality of Node.js's EventEmitter. The EventEmitter should allow for subscribing to events using the 'on' method and triggering events using the 'emit' method. This implementation will demonstrate the publisher-subscriber pattern, a fundamental concept in event-driven programming.

The Event Emitter pattern is crucial in JavaScript as it forms the backbone of Node.js's event-driven architecture. This challenge helps understand how we can implement custom event handling systems, which is essential for building scalable and loosely coupled applications.

## Function Signature

```javascript
class EventEmitter {
  constructor() {
    // TODO: Initialize storage for event listeners
  }

  on = (eventName, callback) => {
    // TODO: Register an event listener
  }

  emit = (eventName, ...args) => {
    // TODO: Trigger all callbacks associated with the event
  }
}
```

## Input

- For `on` method:
  - `eventName`: String - The name of the event to listen for
  - `callback`: Function - The function to execute when the event occurs

- For `emit` method:
  - `eventName`: String - The name of the event to trigger
  - `...args`: Any - Variable number of arguments to pass to the event listeners

## Output

- `on` method: Returns void
- `emit` method: Returns boolean (true if event had listeners, false otherwise)

## Example

### Input:
```javascript
const emitter = new EventEmitter();

emitter.on('greeting', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('greeting', 'Alice');
```

### Output:
```
Hello, Alice!
```

## Constraints

- Event names must be strings
- Multiple listeners can be registered for the same event
- Listeners are called in the order they were registered
- Maximum number of listeners per event: 10 (configurable)
- The emit method should handle cases where no listeners exist for an event

## Testing the Script

```javascript
const emitter = new EventEmitter();

// Test multiple listeners
emitter.on('test', (data) => console.log('Listener 1:', data));
emitter.on('test', (data) => console.log('Listener 2:', data));

// Test event with multiple arguments
emitter.emit('test', 'Hello World', 123);

// Expected Output:
// Listener 1: Hello World
// Listener 2: Hello World
```

## Bonus Challenge

1. Implement an `off` method to remove event listeners
2. Add `once` method for one-time event listeners
3. Implement error handling for invalid event names or callbacks
4. Add support for wildcard event listeners

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The Event Emitter pattern is a fundamental design pattern in event-driven programming. It allows objects to communicate with each other by sending and receiving events. The pattern consists of:

1. Publishers (emitters) that emit events
2. Subscribers (listeners) that listen for and react to events
3. An event system that manages the relationship between publishers and subscribers

This pattern is used extensively in Node.js and browser-based JavaScript for handling asynchronous operations.

### Step 2: Implementing the Functions

#### Method 1: Using Arrays

1. Initialize a Map to store event listeners:
```javascript
constructor() {
  this.events = new Map();
}
```

2. Implement the 'on' method:
```javascript
on(eventName, callback) {
  if (!this.events.has(eventName)) {
    this.events.set(eventName, []);
  }
  this.events.get(eventName).push(callback);
}
```

3. Implement the 'emit' method:
```javascript
emit(eventName, ...args) {
  if (!this.events.has(eventName)) return false;
  this.events.get(eventName).forEach(callback => callback(...args));
  return true;
}
```

#### Method 2: Using Objects

1. Initialize an object for event listeners:
```javascript
constructor() {
  this.events = {};
}
```

2. Implement event methods using object properties

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1:
   - Input: 
     ```javascript
     emitter.on('greet', (name) => console.log(`Hi ${name}`));
     emitter.emit('greet', 'Alice');
     ```
   - Expected Output: `Hi Alice`

2. Test Case 2:
   - Input:
     ```javascript
     emitter.on('add', (a, b) => console.log(a + b));
     emitter.emit('add', 5, 3);
     ```
   - Expected Output: `8`

## Time and Space Complexity

- Time Complexity: 
  - on(): O(1)
  - emit(): O(n) where n is the number of listeners for the event
- Space Complexity: O(m * n) where m is the number of events and n is the average number of listeners per event

## References

- [Node.js Events Documentation](https://nodejs.org/api/events.html)
- [MDN Documentation on Events](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

## Related Problems

- Custom Promise Implementation
- State Management System
- Message Queue Implementation

## Key Takeaways

- Understanding of the Publisher-Subscriber pattern
- Implementation of event-driven programming concepts
- Practice with JavaScript's class syntax and methods
- Experience with managing complex object relationships

## Notes

- Consider memory management when adding/removing listeners
- Be aware of the "memory leak" potential with event listeners
- Consider implementing a maximum listener warning system
- Think about error handling for edge cases

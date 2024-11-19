# Code Challenge: Observable State Pattern

## Problem Statement

Create an Observable State pattern implementation that allows objects to subscribe to state changes and receive automatic updates when the state is modified. This pattern is crucial for implementing reactive programming concepts and is similar to patterns used in RxJS and Vue's reactivity system.

Understanding the Observable pattern is essential in modern JavaScript development as it forms the foundation of reactive programming, real-time updates, and event-driven architectures. This implementation will demonstrate how to create a system where state changes automatically propagate to all interested observers.

## Function Signature

```javascript
class ObservableState {
  constructor(initialState = {}) {
    // TODO: Initialize observable state and observers
  }

  observe = (key, callback) => {
    // TODO: Add observer for specific state key
  }

  notify = (key) => {
    // TODO: Notify observers of state changes
  }

  get = (key) => {
    // TODO: Get state value
  }

  set = (key, value) => {
    // TODO: Set state value and notify observers
  }

  removeObserver = (key, callback) => {
    // TODO: Remove specific observer
  }
}
```

## Input

- For `constructor`:
  - `initialState`: Object - Initial state values

- For `observe`:
  - `key`: String - State key to observe
  - `callback`: Function - Observer callback function

- For `set`:
  - `key`: String - State key to update
  - `value`: Any - New value for state key

## Output

- `get`: Returns current value for given key
- `set`: Returns void (triggers notifications)
- `observe`: Returns function to remove observer
- `removeObserver`: Returns boolean indicating success

## Example

### Input:
```javascript
const state = new ObservableState({ count: 0 });

state.observe('count', (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`);
});

state.set('count', 1);
```

### Output:
```
Count changed from 0 to 1
```

## Constraints

- State must be immutable
- Observers must be notified in the order they were added
- Must handle circular dependencies
- Maximum of 100 observers per key
- Must handle invalid keys and values gracefully
- Must prevent memory leaks from observer references

## Testing the Script

```javascript
const userState = new ObservableState({
  name: 'John',
  age: 30
});

const unobserve = userState.observe('age', (newValue, oldValue) => {
  console.log(`Age updated: ${oldValue} -> ${newValue}`);
});

userState.set('age', 31);
unobserve();
userState.set('age', 32); // Should not trigger notification

// Expected Output:
// Age updated: 30 -> 31
```

## Bonus Challenge

1. Implement derived state (computed properties)
2. Add support for deep object observation
3. Implement batch updates
4. Add support for observing multiple keys with one observer

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The Observable State pattern consists of three main components:

1. Observable State
   - Holds the actual data
   - Manages state changes
   - Maintains list of observers

2. Observers (Subscribers)
   - Register interest in state changes
   - Receive notifications
   - Process updates

3. Notification System
   - Manages communication between state and observers
   - Handles subscription lifecycle
   - Prevents memory leaks

### Step 2: Implementing the Functions

#### Method 1: Using Maps for Observers

```javascript
class ObservableState {
  constructor(initialState = {}) {
    this._state = { ...initialState };
    this._observers = new Map();
  }

  observe(key, callback) {
    if (!this._observers.has(key)) {
      this._observers.set(key, new Set());
    }
    this._observers.get(key).add(callback);
    
    return () => this.removeObserver(key, callback);
  }

  notify(key) {
    const observers = this._observers.get(key);
    if (observers) {
      const value = this._state[key];
      observers.forEach(callback => callback(value));
    }
  }

  get(key) {
    return this._state[key];
  }

  set(key, value) {
    const oldValue = this._state[key];
    if (oldValue !== value) {
      this._state[key] = value;
      this.notify(key, oldValue);
    }
  }

  removeObserver(key, callback) {
    const observers = this._observers.get(key);
    if (observers) {
      return observers.delete(callback);
    }
    return false;
  }
}
```

#### Method 2: Using Proxy

```javascript
class ObservableState {
  constructor(initialState = {}) {
    this._observers = new Map();
    
    return new Proxy({ ...initialState }, {
      get: (target, key) => target[key],
      
      set: (target, key, value) => {
        const oldValue = target[key];
        target[key] = value;
        this.notify(key, value, oldValue);
        return true;
      }
    });
  }
  // ... rest of implementation
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1:
   - Input: 
     ```javascript
     const state = new ObservableState({ count: 0 });
     state.observe('count', value => console.log(value));
     state.set('count', 1);
     ```
   - Expected Output: `1`

2. Test Case 2:
   - Input:
     ```javascript
     const state = new ObservableState({ user: { name: 'John' } });
     state.observe('user', user => console.log(user.name));
     state.set('user', { name: 'Jane' });
     ```
   - Expected Output: `Jane`

## Time and Space Complexity

- Time Complexity: 
  - get/set: O(1)
  - notify: O(n) where n is number of observers
  - observe/removeObserver: O(1)
- Space Complexity: O(s + o) where s is state size and o is number of observers

## References

- [RxJS Documentation](https://rxjs.dev/guide/overview)
- [Vue 3 Reactivity System](https://v3.vuejs.org/guide/reactivity.html)
- [Observable Pattern](https://refactoring.guru/design-patterns/observer)

## Related Problems

- Event Emitter Implementation
- State Container Implementation
- Pub/Sub Pattern Implementation

## Key Takeaways

- Understanding reactive programming concepts
- Implementation of the Observer pattern
- Managing state subscriptions
- Preventing memory leaks
- Handling immutable state updates

## Notes

- Consider implementing debouncing for frequent updates
- Think about error handling in observers
- Consider implementing middleware for state changes
- Think about state serialization
- Consider implementing state history tracking

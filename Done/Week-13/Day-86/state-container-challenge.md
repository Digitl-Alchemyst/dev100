# Code Challenge: Simple State Container

## Problem Statement

Create a simple state container that manages application state with get/set methods and notifies subscribers of state changes. This implementation will demonstrate fundamental concepts of state management similar to simplified versions of Redux or Vue's reactive system.

State management is a crucial concept in modern JavaScript applications. This challenge helps understand how state containers work under the hood, how to implement reactivity, and how to maintain data consistency across an application.

## Function Signature

```javascript
class StateContainer {
  constructor(initialState = {}) {
    // TODO: Initialize container with initial state and subscribers
  }

  getState = (key) => {
    // TODO: Return current state for given key
  }

  setState = (key, value) => {
    // TODO: Update state and notify subscribers
  }

  subscribe = (callback) => {
    // TODO: Add subscriber and return unsubscribe function
  }
}
```

## Input

- For `constructor`:
  - `initialState`: Object - Initial state values (optional)

- For `setState`:
  - `key`: String - The state property to update
  - `value`: Any - The new value for the state property

- For `getState`:
  - `key`: String - The state property to retrieve

- For `subscribe`:
  - `callback`: Function - Function to call when state changes

## Output

- `getState`: Returns the current value for the specified key
- `setState`: Returns void
- `subscribe`: Returns a function to unsubscribe the callback

## Example

### Input:
```javascript
const store = new StateContainer({ count: 0 });

store.subscribe((state, key) => {
  console.log(`State updated! ${key} is now ${state[key]}`);
});

store.setState('count', 1);
console.log(store.getState('count'));
```

### Output:
```
State updated! count is now 1
1
```

## Constraints

- State must be immutable (don't modify original state object)
- Keys must be strings
- Must notify all subscribers when state changes
- Maximum of 100 subscribers allowed
- Must handle invalid keys and values gracefully

## Testing the Script

```javascript
const store = new StateContainer({ user: { name: 'John' } });

const unsubscribe = store.subscribe((state, key) => {
  console.log(`${key} changed:`, state[key]);
});

store.setState('user', { name: 'Jane' });
unsubscribe();
store.setState('user', { name: 'Bob' }); // No notification

// Expected Output:
// user changed: { name: 'Jane' }
```

## Bonus Challenge

1. Implement state history (undo/redo functionality)
2. Add support for nested state updates
3. Implement state validation
4. Add middleware support for state changes

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

State containers are essential in modern web applications for:
1. Centralizing application state
2. Maintaining data consistency
3. Implementing reactivity
4. Managing data flow

The challenge implements a simplified version of state management patterns used in popular libraries like Redux, MobX, or Vuex.

### Step 2: Implementing the Functions

#### Method 1: Using Object.freeze

```javascript
class StateContainer {
  constructor(initialState = {}) {
    this._state = Object.freeze({...initialState});
    this._subscribers = new Set();
  }

  getState(key) {
    return this._state[key];
  }

  setState(key, value) {
    const newState = {
      ...this._state,
      [key]: value
    };
    this._state = Object.freeze(newState);
    this._notifySubscribers(key);
  }

  subscribe(callback) {
    this._subscribers.add(callback);
    return () => this._subscribers.delete(callback);
  }

  _notifySubscribers(key) {
    this._subscribers.forEach(callback => callback(this._state, key));
  }
}
```

#### Method 2: Using Proxy

```javascript
class StateContainer {
  constructor(initialState = {}) {
    this._subscribers = new Set();
    this._state = new Proxy({...initialState}, {
      set: (target, key, value) => {
        target[key] = value;
        this._notifySubscribers(key);
        return true;
      }
    });
  }
  // ... rest of the implementation
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1:
   - Input:
     ```javascript
     const store = new StateContainer({ count: 0 });
     store.setState('count', 1);
     ```
   - Expected Output: `1`

2. Test Case 2:
   - Input:
     ```javascript
     const store = new StateContainer();
     store.setState('name', 'John');
     store.getState('name');
     ```
   - Expected Output: `"John"`

## Time and Space Complexity

- Time Complexity:
  - getState(): O(1)
  - setState(): O(n) where n is the number of subscribers
  - subscribe(): O(1)
- Space Complexity: O(s + n) where s is the size of state and n is the number of subscribers

## References

- [Redux Documentation](https://redux.js.org/introduction/getting-started)
- [Vue Reactivity System](https://vuejs.org/guide/extras/reactivity-in-depth.html)
- [State Management Pattern](https://patterns.dev/posts/state-management-pattern)

## Related Problems

- Event Emitter Implementation
- Observable Pattern Implementation
- Redux Middleware Implementation

## Key Takeaways

- Understanding immutable state management
- Implementation of the observer pattern
- Handling state updates efficiently
- Managing subscriptions and cleanup

## Notes

- Consider memory management for subscriptions
- Think about state validation and type checking
- Consider implementing debugging capabilities
- Think about handling nested state updates efficiently
- Consider implementing batched updates for performance

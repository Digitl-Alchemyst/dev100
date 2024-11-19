# Code Challenge: Advanced State Store

## Problem Statement

Create a sophisticated state management store that supports middleware, state persistence, and time-travel debugging capabilities. This implementation should provide centralized state management similar to Redux or Vuex, with advanced features for debugging and state manipulation.

A central state store with advanced features is crucial for managing complex application state. This challenge explores implementing a robust state management system that handles middleware processing, state persistence, and debugging capabilities while maintaining predictable state updates.

## Function Signature

```javascript
class StateStore {
  constructor(reducer, initialState = {}) {
    // TODO: Initialize store with reducer and initial state
  }

  dispatch = (action) => {
    // TODO: Process action through middleware chain and update state
  }

  getState = () => {
    // TODO: Return current state
  }

  subscribe = (listener) => {
    // TODO: Add state change listener
  }

  applyMiddleware = (...middlewares) => {
    // TODO: Apply middleware to the store
  }

  addTimeTravel = () => {
    // TODO: Enable time travel debugging
  }

  persistState = (storage = localStorage) => {
    // TODO: Enable state persistence
  }
}

// Middleware signature
const middleware = store => next => action => {
  // TODO: Process action in middleware
};
```

## Input

- For `constructor`:
  - `reducer`: Function - State reducer function
  - `initialState`: Object - Initial state object

- For `dispatch`:
  - `action`: Object - Action object with type and payload

- For `applyMiddleware`:
  - `middlewares`: Array<Function> - Array of middleware functions

## Output

- `dispatch`: Returns action result
- `getState`: Returns current state
- `subscribe`: Returns unsubscribe function
- `applyMiddleware`: Returns enhanced store
- `addTimeTravel`: Returns time travel controls

## Example

### Input:
```javascript
const store = new StateStore(
  (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      default:
        return state;
    }
  },
  { count: 0 }
);

store.applyMiddleware(
  store => next => action => {
    console.log('Before:', store.getState());
    const result = next(action);
    console.log('After:', store.getState());
    return result;
  }
);

store.dispatch({ type: 'INCREMENT' });
```

### Output:
```
Before: { count: 0 }
After: { count: 1 }
```

## Constraints

- Must maintain immutable state updates
- Middleware must be composable
- Must handle circular dependencies in state
- Maximum of 100 history states for time travel
- Must handle serialization for persistence
- Must prevent memory leaks from subscriptions

## Testing the Script

```javascript
const store = new StateStore(
  (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      default:
        return state;
    }
  },
  { todos: [] }
);

store.addTimeTravel();
store.persistState();

store.subscribe(() => console.log('State:', store.getState()));

store.dispatch({
  type: 'ADD_TODO',
  payload: { id: 1, text: 'Learn Advanced State' }
});

// Expected Output:
// State: { todos: [{ id: 1, text: 'Learn Advanced State' }] }
```

## Bonus Challenge

1. Implement state slicing and combining reducers
2. Add support for async actions (thunks)
3. Implement state snapshots and restoration
4. Add support for hot reloading reducers

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Advanced state stores involve several key concepts:

1. Middleware Chain
   - Action preprocessing
   - State change interception
   - Side effect handling

2. Time Travel Debugging
   - State history tracking
   - Undo/redo capabilities
   - State snapshots

3. State Persistence
   - Serialization/deserialization
   - Storage adapters
   - State rehydration

### Step 2: Implementing the Functions

#### Method 1: Basic Implementation with Features

```javascript
class StateStore {
  constructor(reducer, initialState = {}) {
    this._reducer = reducer;
    this._state = initialState;
    this._listeners = new Set();
    this._history = [];
    this._historyIndex = -1;
    this._middleware = [];
  }

  dispatch = (action) => {
    const chain = this._middleware.map(middleware => middleware(this));
    const dispatch = action => {
      this._state = this._reducer(this._state, action);
      if (this._historyIndex >= 0) {
        this._history.push(this._state);
        this._historyIndex++;
      }
      this._listeners.forEach(listener => listener());
      return action;
    };

    return chain.reduceRight(
      (next, middleware) => middleware(next),
      dispatch
    )(action);
  }

  getState = () => this._state;

  subscribe = (listener) => {
    this._listeners.add(listener);
    return () => this._listeners.delete(listener);
  }

  applyMiddleware = (...middlewares) => {
    this._middleware = middlewares;
  }

  addTimeTravel = () => {
    this._history = [this._state];
    this._historyIndex = 0;

    return {
      undo: () => {
        if (this._historyIndex > 0) {
          this._historyIndex--;
          this._state = this._history[this._historyIndex];
          this._listeners.forEach(listener => listener());
        }
      },
      redo: () => {
        if (this._historyIndex < this._history.length - 1) {
          this._historyIndex++;
          this._state = this._history[this._historyIndex];
          this._listeners.forEach(listener => listener());
        }
      }
    };
  }

  persistState = (storage = localStorage) => {
    const STORAGE_KEY = 'app_state';
    
    // Load persisted state
    const savedState = storage.getItem(STORAGE_KEY);
    if (savedState) {
      this._state = JSON.parse(savedState);
    }

    // Subscribe to changes
    this.subscribe(() => {
      storage.setItem(STORAGE_KEY, JSON.stringify(this._state));
    });
  }
}
```

#### Method 2: With Enhanced Middleware Support

```javascript
class StateStore {
  // ... previous implementation

  enhanceDispatch = (middlewares) => {
    if (middlewares.length === 0) return this.dispatch;

    const boundMiddlewares = middlewares.map(middleware =>
      middleware({
        getState: this.getState,
        dispatch: (...args) => this.dispatch(...args)
      })
    );

    return boundMiddlewares.reduceRight(
      (next, middleware) => middleware(next),
      this.dispatch
    );
  }

  // ... rest of implementation
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1:
   - Input:
     ```javascript
     const store = new StateStore(
       (state, action) => {
         if (action.type === 'SET') return action.payload;
         return state;
       },
       { value: 0 }
     );
     store.addTimeTravel();
     store.dispatch({ type: 'SET', payload: { value: 1 } });
     store.dispatch({ type: 'SET', payload: { value: 2 } });
     ```
   - Test undo/redo functionality

2. Test Case 2:
   - Input:
     ```javascript
     const store = new StateStore(reducer, initialState);
     store.persistState();
     store.dispatch(action);
     // Reload page
     ```
   - Verify state persistence

## Time and Space Complexity

- Time Complexity:
  - dispatch: O(m + l) where m is middleware count and l is listener count
  - time travel: O(1) for undo/redo
  - persistence: O(n) where n is state size
- Space Complexity: O(h * s) where h is history size and s is state size

## References

- [Redux Documentation](https://redux.js.org/)
- [Vuex Time Travel](https://vuex.vuejs.org/guide/plugins.html)
- [Middleware Patterns](https://redux.js.org/understanding/thinking-in-redux/middleware)

## Related Problems

- Reducer Pattern Implementation
- Observer Pattern Implementation
- Middleware Chain Implementation

## Key Takeaways

- Understanding middleware composition
- Implementing time travel debugging
- Managing state persistence
- Handling complex state updates
- Implementing advanced debugging features

## Notes

- Consider implementing selective persistence
- Think about compression for large states
- Consider implementing state migrations
- Think about performance optimization
- Consider implementing state validators

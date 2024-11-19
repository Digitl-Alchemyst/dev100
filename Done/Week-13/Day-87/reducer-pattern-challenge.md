# Code Challenge: Reducer Pattern Basics

## Problem Statement

Create a reducer function that manages state transitions through pure functions, similar to Redux's reducer pattern. The reducer should handle different action types to update state in an immutable way, demonstrating how to manage complex state transformations through pure functions.

The reducer pattern is a cornerstone of modern state management in JavaScript applications. This challenge explores how reducers help maintain predictable state changes by processing actions through pure functions, making state updates more maintainable and debuggable.

## Function Signature

```javascript
const initialState = {
  count: 0,
  todos: [],
  user: null
};

const reducer = (state = initialState, action) => {
  // TODO: Handle different action types and return new state
};

const createAction = (type, payload) => {
  // TODO: Create an action object with type and optional payload
};
```

## Input

- For `reducer`:
  - `state`: Object - Current state (with default value)
  - `action`: Object - Contains `type` and optional `payload`
    - `type`: String - Describes the action
    - `payload`: Any - Optional data for the action

- For `createAction`:
  - `type`: String - The action type
  - `payload`: Any - Optional data for the action

## Output

- `reducer`: Returns new state object
- `createAction`: Returns action object `{ type, payload }`

## Example

### Input:
```javascript
const state = { count: 0 };
const action = createAction('INCREMENT', 1);
const newState = reducer(state, action);
```

### Output:
```javascript
{ count: 1 }
```

## Constraints

- State updates must be immutable
- Reducer must be a pure function
- Action types must be strings
- Must handle unknown action types by returning current state
- State must be a plain JavaScript object
- Must handle missing/undefined state by using initial state

## Testing the Script

```javascript
// Initialize store with reducer
const store = {
  state: initialState,
  dispatch: (action) => {
    store.state = reducer(store.state, action);
    console.log('New state:', store.state);
  }
};

// Test different actions
store.dispatch(createAction('ADD_TODO', 'Learn Reducers'));
store.dispatch(createAction('INCREMENT', 5));
store.dispatch(createAction('SET_USER', { name: 'John' }));

// Expected Output:
// New state: { count: 0, todos: ['Learn Reducers'], user: null }
// New state: { count: 5, todos: ['Learn Reducers'], user: null }
// New state: { count: 5, todos: ['Learn Reducers'], user: { name: 'John' } }
```

## Bonus Challenge

1. Implement action creators with type checking
2. Add support for combined reducers
3. Implement middleware for logging state changes
4. Add undo/redo functionality using the reducer pattern

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The reducer pattern is based on several key concepts:

1. Pure Functions
   - Same input always produces same output
   - No side effects
   - Doesn't modify input arguments

2. Immutability
   - Create new state instead of modifying existing
   - Helps with predictability and debugging
   - Enables features like time-travel debugging

3. Action Objects
   - Describe what happened
   - Contain type and optional payload
   - Drive state transitions

### Step 2: Implementing the Functions

#### Method 1: Using Switch Statement

```javascript
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload
      };
    
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    
    default:
      return state;
  }
};

const createAction = (type, payload) => ({
  type,
  payload
});
```

#### Method 2: Using Action Map Object

```javascript
const actionHandlers = {
  INCREMENT: (state, payload) => ({
    ...state,
    count: state.count + payload
  }),
  
  ADD_TODO: (state, payload) => ({
    ...state,
    todos: [...state.todos, payload]
  }),
  
  SET_USER: (state, payload) => ({
    ...state,
    user: payload
  })
};

const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action.payload) : state;
};
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1:
   - Input: 
     ```javascript
     reducer(undefined, { type: 'INCREMENT', payload: 1 })
     ```
   - Expected Output: 
     ```javascript
     { count: 1, todos: [], user: null }
     ```

2. Test Case 2:
   - Input:
     ```javascript
     reducer({ count: 1, todos: [], user: null }, 
             { type: 'ADD_TODO', payload: 'Test Todo' })
     ```
   - Expected Output:
     ```javascript
     { count: 1, todos: ['Test Todo'], user: null }
     ```

## Time and Space Complexity

- Time Complexity: O(1) for state updates
- Space Complexity: O(n) where n is the size of the state object

## References

- [Redux Reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)
- [Immutable Update Patterns](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns)
- [Pure Functions](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)

## Related Problems

- State Container Implementation
- Event Reducer Pattern
- Finite State Machine Implementation

## Key Takeaways

- Understanding pure functions and their benefits
- Learning immutable state update patterns
- Implementing action creators and reducers
- Managing complex state transitions
- Understanding the benefits of predictable state changes

## Notes

- Consider using TypeScript for better type safety
- Think about state normalization for complex data
- Consider implementing selector functions
- Think about optimizing performance for large state objects
- Consider implementing error boundaries in reducers

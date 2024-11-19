# Code Challenge: Proxy State Management

## Problem Statement

Create a state management system using JavaScript's Proxy object to automatically track and react to state changes. The system should intercept state modifications and provide automatic change detection without explicitly calling setter methods, similar to Vue.js's reactivity system.

Proxy-based state management demonstrates modern JavaScript's powerful metaprogramming capabilities. This challenge explores how to create reactive state management systems that can automatically track and respond to state changes, making state management more elegant and less error-prone.

## Function Signature

```javascript
class ProxyStateManager {
  constructor(initialState = {}) {
    // TODO: Initialize proxied state and handlers
  }

  createProxy = (target, path = '') => {
    // TODO: Create and return proxy for nested objects
  }

  watch = (path, callback) => {
    // TODO: Add watcher for specific state path
  }

  getState = () => {
    // TODO: Return current state
  }

  connect = (component, paths) => {
    // TODO: Connect component to state changes
  }
}
```

## Input

- For `constructor`:
  - `initialState`: Object - Initial state object

- For `watch`:
  - `path`: String - Dot notation path to watch (e.g., 'user.name')
  - `callback`: Function - Function to call when value changes

- For `connect`:
  - `component`: Object - Component to receive updates
  - `paths`: Array<String> - State paths to watch

## Output

- `createProxy`: Returns proxied object
- `watch`: Returns unwatch function
- `getState`: Returns current state
- `connect`: Returns disconnect function

## Example

### Input:
```javascript
const store = new ProxyStateManager({
  user: {
    name: 'John',
    preferences: {
      theme: 'dark'
    }
  }
});

store.watch('user.preferences.theme', (newValue, oldValue) => {
  console.log(`Theme changed from ${oldValue} to ${newValue}`);
});

store.getState().user.preferences.theme = 'light';
```

### Output:
```
Theme changed from dark to light
```

## Constraints

- Must handle nested objects and arrays
- Must track all property changes including additions and deletions
- Must prevent infinite loops in circular references
- Maximum depth for nested proxies: 10 levels
- Must handle invalid paths gracefully
- Must prevent memory leaks from watchers

## Testing the Script

```javascript
const state = new ProxyStateManager({
  counter: 0,
  todos: []
});

const unwatchCounter = state.watch('counter', (newVal, oldVal) => {
  console.log(`Counter: ${oldVal} -> ${newVal}`);
});

const proxyState = state.getState();
proxyState.counter++; // Should trigger watcher
proxyState.todos.push('New Todo'); // Should work with arrays

// Expected Output:
// Counter: 0 -> 1
```

## Bonus Challenge

1. Implement path pattern matching (e.g., 'users.*.name')
2. Add transaction support for batch updates
3. Implement time-travel debugging
4. Add support for computed properties

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The Proxy Pattern allows us to:
1. Intercept and customize property operations
2. Create virtual properties
3. Automatically track state changes
4. Implement computed properties

Key Proxy traps we'll use:
- get: Intercept property access
- set: Intercept property assignment
- deleteProperty: Intercept property deletion

### Step 2: Implementing the Functions

#### Method 1: Basic Proxy Implementation

```javascript
class ProxyStateManager {
  constructor(initialState = {}) {
    this._watchers = new Map();
    this._state = this.createProxy(initialState);
  }

  createProxy(target, path = '') {
    return new Proxy(target, {
      get: (target, property) => {
        const value = target[property];
        if (typeof value === 'object' && value !== null) {
          const newPath = path ? `${path}.${property}` : property;
          return this.createProxy(value, newPath);
        }
        return value;
      },

      set: (target, property, value) => {
        const oldValue = target[property];
        target[property] = value;
        const fullPath = path ? `${path}.${property}` : property;
        this._notifyWatchers(fullPath, value, oldValue);
        return true;
      }
    });
  }

  watch(path, callback) {
    if (!this._watchers.has(path)) {
      this._watchers.set(path, new Set());
    }
    this._watchers.get(path).add(callback);
    return () => this._watchers.get(path).delete(callback);
  }

  _notifyWatchers(path, newValue, oldValue) {
    this._watchers.forEach((callbacks, watchPath) => {
      if (path.startsWith(watchPath)) {
        callbacks.forEach(callback => callback(newValue, oldValue));
      }
    });
  }

  getState() {
    return this._state;
  }
}
```

#### Method 2: Advanced Implementation with Path Matching

```javascript
class ProxyStateManager {
  // ... previous implementation

  _matchPath(watchPath, changePath) {
    const watchParts = watchPath.split('.');
    const changeParts = changePath.split('.');
    
    if (watchParts.length !== changeParts.length) return false;
    
    return watchParts.every((part, index) => 
      part === '*' || part === changeParts[index]
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
     const state = new ProxyStateManager({ count: 0 });
     state.watch('count', (n, o) => console.log(`${o}->${n}`));
     state.getState().count = 1;
     ```
   - Expected Output: `0->1`

2. Test Case 2:
   - Input:
     ```javascript
     const state = new ProxyStateManager({
       user: { name: 'John' }
     });
     state.watch('user.name', console.log);
     state.getState().user.name = 'Jane';
     ```
   - Expected Output: `Jane`

## Time and Space Complexity

- Time Complexity: 
  - Property access/modification: O(d) where d is object depth
  - Watcher notification: O(w) where w is number of watchers
- Space Complexity: O(n + w) where n is state size and w is number of watchers

## References

- [MDN Proxy Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [Vue.js Reactivity System](https://v3.vuejs.org/guide/reactivity.html)
- [JavaScript Metaprogramming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)

## Related Problems

- Observable Pattern Implementation
- State Container Implementation
- Deep Object Watching

## Key Takeaways

- Understanding JavaScript Proxies
- Implementing reactive state management
- Handling nested state changes
- Managing watchers efficiently
- Using metaprogramming concepts

## Notes

- Consider WeakMap for observer storage to prevent memory leaks
- Think about handling arrays specially
- Consider implementing state snapshots
- Think about performance optimizations for deep objects
- Consider implementing dependency tracking

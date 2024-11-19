# Code Challenge: Component State System

## Problem Statement

Create a component-based state system that allows for state management within components, state inheritance between parent and child components, and state sharing between sibling components. This implementation should mirror basic concepts found in modern frontend frameworks like React and Vue.

Component-based state management is fundamental to modern web applications. This challenge explores how to implement a system that maintains component hierarchy, manages state flow, and handles updates efficiently while maintaining proper component isolation.

## Function Signature

```javascript
class Component {
  constructor(props = {}) {
    // TODO: Initialize component with props and state
  }

  setState = (newState) => {
    // TODO: Update state and notify children
  }

  getState = () => {
    // TODO: Return current state
  }

  connect = (child) => {
    // TODO: Connect child component
  }

  disconnect = (child) => {
    // TODO: Disconnect child component
  }

  emit = (eventName, data) => {
    // TODO: Emit event to parent
  }

  on = (eventName, handler) => {
    // TODO: Listen to events from children
  }
}
```

## Input

- For `constructor`:
  - `props`: Object - Initial properties passed to component

- For `setState`:
  - `newState`: Object - State updates to apply

- For `connect`:
  - `child`: Component - Child component to connect

- For `emit`/`on`:
  - `eventName`: String - Name of the event
  - `data`/`handler`: Any/Function - Event data or handler

## Output

- `setState`: Returns void
- `getState`: Returns current state object
- `connect`: Returns disconnect function
- `on`: Returns function to remove listener

## Example

### Input:
```javascript
class Counter extends Component {
  constructor() {
    super();
    this.setState({ count: 0 });
  }

  increment() {
    const { count } = this.getState();
    this.setState({ count: count + 1 });
    this.emit('changed', count + 1);
  }
}

const parent = new Component();
const counter = new Counter();

parent.connect(counter);
parent.on('changed', (value) => console.log(`Count: ${value}`));
counter.increment();
```

### Output:
```
Count: 1
```

## Constraints

- Components must maintain isolated state
- State updates must be immutable
- Must prevent circular parent-child relationships
- Maximum component nesting level: 10
- Must handle component disconnection and cleanup
- Must prevent memory leaks from event listeners

## Testing the Script

```javascript
class TodoList extends Component {
  constructor() {
    super();
    this.setState({
      todos: []
    });
  }

  addTodo(text) {
    const { todos } = this.getState();
    this.setState({
      todos: [...todos, { id: Date.now(), text }]
    });
  }
}

const app = new Component();
const todoList = new TodoList();

app.connect(todoList);
app.on('todo-added', (todo) => console.log('New todo:', todo));

todoList.addTodo('Learn Component State');

// Expected Output:
// New todo: Learn Component State
```

## Bonus Challenge

1. Implement prop drilling prevention
2. Add computed state properties
3. Implement state inheritance overrides
4. Add middleware support for state updates

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Component-based state management involves several key concepts:

1. Component Hierarchy
   - Parent-child relationships
   - State inheritance
   - Event bubbling

2. State Isolation
   - Component encapsulation
   - Prop passing
   - Event communication

3. Update Propagation
   - State changes
   - Child notifications
   - Parent updates

### Step 2: Implementing the Functions

#### Method 1: Basic Implementation

```javascript
class Component {
  constructor(props = {}) {
    this._state = {};
    this._props = props;
    this._children = new Set();
    this._parent = null;
    this._eventHandlers = new Map();
  }

  setState(newState) {
    this._state = {
      ...this._state,
      ...newState
    };
    this._notifyChildren();
  }

  getState() {
    return this._state;
  }

  connect(child) {
    if (child._parent) {
      throw new Error('Component already has a parent');
    }
    
    this._children.add(child);
    child._parent = this;
    
    return () => this.disconnect(child);
  }

  disconnect(child) {
    if (this._children.has(child)) {
      this._children.delete(child);
      child._parent = null;
      return true;
    }
    return false;
  }

  emit(eventName, data) {
    if (this._parent) {
      const handlers = this._parent._eventHandlers.get(eventName) || [];
      handlers.forEach(handler => handler(data));
    }
  }

  on(eventName, handler) {
    if (!this._eventHandlers.has(eventName)) {
      this._eventHandlers.set(eventName, new Set());
    }
    this._eventHandlers.get(eventName).add(handler);
    
    return () => this._eventHandlers.get(eventName).delete(handler);
  }

  _notifyChildren() {
    this._children.forEach(child => {
      child.onParentUpdate(this._state);
    });
  }

  onParentUpdate(parentState) {
    // Override in subclass if needed
  }
}
```

#### Method 2: With State Inheritance

```javascript
class Component {
  // ... previous implementation

  getState() {
    return {
      ...this._getInheritedState(),
      ...this._state
    };
  }

  _getInheritedState() {
    return this._parent ? this._parent.getState() : {};
  }

  // ... rest of implementation
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1:
   - Input:
     ```javascript
     const parent = new Component();
     const child = new Component();
     parent.setState({ theme: 'dark' });
     parent.connect(child);
     console.log(child.getState().theme);
     ```
   - Expected Output: `'dark'`

2. Test Case 2:
   - Input:
     ```javascript
     const parent = new Component();
     const child = new Component();
     parent.connect(child);
     child.emit('update', { data: 'test' });
     ```
   - Expected Output: Event received by parent

## Time and Space Complexity

- Time Complexity:
  - setState: O(n) where n is number of children
  - getState: O(d) where d is component depth
  - connect/disconnect: O(1)
- Space Complexity: O(s + c + e) where s is state size, c is number of children, e is number of event handlers

## References

- [React Component State](https://reactjs.org/docs/state-and-lifecycle.html)
- [Vue Component System](https://vuejs.org/v2/guide/components.html)
- [Component-Based Architecture](https://dev.to/nuculabs/component-based-architecture)

## Related Problems

- State Container Implementation
- Event Emitter Pattern
- Observable Pattern Implementation

## Key Takeaways

- Understanding component hierarchies
- Implementing state isolation
- Managing parent-child relationships
- Handling event propagation
- Implementing state inheritance

## Notes

- Consider implementing state validation
- Think about optimization for deep component trees
- Consider implementing state preloading
- Think about handling async state updates
- Consider implementing component lifecycle methods

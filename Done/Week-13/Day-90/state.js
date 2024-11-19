class Component {
  constructor(props = {}) {
    this._props = props;
    this._state = {};
    this._children = new Set();
    this._parent = null;
    this._eventHandlers = new Map();
  }

  setState(newState) {
    this._state = { ...this._state, ...newState };
    this._notifyChildren();
  }

  getState() {
    return this._state;
  }

  connect(child) {
    if (child._parent) {
      throw new Error("Child already has a parent");
    }
    this._children.add(child);
    child._parent = this;

    return () => this.disconnect(child);
  }

  disconnect(child) {
    if (!child._parent || child._parent !== this) {
      throw new Error("Child is not connected to this parent");
    }
    this._children.delete(child);
    child._parent = null;
    return true;
  }

  emit(eventName, data) {
    if (this._parent) {
      const handlers = this._parent._eventHandlers.get(eventName) || new Set();
      handlers.forEach((handler) => handler(data));
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
    this._children.forEach((child) => {
      if (typeof child.onParentUpdate === "function") {
        child.onParentUpdate(this._state);
      }
    });
  }
}

class TodoList extends Component {
  constructor() {
    super();
    this.setState({
      todos: [],
    });
  }

  addTodo(text) {
    const { todos } = this.getState();
    const newTodo = { id: Date.now(), text };
    this.setState({
      todos: [...todos, newTodo],
    });
    this.emit("todo-added", newTodo);
  }
}


const app = new Component();
const todoList = new TodoList();

app.connect(todoList);
app.on("todo-added", (todo) => console.log("New todo:", todo));

todoList.addTodo("Learn Component State");

// Expected Output:
// New todo: { id: 1732038832450, text: 'Learn Component State' }

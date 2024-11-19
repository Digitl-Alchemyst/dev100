class ProxyStateManager {
  constructor(initialState = {}) {
    // TODO: Initialize proxied state and handlers
    this._watchers = new Map();
    this._state = this.createProxy(initialState);
  }

  createProxy = (target, path = "") => {
    // TODO: Create and return proxy for nested objects
    return new Proxy(target, {
      get: (target, property) => {
        const value = target[property];
        if (typeof value === "object" && value !== null) {
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
      },
    });
  };

  watch = (path, callback) => {
    // TODO: Add watcher for specific state path
    if (!this._watchers.has(path)) {
      this._watchers.set(path, new Set());
    }
    this._watchers.get(path).add(callback);
    return () => this._watchers.get(path).delete(callback);
  };

  getState = () => {
    // TODO: Return current state
    return this._state;
  };

  _notifyWatchers(path, newValue, oldValue) {
    this._watchers.forEach((callbacks, watchPath) => {
      if (path.startsWith(watchPath)) {
        callbacks.forEach((callback) => callback(newValue, oldValue));
      }
    });
  }
}

const state = new ProxyStateManager({
  counter: 0,
  todos: [],
});

const unwatchCounter = state.watch("counter", (newVal, oldVal) => {
  console.log(`Counter: ${oldVal} -> ${newVal}`);
});

const proxyState = state.getState();
proxyState.counter++; // Should trigger watcher
proxyState.todos.push("New Todo"); // Should work with arrays

// Expected Output:
// Counter: 0 -> 1

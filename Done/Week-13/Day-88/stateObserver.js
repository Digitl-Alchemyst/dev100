class ObservableState {
  constructor(initialState = {}) {
    // TODO: Initialize observable state and observers
    this._state = new Proxy(initialState, {
      set: (target, key, value) => {
        const oldValue = target[key];
        target[key] = value;
        this.notify(key, value, oldValue);
        return true;
      },
    });
    this._observers = new Map();
  }

  observe = (key, callback) => {
    // TODO: Add observer for specific state key
    if (!this._observers.has(key)) {
      this._observers.set(key, new Set());
    }
    this._observers.get(key).add(callback);
    return () => {
      this._observers.get(key).delete(callback);
    };
  };

  notify = (key, newValue, oldValue) => {
    // TODO: Notify observers of state changes
    const observers = this._observers.get(key);
    if (observers) {
      for (const observer of observers) {
        observer(newValue, oldValue);
      }
    }
  };

  get = (key) => {
    // TODO: Get state value
    return this._state[key];
  };

  set = (key, value) => {
    // TODO: Set state value and notify observers
    this._state[key] = value;
    return this._state[key];
  };

  removeObserver = (key, callback) => {
    // TODO: Remove specific observer
    const observers = this._observers.get(key);
    if (observers) {
      return observers.delete(callback);
    }
    return false;
  };
}

const userState = new ObservableState({
  name: "John",
  age: 30,
});

const unobserve = userState.observe("age", (newValue, oldValue) => {
  console.log(`Age updated: ${oldValue} -> ${newValue}`);
});

userState.set("age", 31);
unobserve();
userState.set("age", 32); // Should not trigger notification

// Expected Output:
// Age updated: 30 -> 31

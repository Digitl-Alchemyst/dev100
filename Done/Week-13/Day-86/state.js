class StateContainer {
  constructor(initialState = {}) {
    // TODO: Initialize container with initial state and subscribers
    this._state = Object.freeze({ ...initialState });
    this._subscribers = new Set();
  }

  getState = (key) => {
    // TODO: Return current state for given key
    return this._state[key];
  };

  setState = (key, value) => {
    // TODO: Update state and notify subscribers
    const newState = {
      ...this._state,
      [key]: value,
    };
    this._state = Object.freeze(newState);
    this._notifySubs(key);
  };

  subscribe = (callback) => {
    // TODO: Add subscriber and return unsubscribe function
    this._subscribers.add(callback);
    return () => this._subscribers.delete(callback);
  };

  _notifySubs = (key) => {
    this._subscribers.forEach((callback) => callback(this._state, key));
  };
}

const store = new StateContainer({ count: 0 });

store.subscribe((state, key) => {
  console.log(`State updated! ${key} is now ${state[key]}`);
});

store.setState("count", 1);
console.log(store.getState("count"));

// Expected Output: count: 1

const store2 = new StateContainer({ user: { name: "John" } });

const unsubscribe = store2.subscribe((state, key) => {
  console.log(`${key} changed:`, state[key]);
});

store2.setState("user", { name: "Jane" });
unsubscribe();
store2.setState("user", { name: "Bob" }); // No notification

// Expected Output:
// user changed: { name: 'Jane' }

class MemoryStorage {
  constructor() {
    this.store = new Map();
  }

  getItem(key) {
    return this.store.get(key) || null;
  }

  setItem(key, value) {
    this.store.set(key, value);
  }
}

class StateStore {
  constructor(reducer, initialState = {}) {
    this._reducer = reducer;
    this._state = initialState;
    this._listeners = new Set();
    this._history = [];
    this._historyIndex = -1;
    this._middleware = [];
  }

  dispatch(action) {
    const middlewareAPI = {
      getState: this.getState.bind(this),
      dispatch: this.dispatch.bind(this),
    };

    const chain = this._middleware.map((middleware) =>
      middleware(middlewareAPI)
    );

    const baseDispatch = (action) => {
      this._state = this._reducer(this._state, action);

      if (this._historyIndex !== -1) {
        this._history = this._history.slice(0, this._historyIndex + 1);
        this._history.push({ ...this._state });
        this._historyIndex = this._history.length - 1;
      }

      this._listeners.forEach((listener) => listener());
      return action;
    };

    return chain.length
      ? chain.reduceRight(
          (next, middleware) => middleware(next),
          baseDispatch
        )(action)
      : baseDispatch(action);
  }

  getState() {
    return this._state;
  }

  subscribe(listener) {
    this._listeners.add(listener);
    return () => this._listeners.delete(listener);
  }

  applyMiddleware(...middlewares) {
    if (this._middleware.length > 0) {
      throw new Error("Middleware can only be applied once");
    }
    this._middleware = middlewares;
  }

  addTimeTravel() {
    this._history = [{ ...this._state }];
    this._historyIndex = 0;

    return {
      undo: () => {
        if (this._historyIndex > 0) {
          this._historyIndex--;
          this._state = { ...this._history[this._historyIndex] };
          this._listeners.forEach((listener) => listener());
        }
      },
      redo: () => {
        if (this._historyIndex < this._history.length - 1) {
          this._historyIndex++;
          this._state = { ...this._history[this._historyIndex] };
          this._listeners.forEach((listener) => listener());
        }
      },
      getHistory: () => this._history,
      getCurrentIndex: () => this._historyIndex,
    };
  }

  persistState(storage = new MemoryStorage()) {
    const STORAGE_KEY = "app_state";

    try {
      const savedState = storage.getItem(STORAGE_KEY);
      if (savedState) {
        this._state = JSON.parse(savedState);
        if (this._historyIndex !== -1) {
          this._history = [{ ...this._state }];
          this._historyIndex = 0;
        }
      }

      this.subscribe(() => {
        try {
          storage.setItem(STORAGE_KEY, JSON.stringify(this._state));
        } catch (error) {
          console.error("Failed to persist state:", error);
        }
      });
    } catch (error) {
      console.error("Failed to load persisted state:", error);
    }
  }
}

const loggingMiddleware = (store) => (next) => (action) => {
  console.log("Before:", store.getState());
  const result = next(action);
  console.log("After:", store.getState());
  return result;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

const store = new StateStore(reducer, { todos: [] });
store.applyMiddleware(loggingMiddleware);
const timeTravel = store.addTimeTravel();
store.persistState();

store.subscribe(() => console.log("State:", store.getState()));

store.dispatch({
  type: "ADD_TODO",
  payload: { id: 1, text: "Learn Advanced State" },
});

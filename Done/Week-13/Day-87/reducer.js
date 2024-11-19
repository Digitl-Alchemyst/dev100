const initialState = {
  count: 0,
  todos: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  // TODO: Handle different action types and return new state
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const createAction = (type, payload) => {
  // TODO: Create an action object with type and optional payload
  return { type, payload };
};


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
store.dispatch(createAction('DECREMENT', 2));
store.dispatch(createAction('SET_USER', { name: 'John' }));

// Expected Output:
// New state: { count: 0, todos: ['Learn Reducers'], user: null }
// New state: { count: 5, todos: ['Learn Reducers'], user: null }
// New state: { count: 5, todos: ['Learn Reducers'], user: { name: 'John' } }
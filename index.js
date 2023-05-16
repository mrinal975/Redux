const { createStore } = require("redux");
//constant
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";

//initial state
const initialTodoState = {
  todos: [],
  isLoading: false,
  error: false,
};

//actions
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

const getTodosSuccess = (value) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: value,
  };
};

const getTodosFailed = (value) => {
  return {
    type: GET_TODOS_FAILED,
    payload: value,
  };
};

//reducers
const todosReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        todos: action.payload,
      };
    }
    case GET_TODOS_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: true,
        todos: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

//store
const store = createStore(todosReducer);

store.subscribe(() => {
  console.log(state.getState());
});

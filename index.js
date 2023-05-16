const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

//api url https://jsonplaceholder.typicode.com/todos
// middleware- redux-thunk
//axios api

//constant
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

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

//async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const title = res.data.map((todo) => {
          return todo.title;
        });
        dispatch(getTodosSuccess(title));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(getTodosFailed(error.message));
      });
  };
};

//store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());

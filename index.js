const { createStore } = require("redux");
//Define const
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENTBYVALUE = "INCREMENTBYVALUE";
const ADDNEWUSER = "ADDNEWUSER";

//state
const initialCounterState = {
  users: ["Mrinal"],
  counter: 0,
};

//Action

const addNewUser = (value) => {
  return {
    type: ADDNEWUSER,
    payload: value,
  };
};

//Reducer
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case ADDNEWUSER:
      return {
        users: [...state.users, action.payload],
        counter: state.counter + 1,
      };
    default:
      state;
  }
};

const state = createStore(counterReducer);

state.subscribe(() => {
  console.log(state.getState());
});

state.dispatch(addNewUser("Mallik"));
state.dispatch(addNewUser("Atrika"));

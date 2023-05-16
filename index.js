const { createStore } = require("redux");

//Const define
const GETPRODUCTS = "GETPRODUCTS";
const ADDPRODUCTS = "ADDPRODUCTS";

//initial state define
const productsInitialState = {
  products: ["Pen", "Mobile"],
  numberOfProduct: 2,
};

//products action
const getProducts = () => {
  return {
    type: GETPRODUCTS,
  };
};

const addProduct = (value) => {
  return {
    type: ADDPRODUCTS,
    payload: value,
  };
};

//Product Reducer
const productReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case GETPRODUCTS:
      return {
        ...state,
      };
    case ADDPRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };
    default:
      return state;
  }
};

const state = createStore(productReducer);

state.subscribe(() => {
  console.log(state.getState());
});

state.dispatch(getProducts());
state.dispatch(addProduct("LP"));

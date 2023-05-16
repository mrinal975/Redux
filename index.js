const { createStore, combineReducers, applyMiddleware } = require("redux");
//Logger with default options
const { logger } = require("redux-logger");

//Product Const define
const GETPRODUCTS = "GETPRODUCTS";
const ADDPRODUCTS = "ADDPRODUCTS";

//Cart const define
const GETCART = "GETCARD";
const ADDCART = "ADDCARD";

//Product initial state define
const productsInitialState = {
  products: ["Pen", "Mobile"],
  numberOfProduct: 2,
};

//Cart initial state
const cartInitialState = {
  cartItem: ["Mobile"],
  cartProduct: 1,
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

//card Action

const getCardItems = () => {
  return {
    type: GETCART,
  };
};

const addCart = (value) => {
  return {
    type: ADDCART,
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

//cart reducer
const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case GETCART: {
      return {
        ...state,
      };
    }
    case ADDCART: {
      return {
        cartItem: [...state.cartItem, action.payload],
        cartProduct: state.cartProduct + 1,
      };
    }
    default: {
      return state;
    }
  }
};

const combineReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const state = createStore(combineReducer, applyMiddleware(logger));

state.subscribe(() => {
  console.log(state.getState());
});

state.dispatch(getProducts());
state.dispatch(addProduct("LP"));

state.dispatch(addCart("Toy"));

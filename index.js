//Const define

const GETPRODUCTS = "GETPRODUCTS";
const ADDPRODUCTS = "ADDPRODUCTS";

//initial state define
const prductsInitialState = {
  products: ["Pen", "Mobile"],
  numberOfProduct: 2,
};

//action for products
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

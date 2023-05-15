const {createStore} = require('redux');

//define constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";



//state
const initialCounterState = {
    count:0
};

const initialUsersState = {
    users:[{name:"Mrinal Mallik"}]
};

//action - Object - type, payload

const incrementCounter =()=>{
    return{
        type:INCREMENT,
    };
};

const decrementCounter = ()=>{
    return {
        type:DECREMENT,
    };
};

const addUser = ()=>{
    return {
        type: ADD_USER,
        payload:{name: "Mrinal"}
    };
};


//create reducer for counter
const counterReducer = (state=initialCounterState, action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count:state.count+1
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

//create store
const state = createStore(counterReducer);

state.subscribe(()=>{
    console.log(state.getState());
})

state.dispatch(incrementCounter())

state.dispatch(incrementCounter())

state.dispatch(incrementCounter())


state.dispatch(decrementCounter())
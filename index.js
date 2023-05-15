const {createStore} = require('redux');
//Define const
const INCREMENT ='INCREMENT';
const DECREMENT ='DECREMENT';
const RESET ='RESET';

//state
const initialCounterState = {
    counter : 0
};

//Action 
const incrementCounter = ()=>{
    return {
        type: INCREMENT
    };
};

const decrementCounter = ()=>{
    return {
        type: DECREMENT
    };
};

const resetCounter = ()=>{
    return {
        type: RESET
    };
};


//Reducer
const counterReducer = (state=initialCounterState, action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                counter : state.counter +1
                
            }
        case DECREMENT:
            return {
                ...state,
                counter : state.counter -1
            }
        case RESET:
            return{
                ...state,
                counter: 0
            }
        default:
            state
    }
}

const state = createStore(counterReducer);

state.subscribe(()=>{
    console.log(state.getState());
})

state.dispatch(incrementCounter());
state.dispatch(incrementCounter());
state.dispatch(incrementCounter());

state.dispatch(decrementCounter());

state.dispatch(resetCounter())


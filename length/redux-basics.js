const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    userName: "",
    userInput: "",
    loading: false,
}

//Reducer 

const rootReducer = (state = initialState, action) => {
    if(action.type === 'USER_NAME') {
        return {
            ...state,
            userName: state.userName + action.value
        }
    }
    if(action.type === 'USER_INPUT') {
        return {
            ...state,
            userInput: state.userInput + action.value
        }
    }
    return state;
};

//Store

const store = createStore(rootReducer);
console.log(store.getState());

//Subscription

store.subscribe(() => {
    console.log('[Subscribtion]', store.getState());
});

// Dispatching Action 

store.dispatch({type: 'USER_NAME', value: ''});
store.dispatch({type: 'USER_INPUT', value: ''});
console.log(store.getState());
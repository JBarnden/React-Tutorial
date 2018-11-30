import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // don't even have to specify it as it's index.js

const initialState = {};

// Thunk middleware allows us to call the dispatch function directly, so we can make
// async requests
const middleware = [thunk];

// Function takes 3 parameters, the root reducer (containing all other reducers e.g. post reducer, auth reducer etc.),
// the initial state, and anny enhancers (including applyMiddleware)
const store = createStore(
    rootReducer,
    initialState,
    // Use compose for multiple enhancers
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )  
);

export default store;
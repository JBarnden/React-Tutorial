// This is our root reducer where we combine all of our other reducers

import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    // Posts component of the reducer
    posts: postReducer,
})

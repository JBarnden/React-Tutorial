// This will evaluate any actions that are committed
// e.g. fetching posts, or creating new posts.
//
// For each action we create types, which are basically just constants.

import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    // Represent the post that come in from our action,
    // the action is where we'll put the fetch request
    items: [],
    // item will represent the single post that we add, when we get the response bac
    // it will go in there
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
            console.log('reducer');
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            // JSON placeholder (our testing API here) doesn't actually add to the database,
            // so we can't just refetch items.  So here we'll return just the new item and push that
            // on to the post property inside the post component
            return {
                ...state,
                // Payload here is just the single post
                item: action.payload
            };
        default:
            return state;
    }
}
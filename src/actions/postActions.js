import { FETCH_POSTS, NEW_POST } from './types';

// Each action creator is going to be a function that we need to export
// dispatching fetch posts to reducer
export const fetchPosts = () => dispatch => {
    console.log('fetching');

    // Dispatch is like a resolver in a promise, when we want to send data we call
    // dispatch.  This is where we create our fetch
        // Fetch returns promise
        fetch('https://jsonplaceholder.typicode.com/posts')
        // result needs mapping to json
        .then(res => res.json())
        // this will give us our data, we want this data in the
        // redux state.
        //.then(data => console.log(data));
        // Directly modify state content.

        // We can no longer directly modify state data now, we want to dispatch
        // the data to the reducer.
        //.then(data => this.setState({ posts: data }));
        .then(posts => 
        dispatch({
            type: FETCH_POSTS,
            // data coming in to the reducer (the payload)
            payload: posts
        })
    );
    
}

// This takes in parameter "postData" because we're submitting data
// through this action.
export const createPost = (postData) => dispatch => {
    console.log("posting");
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            // single post payload
            payload: post 
        }));
};
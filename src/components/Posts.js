import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'; // Connects our components to redux store that was
// provided by provider component.
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    // We don't need a constructor with component state when using redux,
    // because we're now using the application state (the store).
    // constructor(props){
    //     super(props);
    //     // Component state has a posts item (empty array by default)
    //     this.state = {
    //         posts: []
    //     }
    // }
    componentWillMount(){
        this.props.fetchPosts();        
    }

    // When component receives a new property from the state, this will run.
    componentWillReceiveProps(nextProps){
        if (nextProps.newPost){
            // Using unshift to add to beginning instead of push to add to end
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        // We're mapping props data to the post items variable
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                { postItems }
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
}

// Mapping state data to props
const mapStateToProps = state => ({
    // "posts" corresponds to the posts in our root reducer (index.js)
    posts: state.posts.items,
    // state.posts is our reducer, then we want item (the piece of state we want in the prop)
    newPost: state.posts.item
});

// To connect component to redux store, we need to export default connect.
export default connect(mapStateToProps, { fetchPosts })(Posts);
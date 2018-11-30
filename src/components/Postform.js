import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props){
        super(props);
        // Component state has a posts item (empty array by default)
        this.state = {
            title: '',
            body: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // Method bound to onChange input and text area to update values in the state,
    // uses the target name (name = "title") and value to modify the corresponding state attribute.
    onChange(event){
        this.setState({ [event.target.name]: event.target.value })
    }

    // Function sends a post request
    // Returns title, body and new id of the post
    onSubmit(event){
        event.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body,
        }
        // Call action
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input type="text" name="title" onChange={this.onChange}
                        value={this.state.title}/>
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" onChange={this.onChange}
                        value={this.state.body} />
                    </div>
                    <br />
                    <button type="sumbit">Submit</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect (null, { createPost })(PostForm);
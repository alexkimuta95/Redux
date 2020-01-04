import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

export class Postform extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({ [e.target.name] : e.target.value })
    }
    onSubmit(e){
        e.preventDefault();

        const post ={
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post);
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group">
                        <label>Title:</label><br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} className="form-control" />

                    </div>
                    <div className="form-group">
                        <label>Body:</label><br />
                        <textarea name="body" onChange={this.onChange} value={this.state.body} className="form-control" /> <br />

                        
                    </div>
                    <button type="submit" value="Submit" className="btn btn-info">submit</button>
                </form>
            </div>
        )
    }
}
Postform.propTypes ={
    createPost:PropTypes.func.isRequired
}

export default connect (null, {createPost}) (Postform)

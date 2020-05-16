import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions'

// import axios from 'axios'
class Postform extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:''
        };
        this.onChange  = this.onChange.bind(this);
        this.onSubmit  = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const post={
            title:this.state.title,
            body:this.state.body,
        };
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // NOTE:
        // NOTE: this code works just that the jsonplaceholder server might be down.
        // NOTE:
        // fetch('https://jsonplaceholder.typicode.com/posts',
        // { method:'POST',
        //   headers:{ 
        //       "Access-Control-Allow-Origin": "*",
        //       'content-type':'application/json'
        //   },
        //   body:JSON.stringify(post)
        // })
        // .then(res=>res.json())
        // .then(data=>console.log(data));
        // axios.post('https://jsonplaceholder.typicode.com/posts',{
        //     title:this.state.title,
        //     body:this.state.body,
        // }).then(res=>console.log(res))

        // Implementing the above requests with REDUX below:
        this.props.createPost(post);
    }
    render() {
        return (
            <div>
                    <h1>Add Posts</h1>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label>Title:</label><br/>
                            <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                        </div>
                        <div>
                            <label>Body:</label><br/>
                            <textarea name="body" onChange={this.onChange} value={this.state.body}/>
                        </div><br/>
                        <button type="submit">Submit</button> 
                    </form>
                    <br/>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null,{createPost})(Postform);
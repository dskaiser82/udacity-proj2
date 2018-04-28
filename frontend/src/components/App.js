import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as API from '../api/Api';

import { addPost } from '../actions'
import '../css/style.css';

class ReadApp extends Component {

  state = {
    post: null
  }

  componentDidMount () {
    const { store } = this.props

    // store.subscribe(() => {
    //   this.setState(() => ({
    //     //calendar is from reducers
    //     post: store.getState()
    //   }))
    // })
  }


    // componentDidMount(){
    //   API.getPosts().then((allPosts) => {
    //     this.setState({ allPosts })
    //     console.log(this.state)
    //  })
    // }


  render() {
    return (
      <div>
       <input
         type='text'
         ref={(input) => this.input = input}
         placeholder="New Post Here"
       />
       {/* <button onClick={this.submitFood}>Submit</button> */}

       <pre>
         Post Comment: {this.state.post && this.state.post.comment}
       </pre>
     </div>
   )

  }
}

export default ReadApp;

import React, { Component } from 'react'
import {addComment, setComments} from '../actions/comments';
import {addPost, setPosts} from '../actions/posts';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


import Posts from './Posts.js'

class App extends Component {
  state = {}

  componentDidMount () {
    const { store } = this.props

    //This iss a store change listener to update the store
    store.subscribe(() => {
      this.setState(() => (
        store.getState()
      ))
    })
  }
  //This Uses a the reducer
  //and updates the store with this function
  //It an Onlick see html below
  submitComment = (text, author) => {
    this.props.store.dispatch(addComment(this.input.value, "bucko"))

    this.input.value = '' //clear input

    
  }

  submitPost = (text, author) => {
      console.log("Fuggs")
      this.props.store.dispatch(addPost("Post Tewxt Pls", "bucko"))
  }

  render() {
    return (
      <div>

        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Comment"
        />
        <button onClick={this.submitComment}>Submit</button>
        <button >KILL FOOD</button>

        <p>
          Comment: {this.state.comments && this.state.comments[0].text}
        </p>
        {/* BELOW */}



        <Route path="/posts" render={({ history }) => (
            <Posts
               submitPost={this.submitPost}
            />
          )}/>

          <Link
              to="/posts"
              className="open-posts"
            >+
          </Link>

      </div>
    )
  }
}

export default App

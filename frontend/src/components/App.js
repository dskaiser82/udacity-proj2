import React, { Component } from 'react'
import {addComment, setComments} from '../actions/comments';
import {addPost, setPosts} from '../actions/posts';

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

    if(this.state.comments)
    console.log(this.state.comments[0].text)
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


        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Post"
        />
        <button onClick={this.submitPost}>Submit</button>
        <button >KILL FOOD</button>

        <p>
          Post:
        </p>


      </div>
    )
  }
}

export default App

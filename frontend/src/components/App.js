import React, { Component } from 'react'
import {addComment, setComments} from '../actions/index';

class App extends Component {
  state = {}

  componentDidMount () {
    const { store } = this.props

    //This is a store change listener to update the store
    store.subscribe(() => {
      this.setState(() => (
        store.getState()
      ))
    })
  }
  //This Uses a the reducer
  //and updates the store with this function
  //It an Onlick see html below
  submitPost = (text, author) => {
    this.props.store.dispatch(addComment(this.input.value, "bucko"))

    this.input.value = '' //clear input

    if(this.state.comments)
    console.log(this.state.comments[0].text)
  }

  render() {
    return (
      <div>
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Comment"
        />
        <button onClick={this.submitPost}>Submit</button>
        <button >KILL FOOD</button>

        <p>
          Comment: {this.state.comments && this.state.comments[0].text}
        </p>
      </div>
    )
  }
}

export default App

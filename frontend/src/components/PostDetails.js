import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Route } from 'react-router-dom';


class PostDetails extends Component{

  render(){
    const {submitComment} = this.props

    return(
    <div>

      <h1>Post Details</h1>
      <input
        type='text'
        ref={(input) => this.input = input}
        placeholder="Add a Comment"
      />
      <button onClick={submitComment}>Submit</button>
      <button >KILL FOOD</button>

      <p>
        Post:
      </p>


    </div>
    )
  }
}

export default PostDetails

import React, { Component } from 'react';
import { Link} from 'react-router-dom';


class Posts extends Component{

  render(){
    const {submitPost} = this.props

    return(
    <div>

      <input
        type='text'
        ref={(input) => this.input = input}
        placeholder="Post"
      />
      <button onClick={submitPost}>Submit</button>
      <button >KILL FOOD</button>

      <p>
        Post:
      </p>

    </div>
    )
  }
}

export default Posts

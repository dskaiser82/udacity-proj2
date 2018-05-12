import React, { Component } from 'react'
import {addComment, setComments} from '../actions/comments';
import {addPost, setPosts} from '../actions/posts';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import Posts from './Posts.js'
import PostDetails from './PostDetails.js'

class App extends Component {
  doThing = () => {
    this.props.dispatch(addPost({}))  //now that we have connect, this.props has dispatch
  }

  render() {

    console.log('Props', this.props)

    return (
      <div>

        <Route exact path="/" render={() => (
         <div className="read-app">
          <h1>Categories</h1>
            <ul>
              <li>React</li>
              <li>Rdux</li>
              <li>Udacity</li>
            </ul>
        </div>
        )}/>

        <Route path="/posts" render={({ history }) => (
            <Posts
               submitPost={this.submitPost}
            />
        )}/>
        <Link
            to="/posts"
            className="open-posts"
          >Go Posts
        </Link>

        <Route path="/postdetails" render={({ history }) => (
            <PostDetails
               submitComment={this.submitComment}
            />
        )}/>



      </div>
    )
  }
}

function mapStateToProps(posts){
  return{
    author: "Benny-san"
  }
}


export default connect(mapStateToProps)(App)

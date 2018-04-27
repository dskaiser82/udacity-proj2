import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as API from '../api/Api';


import '../css/style.css';

class ReadApp extends Component {


    componentDidMount(){
      API.getPosts().then((allPosts) => {
        this.setState({ allPosts })
        console.log(this.state)
     })
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started Mr Kaiser, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default ReadApp;

import React, { Component } from 'react';
import * as API from '../api/Api';

import '../css/style.css';

class ReadApp extends Component {


    componentDidMount(){
      API.getCats().then((allCats) => {
        this.setState({ allCats })
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

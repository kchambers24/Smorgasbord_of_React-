import React, { Component } from 'react';
import './App.css';
import Rebase from 're-base'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;

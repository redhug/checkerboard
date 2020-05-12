import React, { Component } from 'react';
import CheckerBoard from './checkerboard';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <CheckerBoard className="mb10"/>
    </div>
  );
}
}

export default App;

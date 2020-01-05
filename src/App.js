import React, { Component } from 'react';
import Component1 from './componentOne';

// Netninja video 13: props

class App extends Component {
  render(){

    return (
      <div className="App">
        <h1>React JS APP</h1>
        <p>Welcome!</p>
        <Component1 />
      </div>
    )

  }
}

export default App;

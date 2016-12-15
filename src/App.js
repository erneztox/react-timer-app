import React, { Component } from 'react';
import Nav from './navigation.js';

class App extends Component {
  render() {
    return (
      <di>
        <Nav />
        {this.props.children}
      </di>
    );
  }
}

export default App;

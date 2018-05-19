import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Imagefluid from './assets/image';
import Browse from './assets/browseinfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Imagefluid />
        <Browse />
      </div>
    );
  }
}

export default App;
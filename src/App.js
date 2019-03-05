import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './css/App.css';
import Picture from './assets/picture';
import Navigation from './assets/navigation/';
import Term from './assets/networkConfig';
import Time from './assets/time';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <div className="global-router">
                <Link to="/pic">Home</Link>
                <Link to="/nav">Front End</Link>
                <Link to="/term">Terminal</Link>
                <Time />
            </div>
            <div>
                <Route path="/nav" component={Navigation} />
                <Route path="/pic" exact  component={Picture} />
                <Route path="/term" component={Term} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;

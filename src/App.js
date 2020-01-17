import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Routes from "./routes";
import Menus from "./common/components/menus";
import "./css/App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menus />
                <Routes />
            </div>
        );
    }
}

export default App;

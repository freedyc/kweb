import React, { Component } from 'react';
import { Terminal } from 'xterm';
import 'xterm/src/xterm.css'
import * as fit from 'xterm/lib/addons/fit/fit';
Terminal.applyAddon(fit);

class Term extends Component {
    componentDidMount() {
        let term = new Terminal();
        term.open(document.getElementById('terminal'));
        term.fit()
    }
    render() {
        return (
            <div>
                <div id="terminal"></div>
            </div>
        )
    }
}

export default Term;

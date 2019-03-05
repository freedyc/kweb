import React from "react"
import { Terminal } from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';

class XtermTest extends React.Component {
    constructor(props) {
        super(props)
        this.getTerm = this.getTerm.bind(this);
    }

    render() {
        return <div id={this.props.id}></div>
    }

    getTerm() {
        return this.term;
    }

    componentDidMount() {
        Terminal.applyAddon(fit);
        let {id} = this.props;
        let terminalContainer = document.getElementById(id);
        this.term = new Terminal({cursorBlink: true});
        this.term.open(terminalContainer);
        this.term.fit();
    }

}

export default XtermTest

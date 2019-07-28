import React from "react"
import { Terminal } from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';
import openSocket from 'socket.io-client';
import 'xterm/src/xterm.css';
import * as fullscreen from 'xterm/lib/addons/fullscreen/fullscreen';
import 'xterm/lib/addons/fullscreen/fullscreen.css';
class TerminalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.termRef = React.createRef();
    }
    componentDidMount() {
        Terminal.applyAddon(fit);
        Terminal.applyAddon(fullscreen);
        this.term = new Terminal({ cursorBlink: true });
        this.term.open(this.termRef);
        this.term.fit();
        this.createServer();
        this.term.toggleFullScreen(false)

    }
    createServer = () => {
        const {
            host,
            username,
            password,
        } = this.props;
        const socket = openSocket('127.0.0.1:8000');
        const termID = `termIP${host.split('.').join()}`
        socket.emit("createNewServer", { msgId: termID, ip: host, username: username, password: password });
        this.term.on("data", (data) => {
            socket.emit(termID, data);
        })
        socket.on(termID, (data) => {
            this.term.write(data)
        })
    }

    render() {
        return (
            <div ref={(ref) => { this.termRef = ref }} style={{height: '100%'}}></div>
        )
    }

}

export default TerminalComponent;
1

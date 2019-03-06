import React from "react"
import { Terminal } from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';
import openSocket from 'socket.io-client';
import { Button, Input } from "antd";
import 'xterm/src/xterm.css';

class TerminalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.termRef = React.createRef();
        this.state = {
            socketURL: '192.168.82.90:8000',
            ip: '10.1.108.41',
            username: 'root',
            password: 'zdns@knet.cn',
        }
    }
    componentDidMount() {
        Terminal.applyAddon(fit);
        const terminal = document.getElementById('terminal');
        this.term = new Terminal({cursorBlink: true});
        this.term.open(terminal);
        this.term.fit();
    }
    createServer = () => {
        const {
            socketURL,
            ip,
            username,
            password,
        } = this.state;
        console.log(this.state);
        const socket = openSocket(socketURL);
        socket.emit("createNewServer", { msgId: 'termID', ip: ip, username: username, password: password });
        this.term.on("data", (data) => {
            socket.emit('termID', data);
        })
        socket.on("termID", (data) => {
            this.term.write(data)
        })
    }
    urlChange = (e) => {
        const { value } = e.target;
        this.setState({...this.state, scoketURL: value });
    }
    nameChange = (e) => {
        const { value } = e.target;
        this.setState({...this.state, username: value });
    }
    ipChange = (e) => {
        const { value } = e.target;
        this.setState({...this.state, ip: value });
    }
    passwdChange = (e) => {
        const { value } = e.target;
        this.setState({...this.state, password: value });
    }

    render() {
        const {
            socketURL,
            ip,
            username,
            password,
        } = this.state;
        return (
            <div>
                <div>
                    <Input size="small" placeholder="Socket URL" onChange={this.urlChange} value={socketURL} />
                    <Input size="small" placeholder="Input IP" onChange={this.ipChange} value={ip}/>
                    <Input size="small" placeholder="Input username" onChange={this.nameChange} value={username} />
                    <Input.Password size="small" placeholder="Input Password" onChange={this.passwdChange} value={password} />
                    <Button onClick={this.createServer}>Connect</Button>
                </div>
                <div ref={(ref) => {this.termRef=ref}} id="terminal"></div>
            </div>
        )


    }

}

export default TerminalComponent;

import React from "react"
import { Terminal } from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';
import openSocket from 'socket.io-client';
import { Button, Input, Row, Col  } from "antd";
import 'xterm/src/xterm.css';
const socket = openSocket('192.168.82.90:8000');

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
            ip,
            username,
            password,
        } = this.state;
        const termID = `termIP${ip.split('.').join()}`
        socket.emit("createNewServer", { msgId: termID, ip: ip, username: username, password: password });
        this.term.on("data", (data) => {
            socket.emit(termID, data);
        })
        socket.on(termID, (data) => {
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
            ip,
            username,
            password,
        } = this.state;
        return (
            <div>
                <div style={{border: '1px solid #ccc'}}>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={3} order={5} offset={1}>
                            <Button onClick={this.createServer}>Connect</Button>
                        </Col>
                        <Col span={3} order={4} offset={1}>
                            <Input.Password size="small" placeholder="Input Password" onChange={this.passwdChange} value={password} />
                        </Col>
                        <Col span={3} order={3} offset={1}>
                            <Input size="small" placeholder="Input username" onChange={this.nameChange} value={username} />
                        </Col>
                        <Col span={3} order={2} offset={1}>
                            <Input size="small" placeholder="Input IP" onChange={this.ipChange} value={ip} />
                        </Col>
                        {/* <Col span={3} order={1} offset={0}>
                            <Input size="small" placeholder="Socket URL" onChange={this.urlChange} value={socketURL} />
                        </Col> */}
                    </Row>
                </div>
                <div ref={(ref) => {this.termRef=ref}} id="terminal"></div>
            </div>
        )


    }

}

export default TerminalComponent;

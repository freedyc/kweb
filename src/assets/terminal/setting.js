import React from 'react';

import { Modal, Button, Form, Input } from 'antd';

import  * as localforage from 'localforage';

class Setting extends React.Component {
    state = {
        visible: false,
        host: '',
        username: '',
        password: '',
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        const { host, username, password } = this.state;
        const _this = this;
        localforage.setItem('hosts', [{ host, username, password }]).then(function (value) {
            console.log(value);
            _this.setState({
                visible: false,
            });
        }).catch(function(err) {
            if (err === 'DOMException') {
                console.log('空间不足')
            }
            console.log(err);
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    nameChange = (e) => {
        const { value } = e.target;
        this.setState({ ...this.state, username: value });
    }
    ipChange = (e) => {
        const { value } = e.target;
        this.setState({ ...this.state, host: value });
    }
    passwdChange = (e) => {
        const { value } = e.target;
        this.setState({ ...this.state, password: value });
    }
    componentDidMount() {
        localforage.getItem('hosts').then(value => {
            this.setState({...this.state, ...value[0]});
        })
    }
    render() {
        const {
            host,
            username,
            password,
        } = this.state;

        return (
            <React.Fragment>
                <Button style={{ marginLeft: '10px' }} onClick={this.showModal}>
                    Setting
                </Button>
                <Modal
                    title="Setting"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div style={{ marginLeft: '10%', marginRight: '10%'}}>
                        <Form layout="vertical">
                            <Form.Item label="Host">
                                <Input placeholder="input Host" onChange={this.ipChange} value={host} />
                            </Form.Item>
                            <Form.Item label="Username">
                                <Input placeholder="input Username" onChange={this.nameChange} value={username} />
                            </Form.Item>
                            <Form.Item label="Password">
                                <Input.Password placeholder="input password" onChange={this.passwdChange} value={password} />
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Setting;

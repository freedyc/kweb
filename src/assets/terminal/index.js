import React from 'react';
import { Tabs, Button } from 'antd';
import Setting from './setting';
import Config from './config';
const { TabPane } = Tabs;

class Console extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'localhost', content: '', key: '1', host: 'localhost', username: '', password: '' },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }

    onChange = activeKey => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'localhost', content: '', key: activeKey, host: 'localhost', username: '', password: ''});
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };

    render() {
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button onClick={this.add} style={{marginLeft: '10px'}}>ADD</Button>
                    <Setting />
                </div>
                <Tabs
                    hideAdd
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                >
                    {this.state.panes.map(pane => (
                        <TabPane tab={pane.title} key={pane.key}>
                            <Config username={pane.username} password={pane.password} host={pane.host} />
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        );
    }
}

export default Console;

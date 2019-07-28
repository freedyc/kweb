import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Menus = (props) => {
    const pathname = props.location.pathname;
    return (
        <Menu pointing secondary>
            <Menu.Item
                name='Photography'
                active={pathname === '/photography'}
            >
                <Link to="/photography">Photography</Link>

            </Menu.Item>

            <Menu.Item
                name='nav'
                active={pathname === '/nav'}
            >
                <Link to="/nav">Front End</Link>
            </Menu.Item>

            <Menu.Item
                name='term'
                active={pathname === '/term'}
            >
                <Link to="/term">Terminal</Link>
            </Menu.Item>
        </Menu>
    );
}

export default withRouter(Menus);

import React, { Component } from 'react';
import data from './a';
import { Card, Header, Button, Segment } from 'semantic-ui-react';
import _ from 'lodash'
const types = _.groupBy(data, (obj) => {
	return obj.listType
})

const NavTypes = (props) => {
	const { list } = props;
 	return (
		<NavItem {...list} />
	)
}

class NavigationGroup extends Component {
	state = { visible: true }

  	handleClick = () => {
	    const { visible } = this.state;
	    this.setState({ visible: !visible })
	}

	render() {
		const { visible } = this.state;
		const {
			typeName,
			items
		} = this.props;
		return (
			<div>
				<Segment color='green' style={{ marginTop: '10px' }}>
					<Header onClick={this.handleClick}>
						<Button>{typeName}</Button>
					</Header>
					<Card.Group>
						{ visible ?  items.map((item) => <NavTypes key={item.href} list={item} />): null}
					</Card.Group>
				</Segment>
			</div>

		)
	}
}

const Navigation = () => {
	const style = {
		overflowX: 'hidden',
		overflowY: "auto",
		padding: '20px',
		width: '100%',
		height: '100%'
	};
	return (
		<div style={style}>
			{
				_.map(types, (v, k)=> <NavigationGroup key={ k } typeName={ k } items={v} />)
			}
		</div>
	)
}

const NavItem = (props) => {
	const {
		title,
		href,
	} = props;

	return (
		<Card key={title}>
		  	<Card.Content>
		    	<Card.Header>
		    		<a target="_blank" rel="noopener noreferrer" href={href}>
		    			<h3>{title}</h3>
		    		</a>
		    	</Card.Header>
		  	</Card.Content>
		</Card>
	)
}


export default Navigation;


import React from 'react';
import data from './url';

const Navigation = () => {
	return (
		<div>
			{ 
				data.map((item)=><NavItem {...item} />)
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
		<div>
			<a href={href} target="_blank"><h3>{title}</h3></a>
		</div> 
	)
}

export default Navigation;
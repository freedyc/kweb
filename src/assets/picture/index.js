import React from 'react';
import BrowseInfo from './browseinfo';
import Image from './image';

const Picture = () => {
	return (
		<div style={{height: '100%', overflow: 'auto'}}>
			<Image />
            <BrowseInfo />
		</div>
	)
}

export default Picture;

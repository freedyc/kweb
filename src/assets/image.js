import React from 'react'
import { Image } from 'semantic-ui-react'
import img1 from '../img/img1.jpg';
import Form from './form';

const ImageExampleFluid = () => (
	<div>
		<Image src={img1} fluid />
	  <Form />
	</div>
  
)
 
export default ImageExampleFluid
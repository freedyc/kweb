import React from 'react'
import { Image } from 'semantic-ui-react'
import imgUrl from '../../img/zebra.jpg';

const ZebraImageFluid = () => (
	<div>
		<Image src={imgUrl} fluid />
	</div>
  
)
 
export default ZebraImageFluid;
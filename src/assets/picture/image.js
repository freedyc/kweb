import React from 'react'
import { Image, Segment, Divider } from 'semantic-ui-react'
import imgUrl from '../../images/zebra.png';
import img1 from '../../images/bg/scenery-1.jpg';
import img2 from '../../images/bg/scenery-2.jpg';
import img3 from '../../images/bg/scenery-3.jpg';
import img4 from '../../images/bg/scenery-4.jpg';
import img5 from '../../images/bg/scenery-5.jpg';
import img6 from '../../images/bg/scenery-6.jpg';
import img7 from '../../images/bg/scenery-7.jpg';
import img8 from '../../images/bg/scenery-8.jpg';

const ZebraImageFluid = () => (
    <Image.Group size='massive' style={{ textAlign: 'center' }}>
      <Image src={imgUrl} />
      <Image src={img1} />
      <Image src={img2} />
      <Image src={img3} />
      <Image src={img4} />
      <Image src={img5} />
      <Image src={img6} />
      <Image src={img7} />
      <Image src={img8} />
    </Image.Group>
)

export default ZebraImageFluid;

import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={ {marginBottom: '1rem'} }>
    <p className="p__cormorant">{ title }</p>
    <img src={images.scissors} alt="spoon" className='subheading__img' />
  </div>
);

export default SubHeading;

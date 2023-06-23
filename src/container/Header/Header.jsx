import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new Flavour" />
      <h1 className='app__header-h1'>The Key to Find Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}} > Lorem ipsum dolor sit amet. In voluptate tempore aut eius libero eum omnis molestias in aspernatur laboriosam. In sapiente rerum quo obcaecati praesentium et recusandae blanditiis a molestiae dolorem sed cumque quasi. </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={ images.welcome }alt="" />
    </div>

  </div>
);

export default Header;

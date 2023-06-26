import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    
    <div className='app__wrapper_info'>
      <SubHeading title="Blurry Vision" />
      <h1 className='app__header-h1'>Glen Waverley's Best Barber</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}} > Come for the vibes, Come back for the fades.  </p>
      
      <a href="#services" type='button' className='custom__button'>Explore Services</a>
      
    </div>

    <div className="app__wrapper_img">
      <img src={ images.header } alt="welcome" />
    </div>

  </div>
);

export default Header;

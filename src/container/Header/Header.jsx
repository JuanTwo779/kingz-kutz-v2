import React from 'react';

import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper flex__center section__padding app__bg_2 ' id='home'>
    
    <div className='app__header_info '>
      {/* <SubHeading title="Blurry Vision" /> */}
      
      {/* <h1 className='app__header-h1'>The Best Barber</h1> */}
      <img src={images.heroLogoKK} alt="KingzKutz" className='header__image' />
      <p className="p__opensans" style={{ margin: '2rem 0'}} > Come for the vibes, Come back for the fades.  </p>
      
      <a href="#services" type='button' className='custom__button'>Explore Services</a>
      
    </div>

    {/* <div className="app__wrapper_img">
      <img src={ images.trim } alt="welcome" />
    </div> */}

  </div>
);

export default Header;

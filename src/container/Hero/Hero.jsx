import React from 'react';
import images from '../../constants/images';

import './Hero.css';

const Hero = () => (
     <div className='app__hero-2 ' id='hero'>
          {/* <div className='app__hero-img'>
               <img  src={images.heroLogoKK} alt="hero logo" />
          </div> */}
          <div className='app__hero-info'>
               <h1 className='app__hero-h1'>Serving Royalty One Cut at a Time</h1>
               <h2 className='app__hero-h2'>Your kingdom for premier barber services</h2>

            
          </div>
     </div>
);

export default Hero;
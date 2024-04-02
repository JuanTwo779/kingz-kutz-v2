import React from 'react';
import images from '../../constants/images';

import './Hero.css';

const Hero = () => (
     <div className='app__hero-2 ' id='hero'>
          <div className='app__hero-info'>
               <div className='app__hero-img'>
                    <img  src={images.heroLogoKK} alt="hero logo" />
               </div>
               <hr className='app__hero-bar'/>
               <h1 className='app__hero-h1'>Serving royalty</h1>
               <h2 className='app__hero-h2'>One cut at a time</h2>
               <hr className='app__hero-bar'/>
            
          </div>
     </div>
);

export default Hero;
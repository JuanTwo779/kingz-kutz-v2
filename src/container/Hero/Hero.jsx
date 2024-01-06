import React from 'react';
import images from '../../constants/images';

import './Hero.css';

const Hero = () => (
     <div className='app__hero-2 ' id='hero'>
          <div className='app__hero-info'>
               {/* <h1 className='app__hero-h1'>Kingz Kutz Barber</h1> */}
               <div className='app__hero-img'>
                    <img  src={images.heroLogoKK} alt="hero logo" />
               </div>

               <p className="p__opensans app__hero-desc"> 
                    Welcome to Kingz Kutz 
               </p>
               <hr className='style-eight'/>

               <p className="p__opensans app__hero-desc"> 
                    Your Kingdom for Premier Barber Services 
                    <br/> Serving Royalty, One Cut at a Time
               </p>
          </div>
     </div>
);

export default Hero;
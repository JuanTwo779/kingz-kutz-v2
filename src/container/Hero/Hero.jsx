import React from 'react';

import { images } from '../../constants';
// import { SubHeading } from '../../components';

import './Hero.css';

const Hero = () => (
     <div className='app__hero section__padding' id='hero'>
          <div className='app__hero-info'>
               <div className='app__hero-img'>
                    <img src={images.heroLogoKK} alt="Kingz Kutz Background" />
               </div>

               {/* <SubHeading title="blurryVision.kk" /> */}
               <h1 className='app__hero-h1'>Kingz Kutz Barber</h1>
               <hr className='style-eight'/>
               <p className="p__opensans app__hero-desc"> 
                    Your Kingdom for premier barber services. 
                    Serving royalty, one cut at a time.
               </p>
               {/* <a href="#services" type='button' className='custom__button'>Explore Services</a> */}
                    
          </div>
     </div>
);

export default Hero;
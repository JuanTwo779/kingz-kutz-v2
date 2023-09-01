import React from 'react';

import { images } from '../../constants';

import './Hero.css';

const Hero = () => (
     <div className='app__hero section__padding' id='hero'>
          <div className='app__hero-info'>
               <div className='app__hero-img'>
                    <img src={images.heroLogoKK} alt="Kingz Kutz Background" />
               </div>

               {/* <SubHeading title="blurryVision.kk" /> */}
               <h1 className='app__header-h1'>Welcome to Kingz Kutz</h1>
               <p className="p__opensans"  style={{ margin: '1rem 0 2rem 0'}}> 
                    Your Kingdom for premier barber services. 
                    Serving royalty, one cut at a time.
                    Experience the Epitome of Grooming Excellence. 
                    Elevate Your Style with Our Regal Barber Craftsmanship. 
                    Embrace Distinction at Every Trim.
               </p>
               {/* <a href="#services" type='button' className='custom__button'>Explore Services</a> */}
                    
          </div>
     </div>
);

export default Hero;
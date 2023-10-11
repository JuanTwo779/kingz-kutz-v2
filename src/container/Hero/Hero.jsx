import React from 'react';

import { images } from '../../constants';
// import { SubHeading } from '../../components';

import './Hero.css';

const Hero = () => (
     <div className='app__hero section__padding' id='hero'>
          <div className='app__hero-info'>
               <h1 className='app__hero-h1'>Kingz Kutz Barber</h1>
               <hr className='style-eight'/>
               <p className="p__opensans app__hero-desc"> 
                    Your Kingdom for premier barber services. 
                    Serving royalty, one cut at a time.
               </p>
          </div>
     </div>
);

export default Hero;
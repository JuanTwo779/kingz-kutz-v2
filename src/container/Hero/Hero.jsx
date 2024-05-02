import React from 'react';
import { LuCrown } from "react-icons/lu";
import { GiCrown } from "react-icons/gi";
import { GiQueenCrown } from "react-icons/gi";

import './Hero.css';

const Hero = () => (
     <div className='app__hero-2' id='hero'>
          <div className='app__hero-info'>\
               <GiQueenCrown />
               <h1 className='app__hero-h1'>Serving royalty</h1>
               <h2 className='app__hero-h2'>One cut at a time</h2>
            
          </div>
     </div>
);

export default Hero;
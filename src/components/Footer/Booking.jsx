import React from 'react';

import { FiInstagram } from 'react-icons/fi';
import SubHeading from '../SubHeading/SubHeading';
import './Booking.css';

const Booking = () => (
  <div className="app__booking" id='booking'>
    <div className="app__booking-heading">
      <SubHeading title="booking" />
      <h1 className="headtext__cormorant">Make a booking via Instragram</h1>
      <p className="p__opensans">Booking system is currently underway.</p>
    </div>

    <div className="app__booking-button flex__center">
        
      <FiInstagram color='#fff' fontSize={40} 
          onClick={(e) => { e.preventDefault();
          window.open('https://www.instagram.com/blurryvision.kk/','_blank').focus();
      }} />
    </div>
  </div>
);

export default Booking;
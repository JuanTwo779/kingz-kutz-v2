import React from 'react';

import { FiInstagram } from 'react-icons/fi';
import SubHeading from '../SubHeading/SubHeading';
import './Booking.css';

const Booking = () => (
  <div className="app__booking" id='booking'>
    <div className="app__booking-heading">
      <SubHeading title="booking" />
      <h1 className="headtext__cormorant">Book on Instragram</h1>
      <p className="p__opensans">Click the instagram button below and follow the steps to book in the bio or, click on the Square Up button to go straight to the booking system.</p>
    </div>

    <div className="app__booking-button flex__center">
        
      <FiInstagram fontSize={40} 
          onClick={(e) => { e.preventDefault();
          window.open('https://www.instagram.com/blurryvision.kk/','_blank').focus();
      }} />
      
    </div>
  </div>
);

export default Booking;
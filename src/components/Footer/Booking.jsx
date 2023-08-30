import React from 'react';

import { FiInstagram } from 'react-icons/fi';
import SubHeading from '../SubHeading/SubHeading';
import './Booking.css';

const Booking = () => (
  <div className="app__booking" id='booking'>
    <div className="app__booking-heading">
      <SubHeading title="booking" />
      <h1 className="headtext__cormorant">Book on Instragram</h1>
      <p className="p__opensans">Click the instagram button below and click the 'book now' button in the bio. Then follow the instructions on the screen</p>
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
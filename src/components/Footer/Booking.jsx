import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Booking.css';
import images from '../../constants/images';

const Booking = () => (
  <div className="app__booking" id='booking'>
    <div className="app__booking-heading">
      <SubHeading title="booking" />
      <h1 className="headtext__cormorant">Book now on Square Up</h1>
      <p className="p__opensans">
        Click the button below and follow the steps to book. 
        Alternatively, go to 
        our <a href="https://www.instagram.com/blurryvision.kk/" target="_blank" className='app__booking-insta'>instagram</a> and 
        find the instructions to book in our bio.
      </p>
    </div>

    <div className="app__booking-button flex__center">
      <a href="https://squareup.com/appointments/book/4cyym80cme1iz6/LWNY4K7BJ50XV/services" target="_blank">
        <img src={images.squareUp} alt="squareUp"/>
      </a>
    </div>
  </div>
);

export default Booking;
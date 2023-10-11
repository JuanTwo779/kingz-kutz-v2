import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Barber.css';

const Barber = () => (
  <div className="app__bg app__wrapper section__padding" id='barber'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.barber} alt="barber_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="@BlurryVision.kk" />
      <h1 className="headtext__cormorant">About Me</h1>

      <div className="app__barber-content">
        <div className="app__barber-content_quote">
          <p className="p__opensans"> 
            Indulge in the privilege of being served by a barber like no other. 
            As a future civil engineering magnate and skilled massage therapist 
            gracing the grooming industry, 
            I bless my clients with the honor of experiencing my unrivaled talents. 
            My commitment to precision and attention to detail ensures that every 
            visit to my chair results in a fresh look that suits your style.
          </p>
        </div>
        <br />
        {/* <p className="p__opensans"> While my peers merely dabble in superficialities, I engineer aesthetics with meticulous calculations and scientific precision. Witness the harmony between mathematical brilliance and grooming finesse as I engineer jawlines to perfection. </p>
        <br /> */}
        <p className="p__opensans"> 
          Rest assured, you're not merely receiving a haircut; 
          you're gaining access to a realm of engineering-driven elegance 
          curated exclusively for those who understand that sophistication 
          demands both mathematical appreciation and impeccable style. 
        </p>
      </div>

      <div className="app__barber-sign">
        <p>Kelvin Kuek</p>
        {/* <p className="p__opensans">Civil Engineer | Barber</p> */}
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Barber;
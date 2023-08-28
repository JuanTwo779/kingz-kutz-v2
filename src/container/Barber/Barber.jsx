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
      <SubHeading title="Barber's word" />
      <h1 className="headtext__cormorant">About Us</h1>

      <div className="app__barber-content">
        <div className="app__barber-content_quote">
          {/* <img src={images.quote} alt="quote_image" /> */}
          <p className="p__opensans"> I study engineering in RMIT and I am super passionate about it. I've been cutting hair since highschool I think.</p>
        </div>
        {/* <p className="p__opensans"> Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p> */}
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
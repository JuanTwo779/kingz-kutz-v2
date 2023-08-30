import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Booking } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Booking />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">7 Garwain Parade, Glen Waverley</p>
        <p className="p__opensans">1300 655 506</p>
        <p className="p__opensans">1300 367 070</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logoWhiteKK} alt="footer_logo" />
        <p className="p__opensans">Circumcision service coming soon</p>
        <img src={images.scissors} className="subheading__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram 
            onClick={(e) => { e.preventDefault();
            window.open('https://www.instagram.com/blurryvision.kk/','_blank').focus();
          }} 
        />
          <FiTwitter />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 5:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">48:00 am - 69:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2023 Kingz Kutz. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
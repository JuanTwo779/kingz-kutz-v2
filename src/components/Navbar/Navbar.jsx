import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiInstagram } from 'react-icons/fi';
import { BsScissors } from 'react-icons/bs'

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='app__navbar'>
      <div className="rounded-background"></div>

      <ul className="app__navbar-links items-left">
        <li className='p__opensans'><a href="#barber">About</a></li>
        <li className='p__opensans'><a href="#services">Services</a></li>
        <li className='p__opensans'><a href="#rules">Rules</a></li>
      </ul>



      <div className='app__navbar-logo'>
          <img className='nav__desktop-logo' src={images.heroLogoKK} alt="app logo" />
          <img className='nav__mobile-logo' src={images.logoKK} alt="app logo" />
        </div>

      <ul className='app__navbar-links items-right'>
        <li className='p__opensans'><a href="#photos" >Gallery</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
        <li className='p__opensans'><a href="#booking">Book</a></li>
      
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className='flex__center' color='var(--color-white)' fontSize={27} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <BsScissors fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen_links' onClick={() => setToggleMenu(false)}>
            <li className='p__opensans'><a href="#barber">About</a></li>
            <li className='p__opensans'><a href="#services">Services</a></li>
            <li className='p__opensans'><a href="#rules">Rules</a></li>
            <li className='p__opensans'><a href="#photos">Photos</a></li>
            <li className='p__opensans'><a href="#contact">Contact</a></li>
            <li className='p__opensans'><a href="#booking">Book</a></li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
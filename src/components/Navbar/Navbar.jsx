import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsScissors } from 'react-icons/bs'

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='app__navbar'>
      <div className="rounded-background"></div>

      <ul className="app__navbar-links items-left">
        <li><a className='p__opensans' href="#barber">About</a></li>
        <li><a className='p__opensans' href="#services">Services</a></li>
        <li><a className='p__opensans' href="#rules">Rules</a></li>
      </ul>



      <div className='app__navbar-logo'>
        <a href="#hero">
          <img className='nav__desktop-logo' src={images.heroLogoKK} alt="app logo" />
          <img className='nav__mobile-logo' src={images.logoKK} alt="app logo" />
        </a>
        </div>

      <ul className='app__navbar-links items-right'>
        <li><a className='p__opensans' href="#photos" >Gallery</a></li>
        <li><a className='p__opensans' href="#contact">Contact</a></li>
        <li><a className='p__opensans' href="#booking">Book</a></li>
      
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className='flex__center' color='var(--color-white)' fontSize={25} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <BsScissors fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen_links' onClick={() => setToggleMenu(false)}>
            <li><a href="#barber">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#rules">Rules</a></li>
            <li><a href="#photos">Photos</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#booking">Book</a></li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
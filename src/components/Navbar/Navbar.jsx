import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FiInstagram } from 'react-icons/fi';
import { BsScissors } from 'react-icons/bs'

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='app__navbar'>

      <div className='app__navbar-logo'>
        <img src={images.logoKK} alt="app logo" />
      </div>

      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Services</a></li>
        <li className='p__opensans'><a href="#awards">Rules</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>

      <div className="app__navbar-login">
        {/* <a href="https://www.instagram.com/blurryvision.kk/" target="_blank" className='p__opensans'><FiInstagram/></a> */}
        <FiInstagram 
          onClick={(e) => { e.preventDefault();
          window.open('https://www.instagram.com/blurryvision.kk/','_blank').focus();
          }} 
        />
        <div />
        
        <a href="#booking" className='p__opensans'>Bookings</a> 
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <BsScissors fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen_links'>
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#about">About</a></li>
            <li className='p__opensans'><a href="#menu">Services</a></li>
            <li className='p__opensans'><a href="#awards">Rules</a></li>
            <li className='p__opensans'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;


// 3 56 54
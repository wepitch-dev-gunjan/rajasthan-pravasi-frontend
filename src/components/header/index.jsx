import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

import './style.scss'
import Logo from './../../assets/images.JPG'
// import Frame from './../../assets/frame.png'
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);


  return (
    <>
    <div className="headerContainer">
        <div className="headerLeft"> 
            <img src={Logo} alt="" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
        
        <div className={` headerRight nav ${menuOpen ? 'open' : ''}`} >
            <div className="headerMenu">
                <ul>
                <Link className='menuList' to="/"><li>Home</li></Link>
                <Link className='menuList' to="/about"><li>About Us</li></Link>
                <Link className='menuList' to="/gallery"><li>Gallery</li></Link>
                <Link className='menuList' to="/directory"><li>Directory</li></Link>
                <Link className='menuList' to="/gallery"><li>Gallery</li></Link>
                <Link className='menuList' to="/contact"><li>Contact</li></Link>
                <Link className='menuList' to="/faq"><li>FAQ</li></Link>
                <Link className='menuList' to="/login"><li>Login</li></Link>
                </ul>
            </div>
            <div className="headerButton">
    <button className='joinNowButton'>Join Us</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Header
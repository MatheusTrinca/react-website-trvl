import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import {Button} from './Button';

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const closeMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 790){
      setButton(false);
    }else{
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton);

  useEffect(() => {
    showButton();
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo'>
            TRVL<i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={() => setClick(!click)}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' onClick={closeMenu} className='nav-links'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' onClick={closeMenu} className='nav-links'>Services</Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' onClick={closeMenu} className='nav-links'>Products</Link>
            </li>
            <li className='nav-item'>
              <Link to='/signup' onClick={closeMenu} className='nav-links-mobile'>Sign up</Link>
            </li>
          </ul>
          {button && <Button
           buttonStyle='btn--outline'>Sign up</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar

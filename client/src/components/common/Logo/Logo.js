import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  const closeMenu = () => {
    if(document.querySelector('.navbar__menu')) { 
      document.querySelector('.navbar__menu').classList.remove('open');
      document.querySelector('.navbar__hamburger').classList.remove('open');
    }
  }
  return (
    <Link to='/'>
      <div onClick={closeMenu} className="logo">
        <img src={ logo } className="App-logo" alt="logo" />
      </div>
    </Link>
  )
};

export default Logo;
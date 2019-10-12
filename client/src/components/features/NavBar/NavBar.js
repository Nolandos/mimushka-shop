import React from 'react';
import './NavBar.scss';
import { MainMenu, Logo } from '../../index';

const NavBar = ({links}) => {
  return (
    <nav className="navbar">
      <Logo />
      <MainMenu links={ links } />
    </nav>
  )
}
export default NavBar;
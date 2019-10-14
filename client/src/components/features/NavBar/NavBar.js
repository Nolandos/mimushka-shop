import React from 'react';
import './NavBar.scss';


const NavBar = ({ children }) => {
  return (
    <nav className="navbar">
      { children }
    </nav>
  )
}
export default NavBar;
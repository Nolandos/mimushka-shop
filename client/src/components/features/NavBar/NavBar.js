import React from 'react';
import './NavBar.scss';


const NavBar = ({ children }) => {
  const navbarOpen = () => {
    if(document.querySelector('.sidebar__menu')) {
      document.querySelector('.sidebar__overlay').classList.remove('open');
      document.querySelector('.sidebar__hamburger').classList.remove('open');      
    }
    document.querySelector('.navbar__menu').classList.toggle('open');
    document.querySelector('.navbar__hamburger').classList.toggle('open');
  }

  return (
    <div className="navbar">
      <button onClick={ navbarOpen } className="navbar__hamburger">
        <div></div>
        <div></div>
        <div></div>
      </button>
      <nav className="navbar__menu">
        { children }
      </nav>
    </div>
  )
}
export default NavBar;
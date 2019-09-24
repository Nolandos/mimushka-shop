import React,{ useState } from 'react';
import './NavBar.scss';
import { FaShoppingCart } from "react-icons/fa";

import { MainMenu, Logo } from '../../index';


const NavBar = () => {
  const [links] = useState([
    { path: '/', title: 'Home', className: 'title' },
    { path: '/faq', title: 'FAQ', className: 'faq' },
    { path: '/contact', title: 'Kontakt' , className: 'contact' },
    { path: '/regulations', title: 'Regulamin', className: 'regulations' },
    { path: '/basket', title: <FaShoppingCart />, className: 'basket' }
  ]);

  return (
    <nav className="navbar">
      <Logo />
      <MainMenu links={ links } />
    </nav>
  )
}
export default NavBar;
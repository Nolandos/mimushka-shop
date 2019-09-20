import React,{ useState } from 'react';
import './NavBar.scss';

import { MainMenu, Logo } from '../../index';


const NavBar = () => {
  const [links] = useState([
    { path: '/', title: 'Home' },
    { path: '/faq', title: 'FAQ' },
    { path: '/contact', title: 'Kontakt' },
    { path: '/regulations', title: 'Regulamin' },
    { path: '/basket', title: 'Koszyk' }
  ]);

  return (
    <nav className="navbar">
      <Logo />
      <MainMenu links={ links } />
    </nav>
  )
}
export default NavBar;
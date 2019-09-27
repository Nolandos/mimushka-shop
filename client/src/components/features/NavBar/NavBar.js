import React,{ useState } from 'react';
import './NavBar.scss';
import { MainMenu, Logo, BasketIcon } from '../../index';

const NavBar = () => {
  const [links] = useState([
    { path: '/', title: 'Home', className: 'title' },
    { path: '/faq', title: 'FAQ', className: 'faq' },
    { path: '/contact', title: 'Kontakt' , className: 'contact' },
    { path: '/regulations', title: 'Regulamin', className: 'regulations' },
    { path: '/basket', title: <BasketIcon />, className: 'basket' }
  ]);

  return (
    <nav className="navbar">
      <Logo />
      <MainMenu links={ links } />
    </nav>
  )
}
export default NavBar;
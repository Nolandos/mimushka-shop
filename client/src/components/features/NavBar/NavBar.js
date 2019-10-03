import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import './NavBar.scss';
import { MainMenu, Logo, BasketIcon, Droppable } from '../../index';
import { addProduct } from '../../../redux/shopBasketReducer';

const NavBar = () => {
  const dispatch = useDispatch();
  const [links] = useState([
    { path: '/', title: 'Home', className: 'title' },
    { path: '/faq', title: 'FAQ', className: 'faq' },
    { path: '/contact', title: 'Kontakt' , className: 'contact' },
    { path: '/regulations', title: 'Regulamin', className: 'regulations' },
    { 
      path: '/basket', 
      title: <Droppable onDrop={(product)=>dispatch(addProduct(product.id, product))}><BasketIcon /></Droppable>, 
      className: 'basket' 
    }
  ]);

  return (
    <nav className="navbar">
      <Logo />
      <MainMenu links={ links } />
    </nav>
  )
}
export default NavBar;
import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import './NavBar.scss';
import { MainMenu, Logo, CartIcon, Droppable } from '../../index';
import { addProduct } from '../../../redux/shopCartReducer';

const NavBar = () => {
  const dispatch = useDispatch();
  const [links] = useState([
    { path: '/', title: 'Home', className: 'title' },
    { path: '/faq', title: 'FAQ', className: 'faq' },
    { path: '/contact', title: 'Kontakt' , className: 'contact' },
    { path: '/regulations', title: 'Regulamin', className: 'regulations' },
    { 
      path: '/cart', 
      title: <Droppable onDrop={(product)=>dispatch(addProduct(product.id, product))}><CartIcon /></Droppable>, 
      className: 'cart' 
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
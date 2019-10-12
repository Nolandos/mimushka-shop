import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavBar, Footer, PageContainer } from '../../index';
import { CartIcon, Droppable } from '../../index';
import { addProduct } from '../../../redux/shopCartReducer';

const MainLayout = ({ children }) => {
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
        <PageContainer>
            <NavBar links={links}/>
            {children}
            <Footer/>   
        </PageContainer>
)};
  


export default MainLayout;
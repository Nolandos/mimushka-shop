import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../../redux/shopCartReducer';
import './MainLayout.scss';
import { 
    NavBar, 
    Footer, 
    PageContainer,
    CartIcon, 
    Droppable, 
    MainMenu, 
    Logo 
} from '../../index';

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
        <div className="response-menu-belt">
            <Link to="/cart">
                <CartIcon />
            </Link>
        </div>
            <NavBar>
                <Logo />
                <MainMenu links={ links } />
            </NavBar>
            {children}
            <Footer/>   
        </PageContainer>
)};
  


export default MainLayout;
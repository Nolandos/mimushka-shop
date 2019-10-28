import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/usersReducer';
import './Dashboard.scss';
import { FaPowerOff } from 'react-icons/fa';
import AddIcon from '@material-ui/icons/Add';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import { 
    NavBar, 
    Sidebar, 
    MainMenu, 
    OrdersPage,
    PrivateRoute,
    ProductsListPage,
    NewProductPage,
    EditProductPage,
    NotFoundPage } from '../../index';

const DashboardPage = () => {
    const dispatch = useDispatch();

    const [links] = useState([
        { 
            path: '/admin/dashboard/new-product', 
            title: <div className="menu-option"><AddIcon/>Nowy Produkt</div>, 
            className: 'new-product' 
        },
        { 
            path: '/admin/dashboard/products-list', 
            title: <div className="menu-option"><MenuBookIcon/>Lista Produktów</div>,  
            className: 'products-list' 
        }    
    ]);

    const signOut = () => {
        dispatch(logoutUser());
        window.location.href = "/admin/login";
    };      
 
    return (
        <div className="dashboard">
            <NavBar>
                <FaPowerOff onClick={ signOut } className="logout-icon" />    
            </NavBar>
            <Sidebar>
              <MainMenu links={ links } />
            </Sidebar>
            <div className="dashboard__content">
                <Switch>
                    <PrivateRoute path="/admin/dashboard/orders/" exact component={ OrdersPage }/>
                    <PrivateRoute path="/admin/dashboard/products-list/" exact component={ ProductsListPage }/>
                    <PrivateRoute path="/admin/dashboard/new-product/" exact  component={ NewProductPage }/>
                    <PrivateRoute path="/admin/dashboard/edit-product/:id" exact component={ EditProductPage }/>
                    <Route component={ NotFoundPage } /> 
                </Switch>
            </div>
        </div>
    )
}

export default DashboardPage;
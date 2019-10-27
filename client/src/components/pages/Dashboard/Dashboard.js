import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import './Dashboard.scss';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { 
    NavBar, 
    Sidebar, 
    MainMenu, 
    Logo, 
    OrdersPage,
    PrivateRoute,
    ProductsListPage,
    NewProductPage,
    EditProductPage } from '../../index';

const DashboardPage = () => {
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
    
    return (
        <div className="dashboard">
            <NavBar/>
            <Sidebar>
              <MainMenu links={ links } />
            </Sidebar>
            <div className="dashboard__content">
                <Switch>
                    <PrivateRoute path="*/orders" exact component={ OrdersPage }/>
                    <PrivateRoute path="*/products-list" exact component={ ProductsListPage }/>
                    <PrivateRoute path="*/new-product" exact component={ NewProductPage }/>
                    <PrivateRoute path="*/edit-product/:id" exact component={ EditProductPage }/>
                </Switch>
            </div>
        </div>
    )
}

export default DashboardPage;
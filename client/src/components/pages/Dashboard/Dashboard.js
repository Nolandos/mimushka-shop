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
    NewProductPage } from '../../index';

const DashboardPage = () => {
    const [links] = useState([
        { 
            path: '/admin/dashboard/orders', 
            title: <div className="menu-option"><ListIcon/>Zamówienia</div>, 
            className: 'orders' 
        },
        { 
            path: '/admin/dashboard/newProduct', 
            title: <div className="menu-option"><AddIcon/>Nowy Produkt</div>, 
            className: 'new-product' 
        },
        { 
            path: '/admin/dashboard/productsList', 
            title: <div className="menu-option"><MenuBookIcon/>Lista Produktów</div>,  
            className: 'products-list' 
        }    
    ]);
    return (
        <div className="dashboard">
            <NavBar>
                <Logo/>
            </NavBar>
            <Sidebar>
              <MainMenu links={ links } />
            </Sidebar>
            <div className="dashboard__content">
                <Switch>
                    <PrivateRoute path="*/orders" exact component={ OrdersPage }/>
                    <PrivateRoute path="*/newProduct" exact component={ NewProductPage }/>
                    <PrivateRoute path="*/productsList" exact component={ ProductsListPage }/>
                </Switch>
            </div>
        </div>
    )
}

export default DashboardPage;
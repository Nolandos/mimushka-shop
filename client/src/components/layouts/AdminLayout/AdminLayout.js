import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './AdminLayout.scss';
import { LoginPage, NotFoundPage, DashboardPage, PrivateRoute } from '../../index'


const AdminLayout = () => (
        <div className="admin-layout">
            <Switch>
                <Route path="/admin/login" exact component={ LoginPage } />
                <Route path="/admin/" exact component={ LoginPage } />
                <PrivateRoute path="/admin/dashboard" component={ DashboardPage } /> 
                <Route component={ NotFoundPage } /> 
            </Switch>
        </div>
    )

export default AdminLayout;
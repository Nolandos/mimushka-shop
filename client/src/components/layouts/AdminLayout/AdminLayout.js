import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './AdminLayout.scss';
import { LoginPage, PageContainer, DashboardPage, PrivateRoute } from '../../index'


const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <Switch>
                <Route path="/admin/login" exact component={LoginPage} />
                <PrivateRoute path="/admin/dashboard" component={DashboardPage} />  
            </Switch>
        </div>
    )
}

export default AdminLayout;
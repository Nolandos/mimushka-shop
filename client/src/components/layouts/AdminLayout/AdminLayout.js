import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './AdminLayout.scss';
import { LoginPage, PageContainer } from '../../index'


const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <PageContainer>
                <Switch>
                    <Route path="*/login" exact component={LoginPage} /> 
                </Switch>
            </PageContainer>
        </div>
    )
}

export default AdminLayout;
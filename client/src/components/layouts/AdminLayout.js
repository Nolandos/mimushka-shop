import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LoginPage, PageContainer } from '../index'

const AdminLayout = () => {
    return (
        <PageContainer >
            <Switch>
                <Route path="*/login" exact component={LoginPage} /> 
            </Switch>
        </PageContainer>
    )
}

export default AdminLayout;
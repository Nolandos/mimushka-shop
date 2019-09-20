import React from 'react';
import { NavBar, Footer, PageContainer } from '../../index';

const MainLayout = ({ children }) => {
    return (
        <PageContainer>
            <NavBar/>
            {children}
            <Footer/>   
        </PageContainer>
)};
  


export default MainLayout;
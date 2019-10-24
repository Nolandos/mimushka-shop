import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { 
    MainLayout,
    CartPage,
    Contact,
    FAQPage,
    Home,
    Regulations,
    SingleProductPage
  } from '../../index';

  function ClientLayout() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/product/:id" exact component={ SingleProductPage } />
          <Route path="/cart" exact component={ CartPage } />
          <Route path="/contact" exact component={ Contact } />
          <Route path="/faq" exact component={ FAQPage } />
          <Route path="/regulations" exact component={ Regulations } />
        </Switch>
      </MainLayout>
    );
  }
  
  export default ClientLayout;
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { 
    MainLayout,
    CartPage,
    ContactPage,
    FAQPage,
    Home,
    RegulationsPage,
    SingleProductPage,
    NotFoundPage
  } from '../../index';

  function ClientLayout() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/product/:id" exact component={ SingleProductPage } />
          <Route path="/cart" exact component={ CartPage } />
          <Route path="/contact" exact component={ ContactPage } />
          <Route path="/faq" exact component={ FAQPage } />
          <Route path="/regulations" exact component={ RegulationsPage } />
          <Route component={ NotFoundPage } />
        </Switch>
      </MainLayout>
    );
  }
  
  export default ClientLayout;
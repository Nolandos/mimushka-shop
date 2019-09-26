import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
  MainLayout,
  BasketPage,
  Contact,
  FAQ,
  Home,
  Regulations,
  SingleProductPage
} from './components';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" exact component={ SingleProductPage } />
        <Route path="/basket" exact component={BasketPage} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/regulations" exact component={Regulations} />
      </Switch>
    </MainLayout>
  );
}

export default App;

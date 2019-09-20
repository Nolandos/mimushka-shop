import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
  MainLayout,
  Basket,
  Contact,
  FAQ,
  Home,
  Regulations 
} from './components';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/basket" exact component={Basket} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/regulations" exact component={Regulations} />
      </Switch>
    </MainLayout>
  );
}

export default App;

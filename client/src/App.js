import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
  ClientLayout,
  AdminLayout
} from './components';

function App() {
  return (
      <Switch>
        <Route path="/admin" component={AdminLayout} />
        <Route path="/" component={ClientLayout} />
      </Switch>
  );
}

export default App;

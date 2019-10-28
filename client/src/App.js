import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
  ClientLayout,
  AdminLayout,
  NotFoundPage
} from './components';


function App() {

  return (
      <Switch>
        <Route path="/admin" component={AdminLayout} />
        <Route path="/" component={ClientLayout} />
        <Route component={NotFoundPage} />
      </Switch>
  );
}

export default App;

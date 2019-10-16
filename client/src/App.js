import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { 
  ClientLayout,
  AdminLayout
} from './components';

import { loadProductsRequest } from './redux/productsReducer';

function App() {
  const dispatch = useDispatch();
  const filters = useSelector(({filters}) => filters);
  const products = useSelector(({products}) => products.data);
  
  useEffect(() => {
    dispatch(loadProductsRequest(filters));
  },[...products]);

  return (
      <Switch>
        <Route path="/admin" component={AdminLayout} />
        <Route path="/" component={ClientLayout} />
      </Switch>
  );
}

export default App;

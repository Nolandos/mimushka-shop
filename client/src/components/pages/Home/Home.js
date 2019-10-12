import React from 'react';
import './Home.scss';
import { Products, Sidebar, SortList, PriceList } from '../../index';

const Home = () => (
  <div className="home">
    <Sidebar>
      <SortList />
      <PriceList />
    </Sidebar>
    <Products initialPage={1} productsPerPage={6} />
  </div>
);

export default Home;
import React from 'react';
import './Home.scss';
import { Products, Sidebar } from '../../index';

const Home = () => (
  <div className="home">
    <Sidebar />
    <Products />
  </div>
);

export default Home;
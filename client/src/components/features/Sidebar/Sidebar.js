import React from 'react';
//import './Sidebar.scss';
import { SortList } from '../../index';
import { PriceList } from '../../index';

const Sidebar = () => (
  <div className="sidebar">
    <SortList />
    <PriceList />
  </div>
);

export default Sidebar;
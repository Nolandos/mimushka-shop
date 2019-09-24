import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to='/'>
    <div className="logo">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  </Link>
);

export default Logo;
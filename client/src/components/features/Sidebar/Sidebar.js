import React from 'react';
import './Sidebar.scss';
import { FaFilter, FaArrowLeft } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const Sidebar = ({ children }) => {
  const sidebarOpen = e => {
    e.stopPropagation();
    document.querySelector('.navbar__menu').classList.remove('open');
    document.querySelector('.navbar__hamburger').classList.remove('open');
    document.querySelector('.sidebar__overlay').classList.toggle('open');
    document.querySelector('.sidebar__hamburger').classList.toggle('open');
  }

  return (
    <div className="sidebar">
      <button onClick={ sidebarOpen } className="sidebar__hamburger">
        <FaFilter className="filter-icon" />
        <FaArrowLeft className="close-icon" />
      </button>
      <div onClick={ sidebarOpen } className="sidebar__overlay">
        <div onClick={e => e.stopPropagation() } className="sidebar__menu">
          {children}
        </div>
      </div> 
    </div>
)};

export default Sidebar;
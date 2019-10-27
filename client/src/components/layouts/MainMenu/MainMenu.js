import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './MainMenu.scss';

const MainMenu = ({ links, location }) => {
  const closeMenu = () => {
    document.querySelector('.navbar__menu').classList.remove('open');
    document.querySelector('.navbar__hamburger').classList.remove('open');
    if(document.querySelector('.dashboard')) {
      document.querySelector('.sidebar__overlay').classList.remove('open');
      document.querySelector('.sidebar__hamburger').classList.remove('open');
    }
  }
  return (
    <ul className="main-menu">
      { links.map((link, index) =>
        <li className={link.className} key={index}>
          <Link onClick={closeMenu} className={(location.pathname === link.path && 'active') || ''} to={link.path}>{link.title}</Link>
        </li>
      )}
    </ul>
  )
};

MainMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.isRequired,
  })),
};

export default withRouter(props => <MainMenu {...props}/>);
import React from 'react';
import PropTypes from 'prop-types';
import { MdInfoOutline, MdDone, MdErrorOutline } from 'react-icons/md';

import './Alert.scss';

const Alert = ({ variant = '', children, ...otherProps }) => {

  const icon = () => {
    switch(variant) {
      case 'info':
        return <MdInfoOutline />
      case 'success':
        return <MdDone />
      case 'warning':
        return <MdErrorOutline />
      case 'error':
        return <MdErrorOutline />
      default:
        return <MdInfoOutline />
    }
  };

  return (
      <div {...otherProps} className={`alert alert--${variant}`}>
        {icon()}
        <span className="alert__desc">{children}</span>
      </div>
  )

};

Alert.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Alert;

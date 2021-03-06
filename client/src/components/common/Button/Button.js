import React from 'react';
import './Button.scss';

const Button = ({ variant = '', children, action }) => (
    <button onClick={ action }  className={ `button button--${variant}`}>
        { children }
    </button>
);

export default Button;
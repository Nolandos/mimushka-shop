import React from 'react';
import './Button.scss';

const Button = ({ variant = '', children }) => (
    <button  className={ `button button--${variant}`}>
        { children }
    </button>
);

export default Button;
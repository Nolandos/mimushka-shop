import React from 'react';
import './Button.scss';

const Button = ({ children }) => (
    <button className="button">
        { children }
    </button>
);

export default Button;
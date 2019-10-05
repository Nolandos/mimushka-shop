import React from 'react';
import { Hearts } from 'svg-loaders-react';
import './Spinner.scss';

const Spinner = () => (
    <div className="spinner">
        <Hearts className="spinner__spinner-ico" fill="#ee5253"/>
    </div> 
)

export default Spinner;
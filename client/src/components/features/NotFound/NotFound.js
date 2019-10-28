import React from 'react';
import WarningIcon from '@material-ui/icons/Warning';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="not-found__title">404</h1>
            <WarningIcon />
            <p className="not-found__description">Nie znaleziono strony o podanym adresie</p>
        </div>
    )
}

export default NotFound;
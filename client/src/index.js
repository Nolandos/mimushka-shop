import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './App';

const Root = () => (
    <Router>
        <App />
    </Router>  
);

ReactDOM.render(<Root />, document.getElementById('root'));


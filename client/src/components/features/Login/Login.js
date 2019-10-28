import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { checkUser } from '../../../redux/usersReducer';
import { Spinner, Alert } from '../../index';

const Login = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(({ users }) => users.isLogged);
    const request = useSelector(({ requests }) => requests.users_request);

    const [state, setState] = useState({
        login: '',
        password: '',
      });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value });
      };

    const checkLogin = (e) => {
        e.preventDefault();
        dispatch(checkUser(state.login, state.password));
    }

    if(isLogged === true) return <Redirect to="/admin/dashboard/new-product" />

    return (
        <div className="login-panel">
            <AccountCircleIcon />
            <h1>Admin panel</h1>
            { request.pending === true && <Spinner /> } 
            { request.error && <Alert variant='error'>{request.error}</Alert>}
            { request.pending === false && 
            <form className="login-panel__form" onSubmit={checkLogin}>
                <TextField
                    id="login"
                    label="Login"
                    margin="normal"
                    variant="outlined"  
                    onChange={handleChange('login')} 
                />
                <TextField
                    id="password"
                    label="Hasło"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange('password')}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    endIcon={<SendIcon />}
                >
                    Zaloguj się 
                </Button>          
        </form>
        }
    </div>
)};



export default Login;
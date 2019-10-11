import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const Login = () => {
    const [state, setState] = useState({
        login: '',
        password: '',
        flag: false,
      });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value });
      };

    const checkLogin = (e) => {
        e.preventDefault();
        setState({ ...state, flag: true });
        const { login, password } = state;  
    }

    if(state.flag === true) return <Redirect to="/admin/dashboard" />
    
    return(
        <div className="login-panel">
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
    </div>
)};



export default Login;
import React, { useState } from 'react';
import './EmailForm.scss';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const EmailForm = ({ sendEmail }) => {
    const [state, setState]= useState({
        email: '',
        subject: '',
        text: ''
    });

    const handleChange = value => e => setState({...state, [value]: e.target.value}); 

    const sendForm = e => {
        e.preventDefault();
        sendEmail(state);
    }

    return (
        <form className="email-form" onSubmit={ sendForm }>
            <TextField
                    id="email"
                    label="Email"
                    margin="normal"
                    variant="outlined"  
                    onChange={handleChange('email')} 
                />
                <TextField
                    id="subject"
                    label="Temat"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange('subject')}
                />
                <TextareaAutosize
                    rows={10}
                    rowsMax={10}
                    className="email-form__text"
                    aria-label="maximum height"
                    placeholder="Wiadomość..."
                    value= {state.text}
                    onChange={handleChange('text')}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    endIcon={<SendIcon />}
                >
                    Wyślij wiadomość
                </Button>
        </form>  
    );
};

export default EmailForm;
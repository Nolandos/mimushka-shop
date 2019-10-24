import React, { useState } from 'react';
import './EmailForm.scss';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { SpinningCircles } from 'svg-loaders-react';

const EmailForm = ({ sendEmail, pending }) => {
    const [state, setState]= useState({
        address: '',
        subject: '',
        content: ''
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
                    value= {state.address}
                    onChange={handleChange('address')} 
                />
                <TextField
                    id="subject"
                    label="Temat"
                    margin="normal"
                    variant="outlined"
                    value={state.subject}
                    onChange={handleChange('subject')}
                />
                <TextareaAutosize
                    rows={10}
                    rowsMax={10}
                    className="email-form__text"
                    aria-label="maximum height"
                    placeholder="Wiadomość..."
                    value= {state.content}
                    onChange={handleChange('content')}
                />

                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="email-form__sumbit-button"
                    endIcon={ pending === false ? <SendIcon /> : <SpinningCircles className="loader" /> }
                >
                    Wyślij wiadomość
                </Button>
        </form>  
    );
};

export default EmailForm;
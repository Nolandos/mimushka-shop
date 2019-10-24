import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../config';
import { EmailForm, Alert } from '../../index';
import './Contact.scss';

const Contact = () => {
    const[status, setStatus] = useState({
        success: null,
        error: null,
        pending: false
    });

    const sendEmail = async email => {
        try {
            await setStatus({...status, ['pending']: true})
            const res = await axios.post(`${API_URL}/send`, email);
            setStatus({ 
                ['success']: res.data, 
                ['error']: null,
                ['pending']: false
            });
        } catch(e) {
            setStatus({
                ['error']: e.response.data, 
                ['success']: null,
                ['pending']: false
            });
        }   
    }

    return (
        <div className="contact">
            {status.error && <Alert variant='error'>{status.error}</Alert>}
            {status.success && <Alert variant='info'>{status.success}</Alert>}
            <h1>Kontakt</h1>
            <EmailForm 
                sendEmail={ sendEmail }
                pending={ status.pending }
            />
        </div>
    )
};

export default Contact;
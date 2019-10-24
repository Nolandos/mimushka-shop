import React from 'react';
import { EmailForm } from '../../index';
import './Contact.scss';

const Contact = () => {
    const sendEmail = payload => {
        console.log(payload);
    }

    return (
        <div className="contact">
            <h1>Kontakt</h1>
            <EmailForm sendEmail={ sendEmail }/>
        </div>
    )
};

export default Contact;
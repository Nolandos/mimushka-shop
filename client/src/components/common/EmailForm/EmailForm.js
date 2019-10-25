import React, { useState } from 'react';
import './EmailForm.scss';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { SpinningCircles } from 'svg-loaders-react';
import { Formik } from 'formik';
import * as yup from 'yup'; 

const EmailSchema = yup.object().shape({
    address: yup.string().email('Podany email jest nieprawidłowy')
        .required('Email jest wymagany!'),
    subject: yup.string()
        .required('Temat jest wymagany!'),
    content: yup.string()
        .required('Wiadomość jest wymagana!'),
  });

const EmailForm = ({ sendEmail, pending, success }) => {
    return (
        <Formik
        initialValues={{ 
            address: '',
            subject: '',
            content: ''   
        }}
        validationSchema={ EmailSchema }
        onSubmit={ async (values, { setSubmitting, resetForm }) => { 
            await sendEmail(values);
            resetForm(); 
            setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
            <form className="email-form" onSubmit={ handleSubmit }>
                <TextField
                    id="address"
                    name="address"
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    value= {values.address}
                    onChange={ handleChange }
                    onBlur={ handleBlur }      
                />
                { errors.address && touched.address && <p className="email-form__error-field"> {errors.address} </p> }
                <TextField
                    id="subject"
                    name="subject"
                    label="Temat"
                    margin="normal"
                    variant="outlined"
                    value={values.subject}
                    onChange={ handleChange }
                    onBlur={ handleBlur } 
                />
                { errors.subject && touched.subject && <p className="email-form__error-field"> {errors.subject} </p> }
                <TextareaAutosize
                    id="content"
                    name="content"
                    rows={10}
                    rowsMax={10}
                    className="email-form__text"
                    aria-label="maximum height"
                    placeholder="Wiadomość..."
                    value= {values.content}
                    onChange={ handleChange }
                    onBlur={ handleBlur } 
                />
                { errors.content && touched.content && <p className="email-form__error-field"> {errors.content} </p> }
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
        )}
      </Formik> 
    );
};

export default EmailForm;
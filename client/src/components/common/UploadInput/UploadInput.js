import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import {DropzoneDialog} from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import './UploadInput.scss';

import { uploadProductImage } from '../../../redux/productsReducer';

const UploadInput = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        open: false,
        files: []    
    });

    const handleClose = () => {
        setState({...state, open: false});
    }

    const handleSave = files => {
        //Saving files to state for further use and closing Modal.
        console.log(files);
        setState({...state, files: files, open: false });
    }

    const handleOpen = () => {
        setState({ ...state,  open: true });
    }

    const test = (e) => {
        e.preventDefault();    
        dispatch(uploadProductImage(state.files[0]));
    }
    const handleChange = (e) => {
        setState({...state, files: e });
    }
    console.log(state);
    return (
        <div>
        <form onSubmit={test}>
         <input type="file" onChange={ (e) => handleChange(e.target.files) } />
         <button className="submit">Wyślij</button>
         </form>
        </div>
    );
}

export default UploadInput;
import React from 'react';
import './UploadInput.scss';

const UploadInput = (props) => {
    const { handleChangeImage }  = props;
    /*
    const test = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData);
        console.log(file);
       
    }
    */
   

    return (  
        <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={(e)=>handleChangeImage(e.target.files[0])}
          />   
    );
}

export default UploadInput;
import React from 'react';
import './UploadInput.scss';

const UploadInput = (props) => {
    const { handleChangeImage }  = props;
    
    return (
        <div className='upload-input'> 
            <input
                type="file"
                name="file"
                id="file"
                onChange={(e)=>handleChangeImage(e.target.files[0])}
            ></input>
            <label htmlFor="file">Dodaj zdjęcie</label>   
            {props.imageUrl && <img src={props.imageUrl}></img>}
        </div> 
    );
}

export default UploadInput;
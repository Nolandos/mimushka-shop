import React, { useState } from 'react'; 
import uniqueFilename from 'unique-filename';
import { UploadInput } from '../../index';

const ProductForm = (props) => {

    const [state, setState] = useState({
        name: '',
        price: '',
        additionalInfo: '',
        description: '',
        src: ''
    });
    const [image, setImage] = useState('');

    const handleChangeImage = file => {
        setImage(file);
    };

    const handleChange = (e, changeField) => setState({ ...state, [changeField]: e.target.value });

    const addProduct = (e) => {
        e.preventDefault();
        console.log(image)
        props.addProduct(state, image);
    }


    return (
        <form onSubmit={ addProduct } className="product-form">
            <input onChange={ (e) => handleChange(e, 'name') } type='text' placeholder='Nazwa Przedmiotu'></input>
            <input onChange={ (e) => handleChange(e, 'price') } type='number'></input>
            <input onChange={ (e) => handleChange(e, 'additionalInfo') } type='text'></input>
            <input onChange={ (e) => handleChange(e, 'description') } type='text'></input>
            <UploadInput handleChangeImage={handleChangeImage}/>
            <button type="submit">Dodaj</button>
        </form>
    )
}

export default ProductForm;
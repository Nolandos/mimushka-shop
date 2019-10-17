import React, { useState } from 'react'; 
import './ProductForm.scss';
import TextField from '@material-ui/core/TextField';
import { UploadInput } from '../../index';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProductForm = (props) => {

    const [state, setState] = useState({
        name: '',
        price: 0,
        additionalInfo: '',
        description: '',
        image: '',
        amount: 1
    });
    const [image, setImage] = useState('');
    const [tempImageSrc, setTempImageSrc] = useState('');

    const handleChangeImage = file => {
        setImage(file);
        const reader = new FileReader();
        reader.onload = e => { file && setTempImageSrc(e.target.result) };
        reader.readAsDataURL(file);
    };

    const handleChange = (e, changeField) => setState({ ...state, [changeField]: e.target.value });

    const addProduct = e => {
        e.preventDefault();
        console.log(image)
        props.addProduct(state, image);
    }

    const handleChangeDescription = value => setState({...state, description: value });

    return (
        <form onSubmit={ addProduct } className="product-form">
            <UploadInput handleChangeImage={handleChangeImage} imageUrl={tempImageSrc}/>
            <div className="product-form__wrapper">
            <TextField
                id="product-name"
                label="Nazwa Produktu"
                onChange={(e) => handleChange(e, 'name')}
                margin="normal"
            />
             <TextField
                id="price"
                label="Cena"
                onChange={ (e) => handleChange(e, 'price') }
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
            />
            <TextField
                id="additional-info"
                label="Dodatkowa Informacja"
                onChange={ (e) => handleChange(e, 'additionalInfo') }
                margin="normal"
            />
            <ReactQuill 
                defaultValue="Opis przedmiotu"
                onChange={ handleChangeDescription } 
            />
               
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    margin="normal"
                    endIcon={<AddCircleOutlineIcon/>}
                >
                    Dodaj
                </Button>  
            </div>
        </form>
    )
}

export default ProductForm;
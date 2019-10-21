import React, { useState } from 'react'; 
import './ProductForm.scss';
import TextField from '@material-ui/core/TextField';
import { UploadInput } from '../../index';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProductForm = ({ handleSubmit, name, price, additionalInfo, description, amount, ...props }) => {

    const [state, setState] = useState({
        name: name || '',
        price: price || 0,
        additionalInfo: additionalInfo || '',
        description: description || '',
        image: props.image || '',
        amount: 1
    });
    const [image, setImage] = useState(props.image || '');
    const [tempImageSrc, setTempImageSrc] = useState(props.image ?  `http://localhost:8000/images/${props.image}` : '');

    const handleChangeImage = file => {
        setImage(file);
        const reader = new FileReader();
        reader.onload = e => { file && setTempImageSrc(e.target.result) };
        reader.readAsDataURL(file);
    };

    const handleChange = (e, changeField) => setState({ ...state, [changeField]: e.target.value });

    const setProductValue = e => {
        e.preventDefault();
        handleSubmit(state, image);
        
        if(handleSubmit.name === 'addProduct' && props.error === null) {
            setState({
                name: '',
                price: 0,
                additionalInfo: '',
                description: '',
                image: '',
                amount: 1 
            })
        setTempImageSrc(''); 
        } 
    }
    
    const handleChangeDescription = value => setState({...state, description: value });

    return (
        <form onSubmit={ setProductValue } className="product-form">
            <UploadInput handleChangeImage={handleChangeImage} imageUrl={tempImageSrc}/>
            <div className="product-form__wrapper">
            <TextField
                id="product-name"
                label="Nazwa Produktu"
                value={state.name}
                onChange={(e) => handleChange(e, 'name')}
                margin="normal"
            />
             <TextField
                id="price"
                label="Cena"
                value={state.price}
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
                value={state.additionalInfo}
                onChange={ (e) => handleChange(e, 'additionalInfo') }
                margin="normal"
            />
            <ReactQuill 
                onChange={ handleChangeDescription } 
            />
               
                <Button
                    variant="contained"
                    color="inherit"
                    type="submit"
                    margin="normal"
                    endIcon={<AddCircleOutlineIcon/>}
                >
                   {handleSubmit.name === 'addProduct' && 'Dodaj' }
                   {handleSubmit.name === 'editProduct' && 'Edytuj' }
                </Button>  
            </div>
        </form>
    )
}

export default ProductForm;
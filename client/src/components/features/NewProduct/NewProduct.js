import React, { useEffect } from 'react';
import './NewProduct.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ProductForm, Alert } from '../../index';
import { addNewProduct } from '../../../redux/productsReducer';
import { resetRequest } from '../../../redux/requestsStatusReducer';

const NewProduct = () => {
    const dispatch = useDispatch();
    const request = useSelector(({requests}) => requests.products_upload_request);
    
    useEffect(() => {
        dispatch(resetRequest('products_upload_request'));
    },[]);

    const addProduct = (product, image) => {
       dispatch(addNewProduct(product, image));
    }

    return (
        <div className="new-product">
            {request.error && <Alert variant='error'>{request.error}</Alert>}
            {request.error === null && request.success === true && <Alert variant='info'>Dodano Pomyślnie !</Alert>}
            <ProductForm handleSubmit={ addProduct } />
        </div>
    )
}

export default NewProduct;
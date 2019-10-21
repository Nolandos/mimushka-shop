import React from 'react';
import './NewProduct.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ProductForm, Alert } from '../../index';
import { addNewProduct } from '../../../redux/productsReducer';

const NewProduct = () => {
    const dispatch = useDispatch();
    const request = useSelector(({requests}) => requests.products_request);

    const addProduct = (product, image) => {
       dispatch(addNewProduct(product, image));
    }

    return (
        <div className="new-product">
            {request.error && <Alert variant='error'>{request.error}</Alert>}
            <ProductForm handleSubmit={ addProduct } />
        </div>
    )
}

export default NewProduct;
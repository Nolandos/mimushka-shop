import React from 'react';
import { useDispatch } from 'react-redux';
import { ProductForm } from '../../index';
import { addNewProduct } from '../../../redux/productsReducer';

const NewProduct = () => {
    const dispatch = useDispatch();

    const addProduct = (product, image) => {
       dispatch(addNewProduct(product, image));
    }
    return (
        <ProductForm addProduct={ addProduct } />
    )
}

export default NewProduct;
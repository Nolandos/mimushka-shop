import React from 'react';
import './NewProduct.scss';
import { useDispatch } from 'react-redux';
import { ProductForm } from '../../index';
import { addNewProduct } from '../../../redux/productsReducer';

const NewProduct = () => {
    const dispatch = useDispatch();

    const addProduct = (product, image) => {
       dispatch(addNewProduct(product, image));
    }
    return (
        <div className="new-product">
            <ProductForm addProduct={ addProduct } />
        </div>
    )
}

export default NewProduct;
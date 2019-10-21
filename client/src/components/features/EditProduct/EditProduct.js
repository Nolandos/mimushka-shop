import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductForm, Spinner } from '../../index';
import { editProductRequest, loadSingleProductRequest } from '../../../redux/productsReducer';

const EditProduct = ({match}) => {
    const dispatch = useDispatch();
    const request = useSelector(({requests}) => requests.products_request);
    const product = useSelector(({ products }) => products.singleProduct );
    const productID = match.params.id;
  
    useEffect(() => {
        const fetchPost = async () => {
            await dispatch(loadSingleProductRequest(productID));
        }
        fetchPost();
    },[]);

    const editProduct = (product, image) => {
       dispatch(editProductRequest(product, image, productID));
    }

    return (
        <div>
            {request.pending === true && <Spinner />}
            {request.success === true && <ProductForm {...product} handleSubmit={ editProduct } />}
        </div>
    )
}

export default EditProduct;
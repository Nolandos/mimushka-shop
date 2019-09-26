import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSingleProductRequest } from '../../../redux/productsReducer';
import './SingleProduct.scss';

import { Button } from '../../index';

const SingleProduct = ({ match }) => {
    const dispatch = useDispatch();
    const singleProduct = useSelector(({ products }) => products.singleProduct);
    const { name, price, image, description } = singleProduct;

    useEffect(() => {
      dispatch(loadSingleProductRequest(match.params.id));
    },[]);
  
    return (
        <div className="single-product">
            <div className="single-product__photo-box">
                <img src={ image } alt="product-photo"></img>
            </div>
            <div className="single-product__content">
                <div className="single-product__name">{ name }</div>
                <div className="single-product__price">{ price }</div>
                <div className="single-product__description">{ description }</div>
                <Button variant="primary">Dodaj do koszyka</Button>
            </div>
        </div>
    );
  } 
  
  export default SingleProduct;
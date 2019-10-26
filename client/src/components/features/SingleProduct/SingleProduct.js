import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSingleProductRequest } from '../../../redux/productsReducer';
import { addProduct } from '../../../redux/shopCartReducer';
import './SingleProduct.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { PRODUCTS_IMAGE_URL } from '../../../config';

import { Button, HtmlBox } from '../../index';

const SingleProduct = ({ match }) => {
    const dispatch = useDispatch();
    const singleProduct = useSelector(({ products }) => products.singleProduct);
    const { id, name, price, image, description } = singleProduct;

    useEffect(() => {
      dispatch(loadSingleProductRequest(match.params.id));
    },[]);

    const addToCart = () => {
        dispatch(addProduct(id, singleProduct));
    }

    return (
        <div  className="single-product">
            <div className="single-product__photo-box">
                <img src={ `${PRODUCTS_IMAGE_URL}${image}` } alt="product-photo"></img>
            </div>
            <div className="single-product__content">
                <div className="single-product__name">{ name }</div>
                <div className="single-product__price">Cena: { price } zł</div>
                <div className="single-product__description">
                    <HtmlBox>{ description }</HtmlBox>
                </div>
                    <Button action={ addToCart } variant="primary">Dodaj do koszyka</Button>
            </div>
        </div>
    );
  } 
  
  export default SingleProduct;
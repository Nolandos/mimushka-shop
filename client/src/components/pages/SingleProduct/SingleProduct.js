import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSingleProductRequest } from '../../../redux/productsReducer';

const SingleProduct = ({ match }) => {
    const dispatch = useDispatch();
    const singleProduct = useSelector(({ products }) => products.singleProduct);
    const request = useSelector(({ products }) => products.request); 
    const { name, price, image } = singleProduct;

    useEffect(() => {
      dispatch(loadSingleProductRequest(match.params.id));
    },[]);
  
    return (
        <div className="single-product">
            <div className="photo-box">
                <img src={ image } alt="product-photo"></img>
            </div>
            <div className="content">
                <div className="name">{ name }</div>
                <div className="price">{ price }</div>
                <div className="description">lorem ipsum la la la</div>
                <button>Dodaj do Koszyka</button>
            </div>
        </div>
    );
  } 
  
  export default SingleProduct;
import React from 'react';
import { Link } from 'react-router-dom';
import './PreviewProduct.scss';

const PreviewProduct = props => { 
  const { id, additionalInfo, image, name, price } = props;
  
  return ( 
  <Link to={`/product/${id}`}>
    <div className="preview-product">
      <p className="preview-product__additional-info">{ additionalInfo }</p>
      <div className="preview-product__photo-box">
        <img className="preview-product__photo" alt="product-photo" src={ image }></img>
      </div>
      <p className="preview-product__name">{ name }</p>
      <p className="preview-product__price">{ price }</p>
    </div>
  </Link>
  );
};

export default PreviewProduct;
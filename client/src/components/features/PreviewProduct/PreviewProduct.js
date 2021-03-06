import React from 'react';
import { Link } from 'react-router-dom';
import './PreviewProduct.scss';
import { PRODUCTS_IMAGE_URL } from '../../../config';

const PreviewProduct = props => { 
  const { id, additionalInfo, image, name, price } = props;

  return ( 
  <Link to={`/product/${ id }`}>
    <div draggable="true" className="preview-product">
      <p className="preview-product__additional-info">{ additionalInfo }</p>
      <div className="preview-product__photo-box">
        <img className="preview-product__photo" alt="product-photo" src={ `${ PRODUCTS_IMAGE_URL }${ image }` }></img>
      </div>
      <p className="preview-product__name">{ name }</p>
      <p className="preview-product__price">{ price } zł</p>
    </div>
  </Link>
  );
};

export default PreviewProduct;

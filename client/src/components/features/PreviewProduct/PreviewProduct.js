import React from 'react';
import './PreviewProduct.scss';

const PreviewProduct = (props) => (
  <div className="preview-product">
    <p className="preview-product__additional-info">{ props.additionalInfo }</p>
    <div className="preview-product__photo-box">
      <img className="preview-product__photo" alt="product-photo" src={ props.image }></img>
    </div>
    <p className="preview-product__name">{ props.name }</p>
    <p className="preview-product__price">{ props.price }</p>
  </div>
);

export default PreviewProduct;
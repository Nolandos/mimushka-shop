import React from 'react';
import './Products.scss';
import { PreviewProduct } from '../../index';
const elements = [1,2,3,4,5,6,7,8,9,10];
const Products = () => (
  <div className="products">
    {elements.map(item=><PreviewProduct key={item} />)}
  </div>
);

export default Products;
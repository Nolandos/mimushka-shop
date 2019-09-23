import React from 'react';
import './Products.scss';
import { PreviewProduct } from '../../index';
import elements from './elements';

const Products = () => (
  <div className="products">
    {elements.map(item=><PreviewProduct {...item} key={item} />)}
  </div>
);

export default Products;
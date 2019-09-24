import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Products.scss';
import { PreviewProduct } from '../../index';
import { loadProductsByPageRequest } from '../../../redux/productsReducer';

const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.data);

  const [ initialPage ] = useState(props.initialPage || 1);
  const [ productsPerPage ] = useState(props.productsPerPage || 6);
  const [ pagination, setPagination ] = useState(props.pagination);

  useEffect(() => {
    dispatch(loadProductsByPageRequest(initialPage, productsPerPage));
    if( props.pagination === undefined) setPagination(true); 
  },[]);

  return (
    <div className="products">
      {products.map(item=><PreviewProduct {...item} key={item} />)}
    </div>
  ) 
};

export default Products;
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Products.scss';
import { PreviewProduct } from '../../index';
import elements from './elements';
import { loadProductsByPageRequest } from '../../../redux/productsReducer';

const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.data);

  const [ initialPage ] = useState(props.initialPage || 1);
  const [ postsPerPage ] = useState(props.postsPerPage || 1);
  const [ pagination, setPagination ] = useState(props.pagination);

  useEffect(() => {
    dispatch(loadProductsByPageRequest(initialPage, postsPerPage));
    if( props.pagination === undefined) setPagination(true); 
  },[]);

  return (
    <div className="products">
      {elements.map(item=><PreviewProduct {...item} key={item} />)}
    </div>
  ) 
};

export default Products;
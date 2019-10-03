import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Products.scss';
import { PreviewProduct, Pagination, Draggable } from '../../index';
import { loadProductsByPageRequest } from '../../../redux/productsReducer';

const Products = props => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.data);
  const pages = useSelector(({ products }) => Math.ceil(products.amount / products.productsPerPage));

  const [ initialPage ] = useState(props.initialPage || 1);
  const [ productsPerPage ] = useState(props.productsPerPage || 6);
  const [ pagination, setPagination ] = useState(props.pagination);

  useEffect(() => {
    dispatch(loadProductsByPageRequest(initialPage, productsPerPage));
    if( props.pagination === undefined) setPagination(true); 
  },[]);

  const loadProductsPage = page => {
    dispatch(loadProductsByPageRequest(page, productsPerPage));  
  }

  return (
    <div className="products">
      {products.map(item => 
        <Draggable key={item.id} data={item} image={item.image}>
          <PreviewProduct {...item} key={item.id} />
        </Draggable>
        )}
      <Pagination pages={pages} initialPage={initialPage} onPageChange={(page) => loadProductsPage(page) } />
    </div>
  ) 
};

export default Products;
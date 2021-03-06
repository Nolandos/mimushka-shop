import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Products.scss';
import { PreviewProduct, Pagination, Draggable, Spinner, Alert } from '../../index';
import { loadProductsRequest } from '../../../redux/productsReducer';

const Products = props => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.data);
  const request = useSelector(({requests}) => requests.products_request);
  const filters = useSelector(({ filters }) => filters);
  const pages = useSelector(({ products }) => Math.ceil(products.amount / products.productsPerPage));
  
  
  const [ initialPage ] = useState(props.initialPage || 1);
  const [ startAt, setStartAt ] = useState(0);
  const [ productsPerPage ] = useState(props.productsPerPage || 6);
  const [ endAt, setEndAt ] = useState(6);
  const [ pagination, setPagination ] = useState(props.pagination);

  const loadProductsPage = page => {
    setStartAt((page - 1) * productsPerPage);
    setEndAt(page * 6);
  }

  useEffect(() => {
    dispatch(loadProductsRequest(filters));
    if(pagination === undefined) setPagination(true); 
  },[filters]);



  return (
    <div className="products">
    { request.pending === true && <Spinner /> }
    { products.length === 0 && request.pending === false && <Alert variant='warning'>Brak Produktów</Alert> }
      {products.slice(startAt, endAt).map(item => 
        <Draggable key={item.id} data={item} image={item.image}>
          <PreviewProduct {...item} key={item.id} />
        </Draggable>
        )}
      <Pagination products={products} pages={pages} initialPage={initialPage} onPageChange={(page) => loadProductsPage(page) } />
    </div>
  ) 
};

export default Products;
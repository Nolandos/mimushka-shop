import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShopBasketProduct } from '../../index';
import { addProduct } from '../../../redux/shopBasketReducer';
import './ShopBasket.scss';

const ShopBasket = () => {
    const dispatch = useDispatch();
    const products = useSelector(({ shopBasket }) => shopBasket);

    const add = (id) => {
       dispatch(addProduct(id)); 
    }

    return (
        <div className="shop-basket">
            {products.map(item => <ShopBasketProduct key={item.id} {...item} add={add} />)}
        </div>
    );
};

export default ShopBasket;
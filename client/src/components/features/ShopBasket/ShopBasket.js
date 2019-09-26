import React from 'react';
import { useSelector } from 'react-redux';
import { ShopBasketProduct } from '../../index';
import './ShopBasket.scss';

const ShopBasket = () => {
    const products = useSelector(({ shopBasket }) => shopBasket.products);

    return (
        <div className="shop-basket">
            {products.map(item => <ShopBasketProduct key={item.id} {...item} />)}
        </div>
    );
};

export default ShopBasket;
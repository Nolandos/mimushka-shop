import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShopBasketProduct } from '../../index';
import { addUnit, removeUnit, removeProduct } from '../../../redux/shopBasketReducer';
import { Button, Discount } from '../../index';

import './ShopBasket.scss';

const ShopBasket = () => {
    const dispatch = useDispatch();
    const products = useSelector(({ shopBasket }) => shopBasket.products);
    const totalPrice = useSelector(({ shopBasket }) => shopBasket.totalPrice);

    const addUnitProduct = (id) => {
       dispatch(addUnit(id)); 
    }

    const removeUnitProduct = (id) => {
        dispatch(removeUnit(id));
    }

    const removeOfProduct = (id) => {
        
        dispatch(removeProduct(id));
    }

    return (
        <div className="shop-basket">
            {products.map(item => (
                <ShopBasketProduct 
                    key={ item.id } 
                    { ...item } 
                    addUnit={ addUnitProduct } 
                    removeUnit={ removeUnitProduct }
                    removeProduct = { removeOfProduct }
                />))}
            <div className="shop-basket__summary">
                <Discount />
                <p className="shop-basket__total-price">{totalPrice} zł</p>
                <Button variant="primary">Zapłać</Button>
            </div>
        </div>
    );
};

export default ShopBasket;
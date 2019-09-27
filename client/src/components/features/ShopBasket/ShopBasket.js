import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShopBasketProduct } from '../../index';
import { addUnit, removeUnit, removeProduct } from '../../../redux/shopBasketReducer';
import './ShopBasket.scss';

const ShopBasket = () => {
    const dispatch = useDispatch();
    const products = useSelector(({ shopBasket }) => shopBasket);

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
        </div>
    );
};

export default ShopBasket;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShopCartProduct } from '../../index';
import { addUnit, removeUnit, removeProduct } from '../../../redux/shopCartReducer';
import { Button, Discount, Alert } from '../../index';
import { FaArrowAltCircleLeft } from "react-icons/fa";


import './ShopCart.scss';

const ShopCart = () => {
    const dispatch = useDispatch();
    const products = useSelector(({ shopCart }) => shopCart.products);
    const discount = useSelector(({shopCart}) => shopCart.discountCode.discount) || 0;
    const totalPrice = useSelector(({shopCart}) => shopCart.products.reduce((t, { price, amount }) => t + amount * parseInt(price), 0));

    const addUnitProduct = id => {
       dispatch(addUnit(id)); 
    }

    const removeUnitProduct = id => {
        dispatch(removeUnit(id));
    }

    const removeOfProduct = id => {
        dispatch(removeProduct(id));
    }

    const backToMain = () => {
        window.location.href = "/";
    }

    return (
        <div className="shop-cart">
        {products.length === 0 && 
            <div className="shop-cart__alert-wrapper">
                <Alert variant="error">Koszyk jest pusty</Alert>
                <Button action={backToMain} className="shop-cart__back-button" variant='primary'>
                    <FaArrowAltCircleLeft />
                    Wróć do zakupów
                </Button>
            </div>
        }
            {products.map(item => (
                <ShopCartProduct 
                    key={ item.id } 
                    { ...item } 
                    addUnit={ addUnitProduct } 
                    removeUnit={ removeUnitProduct }
                    removeProduct = { removeOfProduct }
                />))}
            <div className="shop-cart__summary">
                <Discount />
                <p className="shop-cart__total-price">{ totalPrice * (1 - discount) } zł</p>
                <Button variant="primary">Zapłać</Button>
            </div>
        </div>
    );
};

export default ShopCart;
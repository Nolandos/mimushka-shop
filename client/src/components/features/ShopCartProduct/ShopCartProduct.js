import React, { useState } from 'react';
import './ShopCartProduct.scss';
import { PRODUCTS_IMAGE_URL } from '../../../config';

const ShopCartProduct = ({ id, image, name, description, price, addUnit, removeUnit, amount, removeProduct }) => {
    const [units, setUnits ] = useState (amount || 1);

    const addUnitOfProduct = () => {
        setUnits(units + 1);
        addUnit(id);
    }

    const removeUnitOfProduct = () => {
        if(units > 1) {
            setUnits(units - 1);
            removeUnit(id)
        };
    }

    return (
        <div className="shop-cart-product">
            <div className="shop-cart-product__photo-box">
                <img src={ `${PRODUCTS_IMAGE_URL}${image}` } alt="product-image"></img>
            </div>
            <div className="shop-cart-product__content">
                <div className="shop-cart-product__name">{ name }</div>
                <div className="shop-cart-product__description">{ description }</div>
            </div>
            <div className="shop-cart-product__price">{ price }</div>
            <div className="shop-cart-product__operations">
                <div className="shop-cart-product__add-product">
                    <button onClick={ removeUnitOfProduct } className="btn-remove">-</button>
                    <div className="shop-cart-product__amount">{ units }</div>
                    <button onClick={ addUnitOfProduct } className="btn-add">+</button>
                </div>
                <button onClick={ () => removeProduct(id) } className="shop-cart-product__remove-product">
                    usuń produkt
                </button>
            </div>
        </div>
    );
};

export default ShopCartProduct;
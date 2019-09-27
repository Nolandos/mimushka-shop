import React, { useState } from 'react';
import './ShopBasketProduct.scss';

const ShopBasketProduct = ({ id, image, name, description, price, addUnit, removeUnit, amount, removeProduct }) => {
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
        <div className="shop-basket-product">
            <div className="shop-basket-product__photo-box">
                <img src={ image } alt="product-image"></img>
            </div>
            <div className="shop-basket-product__content">
                <div className="shop-basket-product__name">{ name }</div>
                <div className="shop-basket-product__description">{ description }</div>
            </div>
            <div className="shop-basket-product__price">{ price }</div>
            <div className="shop-basket-product__operations">
                <div className="shop-basket-product__add-product">
                    <button onClick={ removeUnitOfProduct } className="btn-remove">-</button>
                    <div className="shop-basket-product__amount">{ units }</div>
                    <button onClick={ addUnitOfProduct } className="btn-add">+</button>
                </div>
                <button onClick={ () => removeProduct(id) } className="shop-basket-product__remove-product">
                    usuń produkt
                </button>
            </div>
        </div>
    );
};

export default ShopBasketProduct;
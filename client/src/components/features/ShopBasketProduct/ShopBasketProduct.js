import React from 'react';
import './ShopBasketProduct.scss';
import { useSelector } from 'react-redux';

const ShopBasketProduct = ({ id, image, name, description, price, amount, add }) => {
    
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
                    <button className="btn-remove">-</button>
                    <div className="shop-basket-product__amount">{ amount }</div>
                    <button onClick={ () => add(id) } className="btn-add">+</button>
                </div>
                <div className="shop-basket-product__remove-product">
                    usuń produkt
                </div>
            </div>
        </div>
    );
};

export default ShopBasketProduct;
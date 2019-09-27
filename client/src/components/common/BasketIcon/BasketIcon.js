import React from 'react';
import { useSelector } from 'react-redux';
import './BasketIcon.scss';
import { FaShoppingCart } from "react-icons/fa";

const BasketIcon = () => { 
    const amount = useSelector(({ shopBasket }) => shopBasket.totalAmount);
    return (
        <div className="basket-icon">
            <FaShoppingCart />
            <div className="basket-icon__amount-field">
                <p className="basket-icon__amount">{ amount }</p>
            </div>
        </div>
    
    );
}
export default BasketIcon;
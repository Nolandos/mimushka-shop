import React from 'react';
import { useSelector } from 'react-redux';
import './CartIcon.scss';
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => { 
    const amount = useSelector(({shopCart}) => shopCart.products.reduce((t, { amount }) => t + amount, 0));
    return (
        <div className="cart-icon">
            <FaShoppingCart />
            <div className="cart-icon__amount-field">
                <p className="cart-icon__amount">{ amount }</p>
            </div>
        </div>
    
    );
}
export default CartIcon;
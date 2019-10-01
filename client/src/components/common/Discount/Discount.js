import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Discount.scss';
import { checkDiscountCodeRequest } from '../../../redux/shopBasketReducer';

const Discount = () => {
    const dispatch = useDispatch();
    const inputEl = useRef(null);
    const request = useSelector(({ requests }) => requests.cart_request);

    const checkCode = (e) => {
        if(inputEl.current.value.length === 4 ) {
           dispatch(checkDiscountCodeRequest(inputEl.current.value));
        }
    }

    return (
        <div className="discount">
            <input 
                className="discount__input" 
                onChange={ checkCode } 
                ref={ inputEl } 
                placeholder="Kod rabatowy">
            </input>
            <p className="discount__error">{ request.error }</p>
        </div>
    );
}

export default Discount;
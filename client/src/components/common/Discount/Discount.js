import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Discount.scss';
import { checkDiscountCodeRequest } from '../../../redux/shopCartReducer';

const Discount = () => {
    const dispatch = useDispatch();
    const codeInput = useRef(null);
    const request = useSelector(({ requests }) => requests.cart_request);
    const discountName = useSelector(({shopCart}) => shopCart.discountCode.name) || '';

    const checkCode = () => {
            dispatch(checkDiscountCodeRequest((codeInput.current.value).toUpperCase()));                  
    }

    return (
        <div className="discount">
            <input 
                className="discount__input" 
                defaultValue= { discountName }
                onChange={ checkCode } 
                ref={ codeInput } 
                placeholder="Kod rabatowy">
            </input>
            { request.error !== null && <p className="discount__error">{ request.error }</p> }
        </div>
    );
}

export default Discount;
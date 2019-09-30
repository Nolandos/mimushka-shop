import React, { useRef } from 'react';
import './Discount.scss';

const Discount = () => {
    const inputEl = useRef(null);

    const checkCode = (e) => {
        if(inputEl.current.value !== 'AAA') {
            e.target.classList.add('discount__input--error');
            document.querySelector('.discount__error').style.display = "block";
        } else {
            e.target.classList.remove('discount__input--error');
            document.querySelector('.discount__error').style.display = "none";
        }
    }

    return (
        <div className="discount">
            <input 
                className="discount__input" 
                onChange={ checkCode } 
                ref={inputEl} 
                placeholder="Kod rabatowy">
            </input>
            <p className="discount__error">Błędny kod rabatowy !</p>
        </div>
    );
}

export default Discount;
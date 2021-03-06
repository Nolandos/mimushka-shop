import axios from 'axios';
import { API_URL } from '../config';
import { resetRequest, endRequest, errorRequest } from './requestsStatusReducer';

//INITIAL STATE
const initialState = {
    products: [],
    discountCode: 0
}

// ACTION NAME CREATOR
const reducerName = 'products';
const requestName = 'cart_request';
const createActionName = name => `app/${reducerName}/${name}`;

// ACTION TYPES
export const ADD_UNIT = createActionName('ADD_UNIT');
export const REMOVE_UNIT = createActionName('REMOVE_UNIT');
export const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');
export const SET_DISCOUNT = createActionName('SET_DISCOUNT');

// ACTIONS 
export const addUnit = payload => ({ payload, type: ADD_UNIT });
export const removeUnit = payload => ({ payload, type: REMOVE_UNIT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const addProduct = (id, payload) => ({ id, payload, type: ADD_PRODUCT });
export const setDiscount = (payload) => ({ payload, type: SET_DISCOUNT });

//THUNKS
export const checkDiscountCodeRequest = (name) => {
    return async dispatch => { 
        if(name.length > 3) {
            let res = await axios.get(`${API_URL}/codes/${name}`);
            if(res.data) {
                await dispatch(setDiscount(res.data));
                dispatch(endRequest(requestName));
            } else {
                await dispatch(setDiscount(0));
                dispatch(errorRequest('Błędny kod rabatowy', requestName));
            } 
        } else if (name.length === 0 ) {
            await dispatch(setDiscount(0));
            dispatch(endRequest(requestName));
        }          
    };
  };
 
export default function shopCartReducer(state=initialState, action = {}) {
    switch(action.type) {
        case ADD_UNIT:
            const productAfterAddedAmount = state.products.map(product => { 
                if(product.id === action.payload ) return {...product, amount: product.amount + 1};
                else return product;
            });
            return {...state, products: productAfterAddedAmount};
        case REMOVE_UNIT:
            const productAfterRemoveAmount = state.products.map(product => { 
                if(product.id === action.payload ) return {...product, amount: product.amount - 1};
                else return product;
            });
        return {...state, products: productAfterRemoveAmount};
        case REMOVE_PRODUCT:
            const productsNodDeleted = state.products.filter(product => product.id !== action.payload );
            return { ...state, products: productsNodDeleted };
        case ADD_PRODUCT:
            const existed_product = state.products.find(product => action.id === product.id);
            if(!existed_product) { return { ...state, products: [...state.products, action.payload] } } 
            else {
                state.products.map( item => { if(item.id === action.id) item.amount += 1 }) 
                return state;   
            }
        case SET_DISCOUNT: 
            return { ...state, discountCode: action.payload }
        default:
            return state;
    }
}
import axios from 'axios';
import { API_URL } from '../config';
import { startRequest, endRequest, errorRequest } from './requestsStatusReducer';

//INITIAL STATE
const initialState = {
    products: [],
    discount: 1
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
        dispatch(startRequest(requestName));  
      try {
        let res = await axios.get(`${API_URL}/codes/${name}`);
        if(res.data) {
            await dispatch(setDiscount(res.data.discount));
            dispatch(endRequest(requestName));
        }
        else dispatch(errorRequest('Błędny kod rabatowy', requestName));
        
      } catch(e) {
        dispatch(errorRequest(e.response.data, requestName));
      }
    };
  };
 
export default function shopBasketReducer(state=initialState, action = {}) {
    switch(action.type) {
        case ADD_UNIT:
            state.products.map(product => { if(product.id === action.payload ) product.amount++});
            return state;
        case REMOVE_UNIT:
            state.products.map(product => {if(product.id === action.payload ) product.amount--})
            return state;
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
            return { ...state, discount: 1 - action.payload }
        default:
            return state;
    }
}
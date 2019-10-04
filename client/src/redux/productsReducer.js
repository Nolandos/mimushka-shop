import axios from 'axios';
import { API_URL } from '../config';
import { startRequest, endRequest, errorRequest, resetRequest } from './requestsStatusReducer';
import sortProducts from '../utils/sortProducts';

// ACTION NAME CREATOR
const reducerName = 'products';
const requestName = 'products_request';
const createActionName = name => `app/${reducerName}/${name}`;

// ACTION TYPES
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const LOAD_PRODUCTS_PAGE = createActionName('LOAD_PRODUCTS_PAGE');

// ACTIONS 
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({payload, type: LOAD_SINGLE_PRODUCT });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_PAGE });

// THUNKS
export const loadProductsRequest = (filter) => {
    return async dispatch => {
     dispatch(startRequest(requestName));

      try {
        let res = await axios.get(`${API_URL}/products`);
        console.log(filter);
        if(filter) await sortProducts(filter, res.data);
        dispatch(loadProducts(res.data)); 
        dispatch(endRequest(requestName)); 
      } catch(e) {
        dispatch(errorRequest(e, requestName));
      }
    };
  };

export const loadSingleProductRequest = (id) => {
  return async dispatch => {
    dispatch(startRequest(requestName));
  
    try {
      let res = await axios.get(`${API_URL}/products/${id}`);
      await dispatch(loadSingleProduct(res.data));  
      dispatch(endRequest(requestName));
    } catch(e) {
      dispatch(errorRequest(e.message, requestName));
    }
  };
};

//INITIAL STATE
const initialState = {
    data: [],
    singleProduct: {},
    amount: 10,
    productsPerPage: 6,
    presentPage: 1
  };

//REDUCER
export default function ordersReducer(state = initialState, action = {}) {
    switch (action.type) {
      case LOAD_PRODUCTS:
        return  { ...state, data: action.payload };
      case LOAD_SINGLE_PRODUCT:
        return { ...state, singleProduct: action.payload };
      case LOAD_PRODUCTS_PAGE:
        return {
          ...state,
          productsPerPage: action.payload.productsPerPage,
          presentPage: action.payload.presentPage,
          amount: action.payload.amount,
          data: [...action.payload.products],
        };
      default:
        return state;
    }
  }
  
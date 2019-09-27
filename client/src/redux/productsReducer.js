import axios from 'axios';
import { API_URL } from '../config';

// ACTION NAME CREATOR
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

// ACTION TYPES
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const LOAD_PRODUCTS_PAGE = createActionName('LOAD_PRODUCTS_PAGE');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');

// ACTIONS 
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({payload, type: LOAD_SINGLE_PRODUCT });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_PAGE });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });

// THUNKS
export const loadProductsRequest = () => {
    return async dispatch => {
     dispatch(startRequest());

      try {
        let res = await axios.get(`${API_URL}/products`);
        dispatch(endRequest());
        dispatch(loadProducts(res.data));  
      } catch(e) {
        dispatch(errorRequest(e.message));
      }
    };
  };

export const loadSingleProductRequest = (id) => {
  return async dispatch => {
    dispatch(startRequest());
  
    try {
      let res = await axios.get(`${API_URL}/products/${id}`);
      await dispatch(loadSingleProduct(res.data));  
      dispatch(endRequest());
    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadProductsByPageRequest = (page, PerPage) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      const productsPerPage = PerPage;

      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;

      let res = await axios.get(`${API_URL}/products/range/${startAt}/${limit}`);

      const payload = {
        products: res.data.products,
        amount: res.data.amount,
        productsPerPage,
        presentPage: page,
      };

      dispatch(loadProductsByPage(payload));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

//INITIAL STATE
const initialState = {
    data: [],
    request: {
      pending: false,
      error: null,
      success: null
    },
    singleProduct: {},
    amount: 0,
    productsPerPage: 10,
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
      case START_REQUEST:
        return { ...state, request: { pending: true, error: null, success: null } };
      case END_REQUEST:
        return { ...state, request: { pending: false, error: null, success: true } };
      case ERROR_REQUEST:
        return { ...state, request: { pending: false, error: action.error, success: false } };
      case RESET_REQUEST:
        return { ...state, request: { pending: false, error: null, success: null } };
      default:
        return state;
    }
  }
  
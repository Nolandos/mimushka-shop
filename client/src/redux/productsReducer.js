import axios from 'axios';
import { API_URL } from '../config';
import { startRequest, endRequest, errorRequest, resetRequest } from './requestsStatusReducer';
import sortByFilters from '../utils/sortByFilter';
import priceFilters from '../utils/priceFilter';

// ACTION NAME CREATOR
const reducerName = 'products';
const requestName = 'products_request';
const createActionName = name => `app/${reducerName}/${name}`;

// ACTION TYPES
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const LOAD_PRODUCTS_PAGE = createActionName('LOAD_PRODUCTS_PAGE');

// ACTIONS 
export const loadProducts = (products, amount ) => ({ products, amount, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({payload, type: LOAD_SINGLE_PRODUCT });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_PAGE });

// THUNKS
export const loadProductsRequest = filter => {
    return async dispatch => {
     dispatch(startRequest(requestName));

      try {
        await new Promise((resolve, reject) => setTimeout(resolve, 500));
        let res = await axios.get(`${API_URL}/products`);
        let products = res.data;

        if(filter.SORT_FILTER !== 'none') products = await sortByFilters(filter, res.data);
        if(filter.PRICE_FILTER !== 'none') products = await priceFilters(filter, res.data);
        
        let amount = products.length;

        dispatch(loadProducts(products, amount)); 
        dispatch(endRequest(requestName)); 
      } catch(e) {
        dispatch(errorRequest(e, requestName));
      }
    };
  };

export const loadSingleProductRequest = id => {
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

export const removeSingleProcutRequest = id => {
  return async dispatch => {
    dispatch(startRequest(requestName));
  
    try {
      let res = await axios.delete(`${API_URL}/products/${id}`);

      dispatch(endRequest(requestName));
    } catch(e) {
      dispatch(errorRequest(e.message, requestName));
    }
  };
};

export const addNewProduct = (product, image) => {
  return async dispatch => {
    try {
      const formData = new FormData();
      formData.append('file', image);

      let res = await axios.post(`${API_URL}/products/image/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      product = {...product, image: res.data.fileName};
      res = await axios.post(`${API_URL}/products/add`, product );
      dispatch(endRequest(requestName));
    } catch(e) {
      dispatch(errorRequest(e.response.data, requestName));
    }
  };
};

export const editProductRequest = (product, image, id) => {
  return async dispatch => {
    try {
      const formData = new FormData();
      formData.append('file', image);

      let res = await axios.post(`${API_URL}/products/image/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      product = {...product, image: res.data.fileName};
      res = await axios.patch(`${API_URL}/products/${id}`, product );
      console.log(res);
    } catch(e) {
      console.log(e);
    }
  }
}

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
        return  { 
          ...state, 
          data: action.products,
          amount: action.amount
        };
      case LOAD_SINGLE_PRODUCT:
        return { ...state, singleProduct: action.payload };
      default:
        return state;
    }
  }
  
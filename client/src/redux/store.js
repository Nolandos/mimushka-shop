import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';

// import reducers
import products from './productsReducer';
import shopBasket from './shopBasketReducer';
import requests from './requestsStatusReducer';

// combine reducers
const allReducers = combineReducers({
    products,
    shopBasket,
    requests
});

//CREATE STRORE
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
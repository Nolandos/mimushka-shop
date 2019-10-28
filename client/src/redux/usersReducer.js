import axios from 'axios';
import { API_URL } from '../config';
import setAuthToken from '../utils/setAuthToken';
import isEmpty from 'is-empty';
import jwtDecode from 'jwt-decode';

import { startRequest, endRequest, errorRequest } from './requestsStatusReducer';

// ACTION NAME CREATOR
const reducerName = 'users';
const requestName = 'users_request';
const createActionName = name => `app/${reducerName}/${name}`;

// ACTION TYPES
export const SET_CURRENT_USER = createActionName('SET_CURRENT_USER');

// ACTIONS 
export const setCurrentUser = (payload) => ({ payload, type: SET_CURRENT_USER });

//THUNKS
export const checkUser = (login, password) => {
    return async dispatch => {
        dispatch(startRequest(requestName));

        try {
            const userData = {
                login,
                password
            };
            await new Promise((resolve, reject) => setTimeout(resolve, 500));
            let res = await axios.post(`${API_URL}/login`, userData);
            const { token } = res.data;
            await localStorage.setItem('jwtToken', token);
            await setAuthToken(token);
            const decoded = await jwtDecode(token);
            dispatch(setCurrentUser(decoded));
            dispatch(endRequest(requestName));
        } catch (e) {
            dispatch(errorRequest(e.response.data, requestName));
        }
    }; 
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};

const initialState = {
  isAuthenticated: false,
  user: {},
  isLogged: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        isLogged: true
      };
    default:
      return state;
  }
}
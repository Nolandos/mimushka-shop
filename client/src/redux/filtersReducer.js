// ACTION NAME CREATOR
const reducerName = 'filters';
const requestName = 'filters_request';
const createActionName = name => `app/${reducerName}/${name}`;

// ACTION TYPES
export const SET_SORT_FILTER = createActionName('SET_SORT_FILTER');

// ACTIONS 
export const setSortFilter = payload => ({ payload, type: SET_SORT_FILTER });

//INITIAL STATE
const initialState = {
   SORT_FILTER: 'none'
};

//REDUCER
export default function ordersReducer(state = initialState, action = {}) {
    switch (action.type) {
      case SET_SORT_FILTER:
        return  { ...state, SORT_FILTER: action.payload };
      default:
        return state;
    }
  }
  


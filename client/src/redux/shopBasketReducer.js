//INITIAL STATE
const initialState = []

// ACTION NAME CREATOR
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

// ACTION TYPES
export const ADD_UNIT = createActionName('ADD_UNIT');
export const REMOVE_UNIT = createActionName('REMOVE_UNIT');
export const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');

// ACTIONS 
export const addUnit = payload => ({ payload, type: ADD_UNIT });
export const removeUnit = payload => ({ payload, type: REMOVE_UNIT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const addProduct = (id, payload) => ({ id, payload, type: ADD_PRODUCT });

export default function shopBasketReducer(state=initialState, action = {}) {
    switch(action.type) {
        case ADD_UNIT:
            state.map(product => { if(product.id === action.payload ) product.amount++ })
            return state;
        case REMOVE_UNIT:
            state.map(product => {if(product.id === action.payload ) product.amount--})
            return state;
        case REMOVE_PRODUCT:
            return state.filter(product => product.id !== action.payload);
        case ADD_PRODUCT:
            let existed_product = state.find(product=> action.id === product.id);
            if(!existed_product) {
                return [...state, action.payload];
            } else {
                state.map( item => { if(item.id === action.id) item.amount += 1 }) 
            }
        default:
            return state;
    }
}
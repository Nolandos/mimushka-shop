//INITIAL STATE
const initialState = {
    products: [],
    totalAmount: 0,
    totalPrice: 0
}

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
            const productPriceAdd = state.products.find(product => action.payload === product.id).price;
            state.products.map(product => { if(product.id === action.payload ) product.amount++})
            return { ...state, totalAmount: state.totalAmount + 1, totalPrice: state.totalPrice += parseInt(productPriceAdd) };
        case REMOVE_UNIT:
            const productPriceRemove = state.products.find(product => action.payload === product.id).price;
            state.products.map(product => {if(product.id === action.payload ) product.amount--})
            return { ...state, totalAmount: state.totalAmount - 1, totalPrice: state.totalPrice -= parseInt(productPriceRemove)};
        case REMOVE_PRODUCT:
            const amountToRemove = state.products.find(product => action.payload === product.id).amount;
            const productsPriceRemove = amountToRemove *(state.products.find(product => action.payload === product.id).price);
            const productsNodDeleted = state.products.filter(product => product.id !== action.payload );
            return { ...state, products: productsNodDeleted, totalAmount: state.totalAmount - amountToRemove, totalPrice: state.totalPrice -= productsPriceRemove };
        case ADD_PRODUCT:
            const existed_product = state.products.find(product => action.id === product.id);
            if(!existed_product) {
                return {...state, products: [...state.products, action.payload], totalAmount: state.totalAmount + 1, totalPrice: state.totalPrice += parseInt(action.payload.price)};
            } else {
                state.products.map( item => { if(item.id === action.id) item.amount += 1 }) 
                return { ...state, totalAmount: state.totalAmount +1, totalPrice: state.totalPrice += parseInt(existed_product.price) }
            }
        default:
            return state;
    }
}
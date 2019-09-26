//INITIAL STATE
const initialState = 
    [
        {
        id: "5d8c76b7b4f6e8103c24e609",
        name: "Kokon",
        price: "120zł",
        additionalInfo: "Ostatnia sztuka",
        amount: 1,
        image: "http://localhost:3000/images/books.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."
        }
    ]


// ACTION NAME CREATOR
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

// ACTION TYPES
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');

// ACTIONS 
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });


export default function shopBasketReducer(state=initialState, action = {}) {
    switch(action.type) {
        case ADD_PRODUCT:
            state.map(item => {
                if(item.id === action.payload) {
                    item.amount = item.amount + 1;
                }
            }) 
            return state;
        default:
            return state;
    }
}
/*
state.products.map(product => {
    if(action.payload === product.id) {
        product.amount = product.amount +1;
       return product;
   }
   return product;
});
*/
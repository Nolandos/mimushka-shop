//INITIAL STATE
const initialState = {
    products:[
        {
        id: "5d8c76b7b4f6e8103c24e609",
        name: "Kokon",
        price: "120zł",
        additionalInfo: "Ostatnia sztuka",
        image: "http://localhost:3000/images/books.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."
        }
    ]
}


export default function shopBasketReducer(state=initialState, action = {}) {
    switch(action.type) {
        default:
            return state;
    }
}
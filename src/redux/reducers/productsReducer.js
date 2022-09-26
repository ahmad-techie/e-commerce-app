const initialProductsState = []

export const productsReducer = (state = initialProductsState, action) =>{
    switch(action.type){
        case "FETCH_PRODUCTS":
            return action.payload;
            default:
                return state;
    }
}
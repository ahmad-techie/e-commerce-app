import { ADD_ITEM, CLEAR_CART, REMOVE_ITEM } from "../types/actionTypes"
const initialCartState = []

export const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return state.concat(action.payload);
        case CLEAR_CART:
            return initialCartState;

        case REMOVE_ITEM:
            return state.filter(cartItem => cartItem.id !== action.payload)
        default: return state;
    }
}
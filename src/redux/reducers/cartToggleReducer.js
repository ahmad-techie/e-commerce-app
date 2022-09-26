import { OPEN_CART, CLOSE_CART } from "../types/actionTypes";

const initialCartState = false;

export const cartToggleReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case OPEN_CART:
            return true;
        case CLOSE_CART:
            return false;
        default: return state;
    }
}
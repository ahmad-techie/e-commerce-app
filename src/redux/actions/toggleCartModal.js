import { CLOSE_CART, OPEN_CART } from "../types/actionTypes";

export const openCartModal = ()=>{
    return {
        type: OPEN_CART
    }
}

export const closeCartModal = ()=>{
    return {
        type: CLOSE_CART
    }
}
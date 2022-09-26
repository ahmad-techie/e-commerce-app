import { ADD_ITEM } from "../types/actionTypes"

export const addToCart = (product) =>{
    return {
        type: ADD_ITEM,
        payload: product
    }
}


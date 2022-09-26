import { REMOVE_ITEM } from "../types/actionTypes";

export const removeItem = (productId) =>{
    return {
        type: REMOVE_ITEM,
        payload: productId
    }
}
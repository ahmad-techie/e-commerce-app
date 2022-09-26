
import { FETCH_PRODUCTS } from "../types/actionTypes";

const url = 'https://dummyjson.com/products';

const productsActionCreator = (products)=>{
    return {
        type: FETCH_PRODUCTS,
        payload: products
    }
}

export const fetchProducts = () => (dispatch) =>{
    fetch(url)
            .then(res => res.json())
            .then(data => dispatch(productsActionCreator(data.products)));
}
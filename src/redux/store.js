
import { createStore, compose, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import { cartToggleReducer } from "./reducers/cartToggleReducer";

import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    cartToggle: cartToggleReducer
});


const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))


export default store;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '@mui/material/Icon';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

function CartIcon() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  return (
    <div className='cart-container'>
        <h2 onClick={()=>dispatch({type: 'OPEN_CART'})}><ShoppingCartRoundedIcon fontSize='large' className='cart-icon'/> <span className='cart-items'>{products.length}</span></h2>
    </div>
  )
}

export default CartIcon
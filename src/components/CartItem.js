import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/actions/removeItem';
function CartItem({product}) {

    const dispatch = useDispatch();

    const removeItemFromCart = () =>{
        console.log(product.id);
        dispatch(removeItem(product.id))
    }
  return (
    <div className='product'>
        <p><span className='product-title'>{product.title}</span> - ${product.price}</p>
        <CloseIcon onClick={removeItemFromCart} className='remove-icon' color="primary"/>
    </div>
  )
}

export default CartItem
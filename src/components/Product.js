import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/addToCart';

function Product({product}) {
    const dispatch = useDispatch();

  return (
    <div className='product'>
        <p><span className='product-title'>{product.title}</span> - ${product.price}</p>
        <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  )
}

export default Product
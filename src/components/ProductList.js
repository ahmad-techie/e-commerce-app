import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/fetchProducts';
import Product from './Product'

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
        console.log(products);
    }, [])

    return (
        <div className='product-list'>
            {products.map(product => <Product key={product.id} product={product} />)}
        </div>
    )
}

export default ProductList
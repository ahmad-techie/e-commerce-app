import React from 'react'
import CartIcon from './CartIcon'
import HomeIcon from '@mui/icons-material/Home';

function Header() {
  return (
    <header>
        <h2 className='home'><HomeIcon fontSize='large' /></h2>
        <CartIcon/>
    </header>
  )
}

export default Header
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem';
import { CLEAR_CART } from '../redux/types/actionTypes';
import { clearCartAction } from '../redux/actions/clearCart';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll'
};
function Cart() {
    const cart = useSelector(state => state.cart)
    const open = useSelector(state => state.cartToggle)

    const dispatch = useDispatch();

    const handleClose = () => {
        console.log('closed');
        dispatch({ type: 'CLOSE_CART' })
    }

    let total = 0;
    cart.map(item => total += item.price)

    const clearCart = () =>{
        dispatch(clearCartAction())
        console.log('clear cart');
    }

    return (
        <div className='cart-modal'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {cart.length > 0 ? <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Cart
                    </Typography>
                    <Typography id="close-cart">
                        <CloseIcon onClick={handleClose} />
                    </Typography>
                    <Box>
                        {cart.map(item => <CartItem key={item.id} product={item} />)}
                    </Box>
                    <div className='cart-footer'>
                        <h5 className='cart-total'>Total: ${total}</h5>
                        <button onClick={clearCart} className='clear-btn'>Clear Cart</button>
                    </div>
                    
                </Box> : <Box sx={style}><Typography id="close-cart">
                    <CloseIcon onClick={handleClose} />
                </Typography><Typography>Cart is emptry</Typography></Box>}
            </Modal>
        </div>
    );
}

export default Cart;

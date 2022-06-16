import {Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import Wrapper from '../assets/wrappers/CartContent'
import CartColums from './CartColums'
import CartItem from './CartItem'
import CartTotals from './CartTotals'



const CartContent = () => {
    const {cart, clearCart} =useCartContext()

    return (
        <Wrapper className='section section-center'>

            <CartColums/>
            {cart.map((item) => {
                return <CartItem key={item.id} {...item} />
            })}
            <hr/>
            <div className='link-container'>
                <Link to='/products' className='link-btn'>
                    continue shopping
                </Link>
                <button
                    type='button'
                    className='link-btn clear-btn'
                    onClick={clearCart}
                >
                    clear shopping cart
                </button>
            </div>
            <CartTotals />
        </Wrapper>
    )
}

export default CartContent
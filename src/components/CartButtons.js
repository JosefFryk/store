import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/userContext'
import { useCartContext } from '../context/cartContext'
import {useProductsContext} from '../context/productContext'
import Wrapper from '../assets/wrappers/CartButtons'




const CartButtons = () => {
    const { closeSidebar } = useProductsContext()
    const { total_items, clearCart } = useCartContext()
    const { loginWithRedirect, myUser, logout } = useUserContext()

    const TotalNumberItems = total_items
    return (
      <Wrapper className='cart-btn-wrapper'>
        <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
          Cart
          <span className='cart-container'>
            <FaShoppingCart />
            <span className='cart-value' style={{backgroundColor : TotalNumberItems === 0 ? 'red': 'green'}} >{total_items}</span>
          </span>
        </Link>
        {myUser ? (
          <button
            type='button'
            className='auth-btn'
            onClick={() => {
              clearCart()
              localStorage.removeItem('user')
              logout({ returnTo: window.location.origin })
            }}
          >
            Login <FaUserMinus />
          </button>
        ) : (
          <button type='button' className='auth-btn' onClick={loginWithRedirect}>
            Login <FaUserPlus />
          </button>
        )}
      </Wrapper>
    )
  }
  
  export default CartButtons
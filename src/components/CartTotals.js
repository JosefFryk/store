import { useCartContext } from '../context/cartContext'

import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CartTotals'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()
 

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{' '}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        
      </div>
    </Wrapper>
  )
}

export default CartTotals
import { PageHero, StripeCheckout } from "../components";
import Wrapper from '../assets/wrappers/Checkout';
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";


const Checkout = () => {
    const {cart} =useCartContext()
    return (
        <main>
            <PageHero title='checkout' />
            <Wrapper>
                {cart.length < 1 
                ?
                 <div>
                    <h2>cart is empty</h2>
                    <Link to= '/products' className="btn">
                        fill it
                    </Link>
                 </div>
                : 
                 <StripeCheckout/>}
             
            </Wrapper>
        </main>
    )
}

export default Checkout
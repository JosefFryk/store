import Wrapper from "../assets/wrappers/UpperNavMenu"
import {Link} from 'react-router-dom'


const UpperNavMenu = () => {
   return ( 
        <Wrapper>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/products">Products</Link>
            </div>
            <div>
                <Link to="/cart">Cart</Link>
            </div>         
            <div>
                <Link to="/login">Login</Link>
            </div>         
                   
        </Wrapper> 
        )
}

export default UpperNavMenu
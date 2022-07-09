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
                <Link to="/about">About</Link>
            </div>         
            <div>
                <Link to="/register">Register</Link>
            </div>         
                   
        </Wrapper> 
        )
}

export default UpperNavMenu
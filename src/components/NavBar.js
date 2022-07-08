import Wrapper from "../assets/wrappers/Navbar"
import Logo from './Logo'
import SearchBar from "./SearchBar"
import UpperNavMenu from "./UpperNavMenu"
import CartButtons from '../components/CartButtons'





const Navbar = () => {
 


  return (
    

      <Wrapper>
        
        <div className="logo-box">
          <Logo />
          <h3 className='logo-text'>Shopenze</h3>
        </div>

        <div className="right-box">
          <div className="right-top-box">
            <UpperNavMenu/>
          </div>
          <div className="right-bottom-box">

            <div className="search-box">
              <SearchBar/>           
            </div>
            <div className="kosik-box">
              <CartButtons />
            </div>
          </div>
        </div>
    
      </Wrapper>
    
    )
  }
  
  export default Navbar
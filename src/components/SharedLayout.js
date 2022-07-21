import Navbar from './NavBar'
import Wrapper from '../assets/wrappers/SharedLayout'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'




const SharedLayout = () => {
    return (

        
            
    
        <Wrapper>
        
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          <Footer/>
          </div>
        </div>
 
        </Wrapper>


    )
}

export default SharedLayout
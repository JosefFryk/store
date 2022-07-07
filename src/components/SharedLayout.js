import Navbar from './NavBar'
import Wrapper from '../assets/wrappers/SharedLayout'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'




const SharedLayout = () => {
    return (

        
            
    
        <Wrapper>
      <main className='dashboard'>
        
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          <Footer/>
          </div>
        </div>
      </main>
 
        </Wrapper>


    )
}

export default SharedLayout
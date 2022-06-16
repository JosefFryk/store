import Navbar from './NavBar'
import Sidebar from './SideBar'
import Wrapper from '../assets/wrappers/SharedLayout'
import { Outlet } from 'react-router-dom'




const SharedLayout = () => {
    return (

        
            
    
        <Wrapper>
      <main className='dashboard'>
        <Sidebar/>
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
 
        </Wrapper>


    )
}

export default SharedLayout
import { Route, Navigate, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const AuthRoute = ({ children, ...rest }) => {
  const { user } = useAuth0()

  return user ? <Outlet/> : <Navigate to='/'/>

  
}
export default AuthRoute
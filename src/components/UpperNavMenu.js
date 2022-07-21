import Wrapper from "../assets/wrappers/UpperNavMenu"
import {Link} from 'react-router-dom'
import { links } from '../utils/constants'
import { useUserContext } from '../context/userContext'


const UpperNavMenu = () => {
    const { myUser } = useUserContext()
   return ( 
        <Wrapper>
           {links.map((link) => {
               const { id, text, url } = link
               return (
                   <li key={id}>
                    <Link to={url}>{text}</Link>
                </li>
                )
            })}
            {myUser && (
                <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}          

        </Wrapper> 
        )
}

export default UpperNavMenu
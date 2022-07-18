import Wrapper from "../assets/wrappers/UpperNavMenu"
import {Link} from 'react-router-dom'
import { links } from '../utils/constants'


const UpperNavMenu = () => {
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
        </Wrapper> 
        )
}

export default UpperNavMenu
import { SocialIcon } from "react-social-icons"
import Wrapper from "../assets/wrappers/Footer"

const Footer = () => {
    return(
        <Wrapper>
            <div className="footer-address">
                <h2>contact</h2>
                <h4>+42057811484</h4>
                <h4>info@shopenze.email.com</h4>
                <h4>Praha</h4>
            </div>
            <div className="footer-info">
                <h2>info</h2>
                <h4>FAQ</h4>
                <h4>About us</h4>
                <h4>Contact us</h4>
            </div>
            <div>
                <h2>social</h2>
                <div className="footer-icons">
                    <div className="icon" >
                        <SocialIcon 
                        network="twitter" 
                        target="_blank" 
                        url="https://twitter.com/home"
                        style={{ height: 40, width: 40 }}
                        />
                    </div>
           
               
                
                    <div className="icon" >
                        <SocialIcon 
                        network="instagram" 
                        target="_blank" 
                        url="https://instagram.com"
                        style={{ height: 40, width: 40 }}
                        />
                    </div>
                
                
                    <div className="icon" >
                        <SocialIcon 
                        network="facebook" 
                        target="_blank" 
                        url="https://facebook.com"
                        style={{ height: 40, width: 40 }}
                        />
                    </div>
                    <div className="icon" >
                        <SocialIcon 
                        network="discord" 
                        target="_blank" 
                        url="https://discord.com"
                        style={{ height: 40, width: 40 }}
                        />
                    </div>
                
                </div>
            </div>
        </Wrapper>
    )

}


export default Footer
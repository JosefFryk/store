import Wrapper from '../assets/wrappers/About'
import Accordion from '../components/Accordion';
import { accordionData } from '../utils/constants';
import bgImage from '../assets/images/bedImg.png';



const About = () => {
    return (
        <Wrapper>
            <div className='about-title-box'>
                <div>
                    <h1>A better furniture brand</h1>
                </div>
            </div>

            <div className='about-info-box'>
                <p>
                    With Shopenze, feel confident that your furniture doesn't sacrifice your values. 
                    No greenwashing, no chemicals, no sacrificing your values. 
                    Luxury furniture for less without the stress.
                </p>
            </div>
            <div className='about-bg-mission' style={{background: 'url('+ bgImage +')'}}>
                <div className='about-text-mission'>
                    <h3>Our mission</h3>
                    <p>
                    We're setting a new standard for earth-friendly, affordable, and beautiful furniture. 
                    Our work is just beginning and we're so glad you're with us.
                    </p>
                </div>
            </div>
            <div className='about-details-expands'>
                <div className='about-details-rightside'>
                    <h3>We're into the details</h3>
                    <p>From the big picture to the nuts and bolts, we're making better furniture for you and the planet.</p>
                    <div className="accordion">
                      <Accordion/>
                    </div>
                </div>
               
            </div>

        </Wrapper>
    )
}

export default About
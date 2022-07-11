import { useState } from 'react';
import { accordionData } from '../utils/constants';
import AccordionItems from './AccordionItems';
import AccordionImage from './AccirdionImage';
import Wrapper from '../assets/wrappers/Accordion';

const Accordion = () => {
  const [active, setActive] = useState(1);

  const handleToggle = (id) => {
    if (active === id) {
     return setActive("0");
    }
    setActive(id);
   };
  
  return (
    <Wrapper>

      <ul className="accordion">
        <div className='about-details-leftside'>
           <h3>We're into the details</h3>
           <p>From the big picture to the nuts and bolts, we're making better furniture for you and the planet.</p>
        </div>
      {accordionData.map(({ title, content,id }) => (
        <AccordionItems 
        key={id}
        active={active === id}
        onToggle={() => handleToggle(id)}
        title={title}
        content={content}
          />
          ))}
      </ul>
      <div className='img-container'>
      {accordionData.map(({imageUrl, imageAlt,id }) => (
        <AccordionImage 
        key={id}
        active={active === id}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
          />
          ))}
      </div>
    </Wrapper>
    
     
  );
};

export default Accordion;
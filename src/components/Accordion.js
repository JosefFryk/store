import { useState } from 'react';
import { accordionData } from '../utils/constants';
import AccordionItems from './AccordionItems';
import Wrapper from '../assets/wrappers/Accordion';

const Accordion = () => {
  const [active, setActive] = useState("0");

  const handleToggle = (id) => {
    if (active === id) {
     return setActive("0");
    }
    setActive(id);
   };
  
  return (
    <Wrapper>

      <ul className="accordion">
      {accordionData.map(({ title, content, imageUrl, imageAlt,id }) => (
        <AccordionItems 
        key={id}
        active={active === id}
        onToggle={() => handleToggle(id)}
        title={title}
        content={content}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
          />
          ))}
      </ul>
    </Wrapper>
    
     
  );
};

export default Accordion;
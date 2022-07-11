import { Icon } from '@iconify/react';
import Wrapper from '../assets/wrappers/AccordionItems';

const AccordionItems = ({ title, content, active, onToggle }) => {

return (
    <Wrapper>            
        <li className={`accordion_item ${active ? "active" : ""}`}>
            <button className="button" onClick={onToggle}>
                <div className='button-inner-text'>
                 <span>{title}</span>
                 <span className="control">{active ? <Icon icon="akar-icons:chevron-up" /> : <Icon icon="akar-icons:chevron-down" />} </span>
                </div>
            </button>
            <div
                className="content_wrapper"
                style={
                    active
                    ? { height: '160px' }
                    : { height: "0px" }
                }
                >
                {active && <div className='expanded-content'>
                    <div className="content">{content}</div>
                </div>
                
                }
            </div>
        </li>
     
    </Wrapper>
  );
}


export default AccordionItems
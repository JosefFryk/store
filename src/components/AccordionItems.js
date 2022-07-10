import { useRef } from 'react';
import Wrapper from '../assets/wrappers/About';

const AccordionItems = ({ title, content,imageUrl, imageAlt, active, onToggle }) => {

    




const contentEl = useRef();

return (
    <Wrapper>            
        <li className={`accordion_item ${active ? "active" : ""}`}>
            <button className="button" onClick={onToggle}>
                {title}
                <span className="control">{active ? "—" : "+"} </span>
            </button>
            <div
                ref={contentEl}
                className="content_wrapper"
                style={
                    active
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
                }
                >
                {active && <div>
                    <div className="content">{content}</div>
                    <div className='content-img-box'>
                        <img className='content-img'  src={imageUrl} alt={imageAlt}/>
                    </div>
                </div>
                
                }
            </div>
        </li>
    </Wrapper>
  );
}


export default AccordionItems
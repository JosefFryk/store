import Wrapper from '../assets/wrappers/AccordionImage'


const AccordionImage = ({active, imageUrl, imageAlt}) => {
return (
    <Wrapper>
        <div className={`content-img-box ${active ? "active" : ""}`}>
             <img className='content-img '  src={imageUrl} alt={imageAlt}/>
        </div>
    </Wrapper>
)
}

export default AccordionImage
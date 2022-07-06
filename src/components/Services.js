import { services } from '../utils/constants'
import Wrapper from '../assets/wrappers/Services'

const Services = () => {
  return (
    <Wrapper> 
        <article className='header'>
          <h3>
            custom furniture <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            quisquam saepe id reiciendis sunt, repudiandae libero amet rem quia
            quod?
          </p>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article key={id} className='service'>
                <span className='icon'>{icon} </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
    </Wrapper>
  )
}

export default Services
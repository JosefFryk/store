import Product from './Product'
import Wrapper from '../assets/wrappers/CardBox'

const CardBox = ({ products }) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}

export default CardBox
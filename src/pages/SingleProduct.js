import Wrapper from '../assets/wrappers/SingleProducts'
import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useProductsContext } from '../context/productContext'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'


const SingleProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    // eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate.push('/')
      }, 3000)
    }
    // eslint-disable-next-line
  }, [error])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    imageAttach,
  } = product
  console.log(product.featured)
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className=' product-center'>
          <ProductImages images={imageAttach} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'> {formatPrice(price)}</h5>
            <p className='desc'> {description}</p>
            <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>SKU : </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
   
  )
}

export default SingleProduct
import { useFilterContext } from '../context/filterContext'
import CardBox from './CardBox'
import ListBox from './ListBox'


const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext()
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search...
      </h5>
    )
  }
  if (grid_view === false) {
    return <ListBox products={products} />
  }
  return <CardBox products={products}>product list</CardBox>
}

export default ProductList
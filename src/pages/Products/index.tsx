import { useGetProducts } from '../../hooks/useGetProducts'
import Product from './Product'

const Products = () => {
  const { products } = useGetProducts()

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
      {products.length > 0 &&
        products.map(product => (
          <Product key={product._id} product={product} />
        ))}
    </main>
  )
}
export default Products

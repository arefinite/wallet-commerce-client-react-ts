import { IProduct } from '../../models/interfaces'
import { FaCartPlus } from 'react-icons/fa'

interface IProps {
  product: IProduct
}

const Product = ({ product }: IProps) => {
  const { productName, description, price, stock, imageUrl } = product
  return (
    <div className='shadow'>
      <div className='flex justify-center pt-8'>
        <img src={imageUrl} alt={productName} />
      </div>
      <div className='pt-6 p-4 space-y-2'>
        <h2>{productName}</h2>
        <p>{description}</p>
        <p>In Stock: {stock > 0 ? stock : 'Stock Out'}</p>
        <p>
          Price: <strong>${price}</strong>{' '}
        </p>
        <button className='bg-dark text-white px-2 py-1 w-full justify-center hover:bg-darker rounded flex gap-2 items-center'>
          <FaCartPlus />
          <span>Add To Cart (0)</span>
        </button>
      </div>
    </div>
  )
}
export default Product

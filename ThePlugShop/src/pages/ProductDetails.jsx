// import useParams
import {useParams} from 'react-router-dom'

// import cart context
import { CartContext } from '../contexts/CartContext'

//  import product context
import { ProductContext } from '../contexts/ProductContext'
import { useContext } from 'react'


const ProductDetails = () => {
  // get the product id from url
  // const { _id } = useParams()
  // const {products}= useContext(ProductContext)
  const {addToCart} = useContext(CartContext)
  const {products} = useContext(ProductContext)
  

  // get the single product based on _id
  const {_id} = useParams() 
  const product = products.find(item => {
    return item._id === _id
  })
  // console.log(product._id)


// if product is not found
  if (!product) {
    return(

    <section className='h-screen flex justify-center items-center'>
      Loading...
    </section>
    )
  }

  // destructure product
  const {name, price, description, images} = product
  // console.log(name)
  return (
    <section className='bg-pink-200 pt-32 pb-12 lg:py-32 h-screen'>
      <div className="container mx-auto">
        {/* image och text wrapper */}
        <div className='flex flex-col lg:flex-row'>
        {/* image */}
        <div className='flex flex-1 justify-center items-center
        mb-8 lg:mb-0'>
          <img className='max-w-[200px] lg:max-w-sm' src={images[0]} alt="" />
        </div>
        {/* text */}
        <div className='flex-1 text-center lg:text-left'>
        <h1 className='text-[22px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{name}</h1>
        {/* price */}
        <div className='text-xl text-red-700 font-medium mb-6 '>SEK{price}
        </div>
        <p className='mb-8 px-6'>{description}</p>
        <button onClick={() => addToCart(product, product._id)} className='bg-black text-white py-4 px-8 rounded-xl'>Add to cart</button>
        </div>
        </div>
      </div>
    </section>
  )
}
export default ProductDetails
// import useParams
import {useParams} from 'react-router-dom'

// import cart context
import { CartContext } from '../contexts/CartContext'

//  import product context
import { ProductContext } from '../contexts/ProductContext'
import { useContext, useState, useEffect } from 'react'


const ProductDetails = () => {
  // get the product id from url
  const { _id } = useParams()
  console.log('Parsed _id:', parseInt(_id));
  const {products}= useContext(ProductContext)
  const {addToCart} = useContext(CartContext)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  

  // get the single product based on _id

  useEffect(() => {
    console.log('Parsed _id:', parseInt(_id));
    console.log('products:', products);
  
    if (products.length === 0) {
      // Products array is empty, handle accordingly (maybe show a loading message)
      console.log('Products array is empty');
      return;
    }
  
    const foundProduct = products.find((item) => item._id === parseInt(_id));
  
    if (!foundProduct) {
      // Product with the specified _id not found, handle accordingly
      console.log('Product not found');
      return;
    }
  
    console.log('found product:', foundProduct);
    setProduct(foundProduct);
    setLoading(false);
  }, [products, _id]);



  // destructure product
  const {name, price, description, image} = product
  
  return (
    <section className='pt-32 pb-12 lg:py-32  h-screen'>
      <div className="container mx-auto">
        {/* image och text wrapper */}
        <div className='flex flex-col lg:flex-row'>
        {/* image */}
        <div className='flex flex-1 justify-center items-center
        mb-8 lg:mb-0'>
          <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
        </div>
        {/* text */}
        <div className='flex-1 text-center lg:text-left'>
        <h1 className='text-[22px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{name}</h1>
        {/* price */}
        <div className='text-xl text-red-700 font-medium mb-6 '>${price}
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
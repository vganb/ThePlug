import { useContext } from "react"
// Imort link
import { Link } from 'react-router-dom'

// icons
import { BsPlus, BsEyeFill } from "react-icons/bs";

// import cart context
import { CartContext } from "../contexts/CartContext";

export const Product = ({product}) => {

  const {addToCart }= useContext(CartContext)

// destructe product
  const { _id, images, category, name, price} = product

  return (
    <div>
        <div className="border border-gray-300 h-[300px] mb-4 
          relative overflow-hidden group transition rounded">
            <div className="w-full h-full flex justify-center items-center ">
              {/* Image */}
                <div className="w-[200px] mx-auto flex justify-center items-center">
               <img 
               className="w-[300px] group-hover:scale-110"
               src={images[0]} 
               alt={name} />
                </div>
                
            </div>
            {/* Buttons */}
            <div className="absolute top-3 right-3 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
              <button onClick={() => addToCart(product, _id)}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 hover:bg-red-700 rounded-xl">
                <BsPlus className="text-3xl"/>
              </div>
              </button>
              <Link to={`/product/${_id}`} className="w-12 h-12 bg-white hover:bg-red-700/10  flex justify-center items-center text-primary drop-shadow-xl rounded-xl">
              <BsEyeFill />
              </Link>


         
              </div>
          </div>
          {/* category */}
            <div>
              <div className="text-sm capitalize text-gray-400 mb-1">{category}</div>
              <Link to={`/product/${_id}`} >
              <h2 className="font-semibold mb-1">{name}</h2>
              </Link>
              <div className="font-semibold">SEK {price}</div>
            </div>
    </div>
  )
}

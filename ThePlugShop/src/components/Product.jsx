import { useContext } from "react"
import { Link } from 'react-router-dom'

import { BsPlus, BsEyeFill } from "react-icons/bs";

export const Product = ({product}) => {
  
  console.log(product)

  const { id, image, category, title, price} = product

  return (
    <div>
        <div className="border border-gray-600 h-[300px] mb-4 
          relative overflow-hidden group transition rounded">
            <div className="w-full h-full flex justify-center items-center ">
              {/* Image */}
                <div className="w-[200px] mx-auto flex justify-center items-center">
               <img 
               className="w-[150px] group-hover:scale-110"
               src={image} 
               alt="" />
                </div>
                
            </div>
            {/* Buttons */}
            <div>
              <button className="absolute top-3 right-3 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all ">
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <BsPlus className="text-3xl"/>
              </div>
              <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
              <BsEyeFill />
              </Link>
              </button>


         
              </div>
          </div>
          {/* category */}
            <div>
              <div className="text-sm capitalize text-gray-400 mb-1">{category}</div>
              <Link to={`/product/${id}`} >
              <h2 className="font-semibold mb-1">{title}</h2>
              </Link>
              <div className="font-semibold">SEK {price}</div>
            </div>
    </div>
  )
}

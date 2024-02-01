import { useContext } from "react"
// import link
import { Link } from "react-router-dom"

// icons
import  {IoMdClose, IoMdRemove, IoMdAdd} from 'react-icons/io'

// import cart context
import {CartContext} from '../contexts/CartContext'


export const CartItem = ({item}) => {
  const { removeFromCart,increaseAmount, decreaseAmount } = useContext(CartContext)



  // destructure item
  const {_id, name, images, price, amount} = item
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-400 w-full font-light text-gray-600">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* Image */}
        <Link to={`/product/${_id}`}>
        <img className="max-w-[80px]" src={images[0]} alt="" />
        </Link>
        {/* title and remove icon */}
        <div className="w-full flex flex-cols">
          <Link to={`/product/${_id}`} className="text-sm uppercase 
          font-medium max-w-[240px] 
          text-primary hover:underline">{name}
          </Link>

            </div>
          {/* remove icon */}
          <div onClick={() => removeFromCart(_id)} className="text-2xl cursor-pointer">
            <IoMdClose className="text-gray-400 hover:text-red-500
            transition"/>
          </div>
          <div className="bg-green-400/60 flex gap-x-1  h-[36px] text-sm">
          {/* qty */}
          <div className="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium">
            {/* minus icon */}
            <div onClick={()=> decreaseAmount(_id)} className=" flex-1 h-full flex justify-center items-center cursor-pointer">
            <IoMdRemove/>
            </div>
            {/* amount */}
            <div className="flex-1 h-full flex justify-center items-center px-2">{amount}</div>
            {/* plus icon */}
            <div onClick={() => increaseAmount(_id)} className="flex-1 flex 
            justify-center items-center cursor-pointer">
            <IoMdAdd/>
            </div>
          </div>
          {/* item price */}
          <div className="flex-1 flex items-center justify-around">SEK {price}</div>
          {/* final price */}
          {/* make the price at 2 dec */}

          <div className="flex-1 flex justify-end item-center text-black font-medium">
            {`SEK ${parseFloat(price * amount)}`}</div>
          </div>
        </div>
          
    </div>
  )
}

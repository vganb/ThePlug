// import link
import { Link } from "react-router-dom"

// icons
import  {IoMdClose, IoMdRemove, IoMdAdd} from 'react-icons/io'
export const CartItem = ({item}) => {
  // destructure item
  const {id, title, image, price, amount} = item
  return (
    <div>
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* Image */}
        <Link to={`/product/${id}`}>
        <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        {/* title and remove icon */}
        <div className="w-full flex flex-cols">
          <Link to={`/product/${id}`} className="text-sm uppercase 
          font-medium max-w-[240px] 
          text-primary hover:underline">{title}
          </Link>
          {/* remove icon */}
          <div className="text-xl cursor-pointer">
            <IoMdClose className="text-gray-400 hover:text-red-500
            transition"/>
          </div>
        </div>
      </div>
          <div className="bg-pink-300 flex gap-x-2 h-[36px] text-sm">
          {/* qty */}
          <div className="flex flex-1 max-w-[100px] bg-blue-600 items-center h-full border text-black font-medium">
            {/* minus icon */}
            <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
            <IoMdRemove/>
            </div>
            {/* amount */}
            <div className="h-full flex justify-center items-center px-2">{amount}</div>
            {/* plus icon */}
            <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
            <IoMdAdd/>
            </div>
          </div>
          {/* item price */}
          <div>item price</div>
          {/* final price */}
          <div>final price</div>
          </div>
    </div>
  )
}

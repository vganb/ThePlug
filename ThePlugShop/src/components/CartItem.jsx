// import link
import { Link } from "react-router-dom"

// icons
import  {IoMdClose} from 'react-icons/io'
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
        <div>
          <Link to={`/product/${id}`} className="text-sm uppercase 
          font-medium max-w-[240px] 
          text-primary hover:underline">{title}
          </Link>
          {/* remove icon */}
          <div>
            <IoMdClose className="text-gray-400 hover:text-red-500
            transition"/>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useContext } from "react"

// Link
import { Link } from "react-router-dom"

// icons
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'


// componenets
import {CartItem} from '../components/CartItem'

// import sidebar context
import {SidebarContext} from '../contexts/SidebarContext'
// import cart context
import {CartContext} from '../contexts/CartContext'



export const Sidebar = () => {
  
  const {isOpen, handleClose }= useContext(SidebarContext)

    const {cart, clearCart, total, itemAmount} = useContext(CartContext)

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'}  w-full bg-white fixed top-0 h-full shadow-xl md:w-[35vw] xl:max-w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
       <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-md font-semibold">Shopping Cart ({itemAmount})</div>
          <div onClick={handleClose} 
          className="cursor-pointer w-8 h-8 flex justify-center items-center">
            <IoMdArrowForward className='text-2xl' />
          </div>
       </div>
       <div className="flex flex-col gap-y-2 h-[420px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
        return <CartItem item={item} key={item._id}/>
       })}
       </div>
       <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
        {/* total amount */}
        <div className="uppercase font-semibold">
          <span className="mr-2">Total:</span>${parseFloat(total).toFixed(2)}
        </div>
       {/* clear cart icon */}
          <div onClick={clearCart} className="cursor-pointer py-4 bg-red-400 text-white w-12 h-12 flex text-2xl justify-center items-center rounded-xl">
            <FiTrash2 />
            </div>
          </div>
          <Link to={'/'} className="bg-gray-300 flex p-4 justify-center items-center text-black w-full font-medium rounded-xl">View Cart</Link>
          <Link to={'/'} className="bg-black flex p-4 justify-center items-center text-white w-full font-medium rounded-xl" >Checkout</Link>
       </div>
    </div>
  )
}

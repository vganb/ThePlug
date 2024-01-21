import { useContext } from "react"

// Link
import { Link } from "react-router-dom"

// icons
import {IoMdArrowForward} from 'react-icons/io'
// import {Fitrash2} from 'react-icons/fi'


// componenets
import {CartItem} from '../components/CartItem'

// import sidebar context
import {SidebarContext} from '../contexts/SidebarContext'

export const Sidebar = () => {
  
  const {isOpen, handleClose }= useContext(SidebarContext)

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'}  w-full bg-white fixed top-0 h-full shadow-xl md:w-[35vw] xl:max-w 30vw transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
       <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-md font-semibold">Shopping Cart (0)</div>
          <div onClick={handleClose} 
          className="cursor-pointer w-8 h-8 flex justify-center items-center">
            <IoMdArrowForward className='text-2xl' />
          </div>
       </div>
    </div>
  )
}

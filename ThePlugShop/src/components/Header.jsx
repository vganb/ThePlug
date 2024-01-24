import { useContext } from "react"
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext"
// cart context
import { CartContext } from "../contexts/CartContext"
// import icons
import {BsBag} from 'react-icons/bs'

import { Link } from  'react-router-dom'

import thePlugLogo from "../assets/thePlugLogo.png";

export const Header = () => {

  const { isOpen, setIsOpen} = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)
  return (
    <header className="bg-green-900/70 py-5">
    <div className=" container mx-auto flex items-center justify-between h-full">
      
      {/* logo */}
    <Link to={'/'}>
      <div className="flex justify-center items-center">
      <img className="h-[140px] w-[260px]" src={thePlugLogo} alt="" />
      </div>
      </Link>
      {/*  cart*/}

    <div 
    onClick={() => setIsOpen(!isOpen)} 
    className="cursor-pointer flex relative max-w-[50px]"
    >
      <BsBag className="text-3xl"/>
      <div className="bg-red-500 absolute -right-0 -bottom-2 
      text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
        {itemAmount}
        </div>
      </div>
    </div>
    </header>
  )
}
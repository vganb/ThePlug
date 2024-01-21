import { useContext } from "react"
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext"
// import icons
import {BsBag} from 'react-icons/bs'

export const Header = () => {

  const { isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <div>
    <div>Header</div>
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
      <BsBag className="text-3xl"></BsBag></div>
    </div>
  )
}
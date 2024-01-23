import { useContext } from "react"
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext"
// import icons
import {BsBag} from 'react-icons/bs'

// import thePlugLogo from "../assets/thePlugLogo.png";

export const Header = () => {

  const { isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <header className="bg-green-900">
    <div>Header
      {/* <img src={thePlugLogo} alt="" /> */}</div>
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
      <BsBag className="text-3xl"></BsBag></div>
    </header>
  )
}
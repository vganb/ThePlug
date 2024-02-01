import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Footer } from "../components/Footer"


function RootLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Sidebar/>
        <Footer/>
    </div>
  )
}
export default RootLayout
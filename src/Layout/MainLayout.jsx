import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Header/Navbar/Navbar"


export const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

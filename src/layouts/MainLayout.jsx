import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return <div className="w-screen h-screen flex flex-col">
        <Navbar />
        <div className="wrapper flex-1 bg-gray-100">
            <Outlet />
        </div>
    </div>
}

export default MainLayout;
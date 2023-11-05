import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return <div className="w-screen h-screen flex flex-col">
        <Navbar />
        <div className="wrapper w-screen flex-1 bg-gray-100 p-2">
            <Outlet />
        </div>
    </div>
}

export default MainLayout;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return <>
        <Navbar />
        <div className="wrapper w-screen h-screen bg-gray-100">
            <Outlet />
        </div>
    </>
}

export default MainLayout;
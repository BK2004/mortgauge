import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return <div className="w-full h-screen flex flex-col">
        <Navbar />
        <div className="wrapper w-full flex-1 bg-gray-100 p-2">
            <Outlet />
        </div>
    </div>
}

export default MainLayout;
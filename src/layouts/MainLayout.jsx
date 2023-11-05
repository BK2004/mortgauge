import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return <>
        <div className="wrapper bg-neutral-100 w-full h-screen">
            <Outlet />
        </div>
    </>
}

export default MainLayout;
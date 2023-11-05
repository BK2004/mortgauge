import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return <>
        <div className="wrapper">
            <Outlet />
        </div>
    </>
}

export default MainLayout;
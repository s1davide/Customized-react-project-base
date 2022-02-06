import React from 'react'
import {Outlet} from "react-router-dom";
import "./MainLayout.scss";
const MainLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default MainLayout

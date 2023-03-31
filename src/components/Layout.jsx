import { useState } from "react";
import { Routes, Route, } from 'react-router-dom'
import { PrivateRoutes } from "../routes/PrivateRoutes";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
         setSidebarOpen(true);
    }
    const closeSidebar = () => {
         setSidebarOpen(false);
    }
    return (
        <div className="container-layout">
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            <main>
                <Header sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
                <Routes>
                    {PrivateRoutes.map((privateRoute, i) => {
                        return <Route exact key={ i } path={ privateRoute.link } element={ privateRoute.component } />
                    })}
                </Routes>
            </main>
        </div>
    )
}

export default Layout
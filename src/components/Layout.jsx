import { useState } from "react";
import Dashboard from "../pages/Dashboard";
import DashboardChart from "./Chart";
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
                <Dashboard />
            </main>
        </div>
    )
}

export default Layout
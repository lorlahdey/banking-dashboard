import { NavLink } from "react-router-dom";
import { navLists } from "../helpers/data";

const Sidebar = ({sidebarOpen, closeSidebar}) => {

    return (
        <aside className={`${sidebarOpen ? "sidebar_responsive" : "none"}`} >
            <div className="top">
                <div className="logo">
                    <img src="/images/logo/blue-logo.svg" alt="openPay-logo" />
                    <h2>OpenPay</h2>
                </div>
                <div  onClick={() => closeSidebar()}  aria-hidden="true" className="ms-auto p-3 close-btn">
                    <span className="material-icons-sharp">close</span>
                </div>
            </div>
            <div className="sidebar">
                <ul className="d-flex flex-column h-100">
                    {navLists.map((navItem, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={navItem.route} className={ ({isActive}) => isActive ? 'active navlink' : 'navlink'} >
                                    <span className="link">
                                        <img src={navItem.imagesrc} alt="" />
                                        <h3>
                                            {navItem.name}
                                            {
                                                navItem.messageCount &&
                                                <span className="message-count ms-4">{navItem.messageCount}</span>
                                            }
                                        </h3>
                                    </span>
                                    <span class="toolTip d-none">{navItem.name}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>                
            </div>
        </aside>
    )
}

export default Sidebar
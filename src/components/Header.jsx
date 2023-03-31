const Header = ({sidebarOpen, openSidebar}) => {

    return (
        <header>
            <span className="material-icons-outlined menu" onClick={() => openSidebar()}>
                menu
            </span>
            <div className="header-right">
                <span className="material-symbols-rounded search">
                    search
                </span>
                <img src="/images/dashboard/notification-bell.png" alt="notification" className="bell"/>
                <img src="/images/dashboard/derick-profile.png" alt="dashboard-profile" className="profile" />
            </div>
        </header>
    )
}

export default Header
const DashboardCard = props => {

    return <div className={`dashboard-card flex-fill bg-white ${props.class}`}> 
            { props.children }         
    </div>
}

export  default DashboardCard
import Statistics from "../components/Statistics"
import Table from "../components/Table"
import MyCard from "../components/MyCard"
import DashboardChart from "../components/Chart"

const Dashboard = () => {
    return (
        <div className="main-container">
            <MyCard />
            <div className="right">
                <div className="insights mb-4">
                    <div className="money-flow">
                        <div className="money-flow-header d-flex justify-content-between">
                            <h3>Money Flow</h3>
                            <div className="money-flow-icon">
                                <span class="material-icons-outlined me-3">
                                    trending_up
                                </span>
                                <span class="material-icons-round">
                                    signal_cellular_alt
                                </span>
                            </div>
                        </div>
                        <div className="money-flow-subHeader d-flex justify-content-between">
                            <div className="money-flow-subHeader-lhs d-flex flex-wrap align-items-center">
                                <div className="savings d-flex align-items-center">
                                    <span class="material-icons-outlined me-2">
                                        trending_up
                                    </span>
                                    <p>
                                        Savings
                                    </p>
                                </div>
                                <div className="rates d-flex align-items-center">
                                    <span class="material-icons-outlined me-2">
                                        trending_up
                                    </span>
                                    <p>
                                        +6,79%
                                    </p>
                                </div>
                            </div>
                            <select name="" id="">
                                <option value="">Week</option>
                                <option value="">Month</option>
                                <option value="">Year</option>
                            </select>
                        </div>
                        <img src="/images/dashboard/chart.svg" alt="chart" />
                        {/* <DashboardChart /> */}
                    </div>
                    <div className="recent-contact">
                        <div className="recent-contact-header d-flex justify-content-between align-items-center mb-2">
                            <h2>Recent Contact</h2>
                            <div className="recent-contact-header-icon">
                                <span class="material-icons-round me-4">
                                    edit
                                </span>
                                <span class="material-symbols-rounded">
                                    search
                                </span>
                            </div>
                        </div>
                        <p className="recent-contact-subHeader">18 recipients</p>
                        <div  className="recent-contact-photo-card d-flex align-items-center">
                            <div>
                                <img src="/images/dashboard/contact/Ellipse1.png" alt="contact" className="d-block" />
                                <div></div>
                            </div>
                            <div>
                                <img src="/images/dashboard/contact/Ellipse2.png" alt="contact" />
                                <div></div>
                            </div>
                            <div>
                                <img src="/images/dashboard/contact/ds.png" alt="contact" />
                                <div></div>
                            </div>
                            <div className="selected">
                                <img src="/images/dashboard/contact/Ellipse3.png" alt="contact" />
                                <div></div>
                            </div>
                            <div>
                                <img src="/images/dashboard/contact/Ellipse4.png" alt="contact" />
                                <div></div>
                            </div>
                            <span class="material-icons-outlined">
                                chevron_right
                            </span>
                        </div>
                        <div className="grp-party">
                            <h3 className="grp-party-intro"> Group <span>Party</span></h3>
                            <div className="d-flex grp-party-members justify-content-between align-items-center">
                                <div className="available-members d-flex align-items-center">
                                    <img src="/images/dashboard/contact/Ellipse5.png" alt="group-contact"/>
                                    <img src="/images/dashboard/contact/Ellipse6.png" alt="group-contact"/>
                                    <img src="/images/dashboard/contact/Ellipse7.png" alt="group-contact"/>
                                    <p className="grp-party-members-extra">+5</p>
                                </div>
                                <div>
                                    <img src="/images/dashboard/contact/contact-comment.svg" alt="" />
                                </div>
                            </div>
                            <div className="grp-party-bottom d-flex justify-content-between">
                                <div className="d-flex">
                                    <div>
                                        <img src="/images/dashboard/contact/dakota.png" alt="" />
                                    </div>
                                    <div>
                                        <p className="name">Dakota Milk</p>
                                        <p className="price">$420.00</p>
                                    </div>
                                </div>
                                <span class="material-icons-outlined">
                                    chevron_right
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recent-transactions my-5">
                    <div className="recent-transactions-header d-flex justify-content-between align-items-center mb-4">
                        <h2 className="mb-0">Recent Transaction</h2>
                        <div className="d-flex align-items-center">
                            <h4 className="m-0">view all</h4>
                            <span class="material-icons-sharp">
                                chevron_right
                            </span>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <Table />
                    </div>
                </div>
                <Statistics />
            </div>
        </div>
    )
}

export default Dashboard
import DashboardCard from "./Card"

const MyCard = () => {
  return (
    <div className="left">
        <div className="my-card">
            <h2 className="mb-4">My Card</h2>
            <div className="payment-card">
                <div className="payment-card-top">
                    <div className="card-name">
                        <small>Name</small>
                        <p>Carla Rosser</p>
                    </div>
                </div>
                <div className="payment-card-bottom">
                    <div className="card-number">
                        <p className="number">1200 01452 54215</p>
                        <small className="date">08/23</small>
                    </div>
                    <div className="card-type">
                        <img src="images/dashboard/visa-logo.svg" alt="payment-card-type" />
                    </div>
                </div>
            </div>
        </div>
        <div className="send-money">
            <h2>Send Money</h2>

            <DashboardCard class='mb-4 card-1'>
                <div className="details d-flex justify-content-between card-1">
                    <div className="details-left">
                        <img src="/images/dashboard/debit-logo.svg" alt="" />
                        <p>Debit</p>
                    </div>
                    <div className="details-right">
                        <p> <span className="currency-icon">$</span> 10.680</p>
                        <span class="material-icons-sharp">
                            expand_more
                        </span>
                    </div>
                </div>
            </DashboardCard>

            <DashboardCard class='card-2 mb-3'>
                <div className="details d-flex flex-column justify-content-between" >
                    <div className="details-left mb-3">
                        <img src="/images/dashboard/Ellipse.svg" alt="" className="pe-2" />
                        <small className="text-muted">Enter the amount</small>
                    </div>
                    <div className="details-right">
                        <input type="text" placeholder="$ 800.00"/>
                        <div className="flag d-flex">
                            <img src="/images/dashboard/usa.svg" alt="" />
                            <img src="/images/dashboard/flag.svg" alt="" />
                        </div>
                    </div>
                </div>
            </DashboardCard>

            <div className="astrid d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center ">
                    <img src="/images/dashboard/Astrid.png" alt="" />
                    <p className="ps-3">Astrid Hayes</p>
                </div>
                <span class="material-icons-sharp icon">
                    add
                </span>
            </div>
            <div className="send-money-btn">
                <button className="text-center py-3 w-100">Send Money</button>
            </div>
        </div>
        <div className="quick-transfer">
            <h2>Quick Transfer</h2>
            <DashboardCard class='mb-4 bordered-card-1'>
                <div className="details d-flex justify-content-between card-1">
                    <div className="details-left">
                        <img src="/images/dashboard/debit-logo.svg" alt="" />
                        <p>Debit</p>
                    </div>
                    <div className="details-right">
                        <p> <span className="">$</span>10,432</p>
                        <span class="material-icons-sharp text-muted">
                            expand_more
                        </span>
                    </div>
                </div>
            </DashboardCard>
            <DashboardCard class='bordered-card-2 mb-3'>
                <div className="details  d-flex flex-column justify-content-between" >
                    <div className="details-left mb-2">
                        <small className="text-muted">Enter the amount</small>
                    </div>
                    <div className="details-right">
                        <input type="text" placeholder="$1,24.00"/>
                        <div className="flag d-flex">
                            <img src="/images/dashboard/young-man.png" alt="" />
                            <img src="/images/dashboard/indoor-picture.png" alt="" />
                        </div>
                    </div>
                </div>
            </DashboardCard>
            <div className="quick-transfer-btn d-flex justify-content-between flex-wrap">
                <div >
                    <div className="mb-3">
                        <img src="/images/dashboard/send.svg" alt="send-btn" />
                    </div>
                    <p className="text-muted text-center">Send</p>
                </div>
                <div>
                    <div className="mb-3">
                        <img src="/images/dashboard/receive.svg" alt="receive-btn"  />
                    </div>
                    <p className="text-muted text-center">Receive</p>
                </div>
                <div>
                    <div className="mb-3">
                        <img src="/images/dashboard/invoicing.svg" alt="invoice-btn" />
                    </div>
                    <p className="text-muted text-center"> Invoicing</p>
                </div>
                <div>
                    <div className="mb-3">
                        <img src="/images/dashboard/more.svg" alt="more-btn" />
                    </div>
                    <p className="text-muted text-center">More</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyCard
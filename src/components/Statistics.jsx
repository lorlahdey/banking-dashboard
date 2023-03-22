import React from 'react'

const Statistics = () => {
    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <div className="statistics-data d-flex justify-content-between flex-wrap gx-3">
                <div className="d-flex mb-3">
                    <div className="stat-image d-flex justify-content-center bg-purple ">
                        <img src="/images/dashboard/statistics/customers.svg" alt="send-btn" className=""/>
                    </div>
                    <div className="ms-2">
                        <p className="">220k</p>
                        <small className="">Customers</small>
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="stat-image d-flex justify-content-center bg-blue ">
                        <img src="/images/dashboard/statistics/remitance.svg" alt="send-btn" className=""/>
                    </div>
                    <div className="ms-3">
                        <p className="">230k</p>
                        <small className="">Remitance</small>
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="stat-image d-flex justify-content-center bg-green ">
                        <img src="/images/dashboard/statistics/donation.svg" alt="send-btn" className=""/>
                    </div>
                    <div className="ms-3">
                        <p className="">270k</p>
                        <small className="">Donation</small>
                    </div>
                </div>
                <div className="d-flex ">
                    <div className="stat-image d-flex justify-content-center bg-orange ">
                        <img src="/images/dashboard/statistics/watchtime.svg" alt="send-btn" className=""/>
                    </div>
                    <div className="ms-3">
                        <p className="">130K</p>
                        <small className="">Watchtime</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics
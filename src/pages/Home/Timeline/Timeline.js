import React from 'react';
import './Timeline.css'

const Timeline = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-4 p-0">
                    <div className="open-hours">
                        <div className="overlay bg-blue d-flex align-items-center">
                            <div className="row w-100 px-5">
                                <h2 className="text-uppercase">Open Hours</h2>
                                <div className="col-3">
                                    <i class="display-4 far fa-clock"></i>
                                </div>
                                <div className="col-9">
                                    <p className="d-flex justify-content-between"><span>Monday - Friday</span> <span>9am - 10pm</span></p>
                                    <p className="d-flex justify-content-between"><span>Sunday</span> <span>Closed</span></p>
                                    <p className="d-flex justify-content-between"><span>Saturday</span> <span>Closed</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-0">
                    <div className="appointment">
                        <div className="overlay bg-navy d-flex align-items-center">
                            <div className="row w-100 px-5">
                                <h2 className="text-uppercase">Appointment</h2>
                                <div className="col-3">
                                    <i class="display-4 fas fa-medkit"></i>
                                </div>
                                <div className="col-9">
                                    <p>Appointment are available, call us today or book a appoinment</p>
                                    <button className="btn btn-outline-light rounded-pill px-4">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-0">
                    <div className="online-bill">
                        <div className="overlay bg-blue d-flex align-items-center">
                            <div className="row w-100 px-5">
                                <h2 className="text-uppercase">ONLINE BILL SYSTEM</h2>
                                <div className="col-3">
                                    <i class="display-4 fas fa-dollar-sign"></i>
                                </div>
                                <div className="col-9">
                                    <p>You can pay bill by Online, using credit, debit or any other MFS payments systems</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const Appointment = () => {
    return (
        <div>
            <Header />
            <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: "rgba(0,0,0,.8)", height: "350px" }}>
                <h2 className="text-light fw-bold">Appointment</h2>
            </div>
            <div className="container py-5">

                <div className="row">
                    <h3><u>Here you can find all appointment history</u></h3>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Appointment;
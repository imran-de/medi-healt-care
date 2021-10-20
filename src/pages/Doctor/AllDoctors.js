import React, { useEffect, useState } from 'react';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const AllDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <>
            <Header />
            <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: "rgba(0,0,0,.8)", height: "300px" }}>
                <h2 className="text-light fw-bold">Our Expert Doctor's</h2>
            </div>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
                    {
                        doctors.map(doctor => <div key={doctor.id} className="col">
                            <div className="card border-0 shadow card-hover">
                                <img src={doctor.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{doctor.name}</h5>
                                    <small className="text-info">{doctor.experts}</small>
                                    <p className="card-text">{doctor.day}</p>
                                    <div className="text-center">
                                        <button className="btn btn-outline-secondary">Book an Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllDoctors;
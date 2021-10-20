import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./homepageServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <Header />
            <div className="container my-5">
                <div className="text-center my-5">
                    <h2>We Specialize In</h2>
                    <p><u>Our special expert team provide service more than decade</u></p>

                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">

                    {
                        services?.map(service => <Service key={service.id} service={service}></Service>)
                    }

                </div>

            </div>
            <Footer />
        </>
    );
};

export default Services;
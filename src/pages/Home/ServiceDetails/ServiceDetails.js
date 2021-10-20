import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const ServiceDetails = () => {
    const { id, serviceName } = useParams()

    const [services, setServices] = useState([])
    const [singleService, setSingleService] = useState({})
    useEffect(() => {
        fetch('/homepageServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    useEffect(() => {
        const found = services?.find(service => service?.id == id);
        setSingleService(found)
    }, [services, id])
    return (
        <div>
            <Header />
            <div className="container my-5">
                <div>
                    <h1>Service Details:</h1>
                    <div className="text-center">

                        <img className="img-fluid" src={singleService?.icon} alt="" style={{ height: "400px" }} />
                    </div>
                    <h1>{serviceName}</h1>
                    <p>{singleService?.description}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceDetails;
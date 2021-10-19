import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const ServiceDetails = () => {
    const { id } = useParams()
    const { servicesData } = useAuth()

    const found = servicesData ? servicesData?.find(service => service?.id == id) : '';

    return (
        <div>
            <Header />
            <div className="container my-5">
                <div>
                    <div className="text-center">
                        <img className="img-fluid" src={found?.icon} alt="" style={{ height: "400px" }} />
                    </div>
                    <h1>{found?.name}</h1>
                    <p>{found?.description}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceDetails;
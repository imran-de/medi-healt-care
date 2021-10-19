import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const ServiceDetails = () => {
    const { id, serviceName } = useParams()
    const { isLoading, servicesData } = useAuth()
    if (isLoading) {
        return <h1>loading....</h1>
    }
    const found = servicesData.find(service => service.id == id);
    return (
        <div>
            <Header />
            <div className="container">

                <p>{found.description}</p>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceDetails;
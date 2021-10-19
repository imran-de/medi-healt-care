import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const ServiceDetails = () => {
    const { id } = useParams()
    const { servicesData, isLoading } = useAuth()
    if (isLoading) {
        return <h1>loading....</h1>;
    }
    const found = servicesData.find(service => service.id == id);
    return (
        <div>
            <Header />
            <div className="container">
                <div>
                    <div className="card-img-top display-1 text-primary" dangerouslySetInnerHTML={{ __html: found?.icon }}></div>
                    <h1>{found.name}</h1>
                    <p>{found.description}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceDetails;
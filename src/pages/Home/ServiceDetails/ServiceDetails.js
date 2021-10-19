import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const ServiceDetails = () => {
    const { id, serviceName } = useParams()
    const { servicesData } = useAuth()

    const found = servicesData ? servicesData?.find(service => service?.id == id) : '';

    return (
        <div>
            <Header />
            <div className="container my-5">
                <div>
                    <div className="text-center">
                        {!found ? <h2>{id} Can't load dynamic route onReload fake data, only show params data. agin reload page outsite private rout it's work </h2> : ''}
                        <img className="img-fluid" src={found?.icon} alt="" style={{ height: "400px" }} />
                    </div>
                    <h1>{serviceName}</h1>
                    <p>{found?.description}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceDetails;
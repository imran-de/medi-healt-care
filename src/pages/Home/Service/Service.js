import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service, services }) => {
    return (
        <div className="col">
            <div className="card h-100 text-center">
                <div className="flex-shrink-0">
                    <img className="card-img-top" src={service.icon} height="300px" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description.substr(0, 150)}...</p>
                    <Link to={`/service-details/${service.id}/${service.name}`} className="btn btn-outline-secondary">Read more</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    return (
        <div className="col">
            <div className="card border-0 shadow h-100 text-center card-hover">
                <div className="flex-shrink-0">
                    <img className="card-img-top" src={service.icon} height="200px" alt="" />
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
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    return (
        <div className="col">
            <div className="card h-100 text-center">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-img-top display-1 text-primary"
                    dangerouslySetInnerHTML={{ __html: service?.icon }}
                ></div>
                {/* <i className="fas fa-heartbeat card-img-top display-1 text-primary"></i> */}
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
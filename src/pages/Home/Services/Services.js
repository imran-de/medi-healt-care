import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./homepageServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container">
            <div className="text-center my-5">
                <h2>We Specialize In</h2>
                <p><u>Our special expert team provide service more than decade</u></p>

            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {
                    services?.map(service => <Service key={service.id} service={service}></Service>)
                }

                {//single card html code
                /* <div className="col">
                    <div className="card h-100 text-center">
                        <img src="..." className="card-img-top" alt="..." />
                        <i className="fas fa-heartbeat card-img-top display-1 text-primary"></i>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button className="btn btn-outline-secondary">Read more</button>
                        </div>
                    </div>
                </div> */}
            </div>

        </div>
    );
};

export default Services;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="img-fluid slide-img"
                    src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787"
                    alt="First slide"
                />
                <Carousel.Caption className="slider-caption">
                    <h2 className='text-light fw-bold'><span className="bg-dark px-2 rounded">Your Health</span></h2>
                    <h3 className="text-primary">We Serve Better than Any Other</h3>
                    <p>Not sure what is going on, come in Today for a Symptom Check up, There are many kind of process!!</p>
                    <button className="btn btn-primary text-uppercase me-lg-3 mb-3 mb-lg-0">CALL US TODAY</button><br className="d-block d-lg-none" />
                    <button className="btn btn-outline-primary text-uppercase text-light">Learn More</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid slide-img"
                    src="https://involve-middevon.org.uk/wp-content/uploads/2018/03/HealthandWellbeing.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className="slider-caption">
                    <h2 className='text-light fw-bold'><span className="bg-dark px-2 rounded">Your Health</span></h2>
                    <h3 className="text-primary">We Serve Better than Any Other</h3>
                    <p>Not sure what is going on, come in Today for a Symptom Check up, There are many kind of process!!</p>
                    <button className="btn btn-primary text-uppercase me-lg-3 mb-3 mb-lg-0">CALL US TODAY</button><br className="d-block d-lg-none" />
                    <button className="btn btn-outline-primary text-uppercase text-light">Learn More</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid slide-img"
                    src="https://images.unsplash.com/photo-1579154204601-01588f351e67"
                    alt="Third slide"
                />

                <Carousel.Caption className="slider-caption">
                    <h2 className='text-light fw-bold'><span className="bg-dark px-2 rounded">Your Health</span></h2>
                    <h3 className="text-primary">We Serve Better than Any Other</h3>
                    <p>Not sure what is going on, come in Today for a Symptom Check up, There are many kind of process!!</p>
                    <button className="btn btn-primary text-uppercase me-lg-3 mb-3 mb-lg-0">CALL US TODAY</button><br className="d-block d-lg-none" />
                    <button className="btn btn-outline-primary text-uppercase text-light">Learn More</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
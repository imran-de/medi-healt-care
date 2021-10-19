import React from 'react';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const About = () => {
    return (
        <div>
            <Header />
            <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: "rgba(0,0,0,.8)", height: "300px" }}>
                <h2 className="text-light fw-bold">About Us</h2>
            </div>
            <h2 className="text-center py-5">This is About page</h2>
            <Footer />
        </div>
    );
};

export default About;
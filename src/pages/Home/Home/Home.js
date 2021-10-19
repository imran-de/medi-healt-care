import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Timeline from '../Timeline/Timeline';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Timeline />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;
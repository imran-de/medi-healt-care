import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import GeneralInfo from '../GeneralInfo/GeneralInfo';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <GeneralInfo />
            <Services />
            <WhyChooseUs />
            <Footer />
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
            <Header />
            <Banner />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;
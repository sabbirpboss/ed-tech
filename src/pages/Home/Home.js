import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Home = () => {
    return (
        <div style={{backgroundColor: '#0a0f1d'}}>
            <Header />
            <Banner />
            <Footer />
        </div>
    );
};

export default Home;
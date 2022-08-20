import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Services from './Services/Services';

const Home = () => {
    return (
        <div style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
            <Header />
            <Banner />
            <Services />
            <Projects />
            <Footer />
        </div>
    );
};

export default Home;
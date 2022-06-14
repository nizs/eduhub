import { Container } from '@mui/material';
import React from 'react';
import AboutUs from '../../components/AboutUs/AboutUs';
import HeroSection from '../../components/HeroSection/HeroSection';
import HomeServices from '../../components/HomeServices/HomeServices';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Container>
                <HomeServices></HomeServices>
            </Container>
            <AboutUs></AboutUs>
        </>
    );
};

export default Home;
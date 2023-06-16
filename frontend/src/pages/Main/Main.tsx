import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import NavBar from '../../components/shared/NavBar/NavBar';
import HeroSection from './HeroSection';
import ExploreSection from './Testimonial/Testimonials';
import FeaturedEventsSection from './FeaturedSection/FeaturedSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
        <div className='flex flex-col min-h-screen bg-white'>
            <NavBar />   
            <HeroSection />
            <ExploreSection />
            <FeaturedEventsSection />
            <Footer />
        </div>
    </div>
  );
};

export default HomePage;
import React from 'react';
import NavBar from '../../components/shared/NavBar/NavBar';
import HeroSection from './HeroSection';
import ExploreSection from './Testimonial/Testimonials';
import FeaturedEventsSection from './FeaturedSection/FeaturedSection';
import Footer from './Footer';

const HomePage:React.FC = () => {
  return (
      <div className='flex flex-col min-h-screen bg-white'>
          <NavBar displayNormal />   
          <HeroSection />
          <ExploreSection />
          <FeaturedEventsSection />
          <Footer />
      </div>
  );
};

export default HomePage;
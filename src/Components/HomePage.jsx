import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import Trial from './trial';
import Testimonials from './Testimonials';
import Announcements from './announcements';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="overflow-x-hidden bg-cream  text-black">
      <HeroSection/>
      <Announcements/>
      <Trial/>
      <Testimonials/>
    </main>
  );
};

export default HomePage;
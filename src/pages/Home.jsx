import React from 'react';
import HeroSection from '../components/heroSection';
import Phylosophie from '../components/phylosophie';
import Projects from '../components/projects';
import Services from '../components/services';
import Achievements from '../components/achievements';
import GalleryProjects from '../components/galleryProjects';
import Testimonials from '../components/testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className='bg-white m-0 min-h-screen flex flex-col justify-start items-start w-full'>
      <HeroSection />
      <Phylosophie />
      <Projects />
      <Services />
      <Achievements />
      <GalleryProjects />
      <Testimonials />
  
    </div>
  );
};

export default Home;
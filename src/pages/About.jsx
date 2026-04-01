import React, { useState, useEffect, Suspense } from 'react';
// Lazy loading use kar rahe hain taake page foran load ho aur scrolling smooth ho
const AboutHero = React.lazy(() => import('../components/AboutHero'));
const OurMission = React.lazy(() => import('../components/OurMission'));
const WhyChooseUs = React.lazy(() => import('../components/WhyChooseUs'));
const OfficeLocation = React.lazy(() => import('../components/OfficeLocation'));

import LoaderAbout from '../components/LoaderAbout'; 

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 4 seconds boht zyada hain, isay 2.5s kar diya hai for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoaderAbout />;

  return (
    // 'will-change-scroll' aur 'scroll-smooth' hardware acceleration dete hain
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden selection:bg-cyan-500/30 scroll-smooth antialiased">
      
      {/* Suspense isliye taake jab tak component load ho, screen freeze na ho */}
      <Suspense fallback={<div className="h-screen bg-[#5b1eaa]" />}>
        
        {/* Har section ko ek container mein wrap kiya hai jo GPU use karega */}
        <main className="relative z-10 transform-gpu">
          
          {/* 1. Hero Section */}
          <AboutHero 
            title="About VISACONSULT" 
            subtitle="Your Gateway to the World" 
          />

          {/* 2. Mission & Vision */}
          <OurMission />

          {/* 3. Why Choose Us */}
          <WhyChooseUs />

          {/* 4. Office Info */}
          <OfficeLocation />
          
        </main>
      </Suspense>

      {/* Speed optimization style */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth !important;
          -webkit-font-smoothing: antialiased;
        }
        /* Scrolling ko buttery smooth banane k liye */
        body {
          overflow-y: auto;
          overscroll-behavior-y: none;
        }
      `}</style>
    </div>
  );
};

export default About;
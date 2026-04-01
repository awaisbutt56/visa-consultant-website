import React, { useState, useEffect } from 'react';
import WorkHero from '../components/WorkHero';
import PermitTypes from '../components/PermitTypes';
import Requirements from '../components/Requirements';
import WorkCTA from '../components/WorkCTA';
import LoaderWorkpermit from '../components/LoaderWorkpermit';

const Workpermit = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 2. 4 Seconds Timer for Loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // AGAR LOADING HAI TO SIRF LOADER DIKHAO
  if (isLoading) {
    return <LoaderWorkpermit />;
  }

  // JAB LOADING KHATAM HO JAYE TO YE PAGE DIKHAO
  return (
    <main className="bg-[#020617] min-h-screen overflow-hidden animate-in fade-in duration-700">
      {/* 1. Impactful Career Hero */}
      <WorkHero />

      {/* 2. Professional Permit Categories */}
      <div className="relative z-10 -mt-20">
        <PermitTypes />
      </div>

      {/* 3. Document Requirements Grid */}
      <Requirements />

      {/* 4. Final Conversion Section */}
      <WorkCTA />

      {/* Background Decorative Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] -left-20 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] -right-20 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px]" />
      </div>
    </main>
  );
};

export default Workpermit;
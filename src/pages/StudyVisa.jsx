import React, { useState, useEffect } from 'react';
import VisaHero from '../components/VisaHero';
import VisaProcess from '../components/VisaProcess';
import CountryGrid from '../components/CountryGrid';
import LoaderStudyvisa from '../components/LoaderStudyvisa';

const StudyVisa = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Page change hotay hi scroll auto top par chala jaye
    window.scrollTo(0, 0);

    // 4 Seconds Timer for the Academic Loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Show Loader for 4 seconds
  if (loading) {
    return <LoaderStudyvisa />;
  }

  return (
    <main className="bg-[#020617] min-h-screen animate-in fade-in duration-700">
      {/* 1. Impactful Hero Section */}
      <VisaHero />

      {/* 2. Professional Timeline/Process Section */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <VisaProcess />
      </div>

      {/* 3. Global Destinations Grid */}
      <CountryGrid />
      
      {/* Background Decorative Elements (Global) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[20%] -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-20 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px]"></div>
      </div>
    </main>
  );
};

export default StudyVisa;
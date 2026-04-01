import React, { useEffect, useState } from 'react';
import TouristHero from '../components/TouristHero';
import TouristServices from '../components/TouristServices';
import TouristProcess from '../components/TouristProcess';
import TouristFAQ from '../components/TouristFAQ';
import LoaderTourist from '../components/LoaderTourist'; // Import the loader

const Touristvisa = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Page top par scroll ho jaye
    window.scrollTo(0, 0);

    // 2. 4 Seconds ka timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Agar loading true hai to sirf Loader dikhao
  if (loading) {
    return <LoaderTourist />;
  }

  // Loading khatam hone ke baad main components
  return (
    <div className="bg-[#020617] min-h-screen animate-in fade-in duration-700">
      <TouristHero />
      <TouristServices />
      <TouristProcess />
      <TouristFAQ />
    </div>
  );
};

export default Touristvisa;
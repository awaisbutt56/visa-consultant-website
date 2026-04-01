import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <Services />
    </div>
  );
};

export default Home;
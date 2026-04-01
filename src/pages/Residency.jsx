import React, { useState } from 'react';
import ResidencyHero from '../components/ResidencyHero';
import ResidencyStats from '../components/ResidencyStats';
import ResidencyServices from '../components/ResidencyServices';
import LoaderResidency from '../components/LoaderResidency';

const Residency = () => {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-[#050505] min-h-screen">
      {loading ? (
        <LoaderResidency onFinished={() => setLoading(false)} />
      ) : (
        <div className="animate-in fade-in duration-1000">
          {/* Section 1: Hero */}
          <ResidencyHero />

          {/* Section 2: Stats (New Component) */}
          <ResidencyStats />

          {/* Section 3: Specialized Services */}
          <ResidencyServices />
          
          {/* Section 4 & 5 hum agay bnaein gay... */}
          <div className="py-20 text-center text-white/20 uppercase font-black italic tracking-widest">
            More Components Coming Soon...
          </div>
        </div>
      )}
    </main>
  );
};

export default Residency;
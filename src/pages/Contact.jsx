import React, { useState, useEffect } from 'react';
// Purane Loader ko naye LoaderContact se replace kiya
import LoaderContact from '../components/LoaderContact';
import ContactHero from '../components/ContactHero';
import ContactGrid from '../components/ContactGrid';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection';

const Contact = () => {
  const [loading, setLoading] = useState(true);

useEffect(() => {
    // Is premium animation ko show karne ke liye 2 seconds perfect hain
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Naya "Mind-Blowing" Loader call ho raha hai yahan
  if (loading) return <LoaderContact />;

  return (
    <div className="bg-slate-800 min-h-screen">
      {/* Hero aur Grid sections */}
      <ContactHero />
      <ContactGrid />

      {/* Form aur FAQ Section - Fully Responsive */}
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Main Contact Form */}
          <div className="w-full lg:flex-1">
             <ContactForm />
          </div>

          {/* FAQ Section - Sticky on Desktop */}
          <div className="w-full lg:w-[400px] xl:w-[450px]">
            <div className="sticky top-24">
              <FAQSection />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedPlant from './components/FeaturedPlant';
import TrendyPlantsSection from './components/TrendyPlantsSection';
import TopSellingSection from './components/TopSellingSection';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="antialiased">
      <Navbar mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <main>
        <HeroSection />
        <FeaturedPlant />
        <TrendyPlantsSection />
        <TopSellingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
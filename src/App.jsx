import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrendyPlantsSection from './components/TrendyPlantsSection';
import TopSellingSection from './components/TopSellingSection';
import CustomerReviewSection from './components/CustomerReviewSection';
import BestO2Section from './components/BestO2Section';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="app-shell antialiased">
      <Navbar mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <main className="relative z-10">
        <HeroSection />
        <TrendyPlantsSection />
        <TopSellingSection />
        <CustomerReviewSection />
        <BestO2Section />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const BestO2Section = () => {
  return (
    <section id="best-o2" className="py-14 md:py-18 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h2 className="section-title">Our Best o2</h2>
          <h3 className="section-subtitle mt-6 max-w-2xl">We Have Small And Best O2 Plants Collection’s</h3>
          <p className="text-white/70 mt-4 max-w-2xl leading-relaxed">
            Oxygen-producing plants, often referred to as &quot;O2 plants,&quot; are those that release oxygen into the atmosphere through the process of photosynthesis.
          </p>
          <p className="text-white/70 mt-4 max-w-2xl leading-relaxed">
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button className="bg-white/95 hover:bg-white text-[#0e2819] px-6 py-2.5 rounded-md text-sm font-medium transition inline-flex items-center gap-2">
              Explore <FaChevronRight className="text-xs" />
            </button>
            <span className="text-white/50 text-sm">01/04</span>
          </div>
          
        </div>

        <div className="lg:col-span-5">
          <div className="glass-card rounded-[2rem] p-5 border border-white/15">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=500&q=80" alt="O2 plant" className="w-full h-56 object-cover rounded-2xl" />
              <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80" alt="O2 plant 2" className="w-full h-56 object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestO2Section;
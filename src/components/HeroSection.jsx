import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-14 md:pb-20 min-h-screen">
      <div className="hero-bg" />
      <div className="hero-vignette" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="lg:col-span-7 pt-4 md:pt-10">
            <p className="inline-flex items-center px-3 py-1 rounded-full border border-lime-200/30 text-lime-100/90 text-xs tracking-[0.22em] uppercase">FloraVision.</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mt-5 leading-[0.95]">
              Earth’s Exhale
            </h1>
            <p className="text-white/70 max-w-xl mt-4 leading-relaxed">
              &quot;Earth Exhale&quot; symbolizes the purity and vitality of the Earth&apos;s natural environment and its essential role in sustaining life.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button onClick={() => alert('Buy Now')} className="bg-white/95 hover:bg-white text-[#0e2819] px-6 py-2.5 rounded-md text-sm font-medium transition inline-flex items-center gap-2">
                Buy Now <FaChevronRight className="text-xs" />
              </button>
              <button onClick={() => alert('Live Demo...')} className="h-10 rounded-full border border-white/30 text-white px-5 hover:bg-white/10 transition text-sm font-medium">
                Live Demo...
              </button>
            </div>

            <div className="glass-card mt-7 max-w-[20rem] p-3 flex items-start gap-3 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1584615467033-75627d04a129?auto=format&fit=crop&w=120&q=80"
                alt="Ronnie Hamill"
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-white text-sm font-medium">Ronnie Hamill</p>
                <p className="text-white/65 text-xs mt-1 leading-relaxed">
                  I can&apos;t express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative lg:min-h-[34rem] flex items-center justify-center">
            <div className="glass-card p-4 w-full sm:w-72 lg:absolute lg:right-0 lg:top-4 rounded-[1.75rem] border border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=220&q=80"
                  alt="Aglaonema plant"
                  className="h-24 w-24 object-cover drop-shadow-xl"
                />
                <div>
                  <p className="text-xs text-white/60">Indoor Plant</p>
                  <p className="text-white leading-tight">Aglaonema plant</p>
                  <button className="mt-2 text-xs px-3 py-1 rounded border border-white/30 text-white/90 hover:bg-white/10">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1593482892082-771a43f55fe6?auto=format&fit=crop&w=720&q=80"
              alt="Featured plant"
              className="w-[82%] sm:w-[74%] mt-8 lg:mt-0 mx-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#06160d] to-transparent" />
    </section>
  );
};

export default HeroSection;
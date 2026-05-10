import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Earth's <span className="text-green-700">Exhale</span>
          </h1>
          <div className="w-20 h-1 bg-green-600 rounded-full my-5 mx-auto md:mx-0"></div>
          <p className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            "Earth's Exhale" synthesizes the quality and vitality of the Earth's natural environment and its essential role in sustaining life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => alert('Proceed to secure checkout →')} className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold shadow-md transition transform hover:-translate-y-0.5">
              Buy Now 🌿
            </button>
            <button onClick={() => alert('Explore our seasonal themes')} className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-3 rounded-full font-semibold transition">
              Use Theme
            </button>
          </div>
          <div className="mt-10 flex gap-6 justify-center md:justify-start text-sm text-gray-500">
            <div><span className="font-bold text-green-700">⭐ 4.9</span> (1.2k reviews)</div>
            <div><span className="font-bold text-green-700">🌱 30+</span> species</div>
            <div><span className="font-bold text-green-700">🚚 Free</span> shipping over ₹999</div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Lush green tropical leaves" className="w-full h-auto object-cover transform hover:scale-105 transition duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
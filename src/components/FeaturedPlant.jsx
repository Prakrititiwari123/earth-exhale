import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

const FeaturedPlant = () => {
  return (
    <section id="featured" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col md:flex-row hover:shadow-lg transition">
        <div className="md:w-2/5 bg-green-50 flex items-center justify-center p-6">
          <img src="https://images.unsplash.com/photo-1593482892082-771a43f55fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Aglaemma plant" className="max-h-64 object-contain transform hover:scale-105 transition" />
        </div>
        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Featured plant</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">Aglaemma plant</h2>
          <div className="flex items-center mt-3 text-2xl font-semibold text-green-800">
            <FaRupeeSign className="text-xl mr-0.5" />
            <span>599/-</span>
          </div>
          <p className="text-gray-500 mt-3 leading-relaxed">Also known as Chinese Evergreen — air-purifying, low-maintenance, and perfect for desks or living rooms.</p>
          <button onClick={() => alert('Explore Aglaemma plant details →')} className="mt-6 bg-white border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold py-2 px-6 rounded-full transition w-fit">
            Explore →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlant;
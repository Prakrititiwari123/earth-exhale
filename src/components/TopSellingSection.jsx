import React from 'react';
import { FaRupeeSign, FaStar } from 'react-icons/fa';

const topSellingPlants = [
  { id: 1, name: 'Monstera Deliciosa', price: 799, image: 'https://images.unsplash.com/photo-1614594971025-14e3cc3c5700?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', rating: 4.8 },
  { id: 2, name: 'Snake Plant Laurentii', price: 499, image: 'https://images.unsplash.com/photo-1593482892082-771a43f55fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', rating: 4.9 },
  { id: 3, name: 'Fiddle Leaf Fig', price: 1099, image: 'https://images.unsplash.com/photo-1547042700-8f93f1408d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', rating: 4.7 },
  { id: 4, name: 'ZZ Plant', price: 649, image: 'https://images.unsplash.com/photo-1635527953806-8ea03b2b4d2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', rating: 4.9 }
];

const PlantCard = ({ name, price, image, rating }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative overflow-hidden bg-green-50 aspect-square">
        <img src={image} alt={name} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
        <button onClick={() => alert(`Added ${name} to cart!`)} className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-green-50" aria-label="Quick add">🛒</button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <div className="flex items-center text-green-800 font-bold"><FaRupeeSign className="text-sm mr-0.5" /><span>{price}</span></div>
        </div>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (<FaStar key={i} className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} />))}
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>
        <button onClick={() => alert(`Explore ${name} details`)} className="mt-3 w-full text-center text-green-700 font-medium text-sm border border-green-200 py-2 rounded-lg hover:bg-green-50 transition">View Details</button>
      </div>
    </div>
  );
};

const TopSellingSection = () => {
  return (
    <section id="top-selling" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Our Top Selling Plants</h2>
        <div className="w-20 h-1 bg-green-600 rounded-full mt-3 mx-auto"></div>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Customer favorites — thriving in homes across India</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topSellingPlants.map(plant => <PlantCard key={plant.id} {...plant} />)}
      </div>
    </section>
  );
};

export default TopSellingSection;
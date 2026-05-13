import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

const topSellingPlants = [
  {
    id: 1,
    name: 'Aglaonema plant',
    price: 300,
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care'
  },
  {
    id: 2,
    name: 'Plantain Lilies',
    price: 380,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,'
  },
  {
    id: 3,
    name: 'Cactus',
    price: 259,
    image: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'It is known for their ability to thrive in arid environments'
  },
  {
    id: 4,
    name: 'Swiss cheese Plant',
    price: 400,
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves'
  },
  {
    id: 5,
    name: 'Sansevieria plant',
    price: 450,
    image: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.'
  },
  {
    id: 6,
    name: 'Agave plant',
    price: 359,
    image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.'
  }
];

const PlantCard = ({ name, price, image, description }) => {
  return (
    <div className="group glass-card rounded-[1.75rem] overflow-hidden transition-all duration-300 transform hover:-translate-y-1 border border-white/15">
      <div className="relative overflow-hidden bg-white/5 aspect-square">
        <img src={image} alt={name} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-white/62 text-sm mt-2 leading-relaxed min-h-24">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-lime-200 font-bold"><FaRupeeSign className="text-sm mr-0.5" /><span>{price}/-</span></div>
          <button onClick={() => alert(`Explore ${name} details`)} className="text-white font-medium text-sm border border-white/25 py-2 px-4 rounded-lg hover:bg-white/10 transition">View</button>
        </div>
      </div>
    </div>
  );
};

const TopSellingSection = () => {
  return (
    <section id="top-selling" className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-8 md:mb-10">
        <h2 className="section-title">Our Top Selling Plants</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topSellingPlants.map(plant => <PlantCard key={plant.id} {...plant} />)}
      </div>
    </section>
  );
};

export default TopSellingSection;
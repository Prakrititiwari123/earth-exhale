import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

const trendyItems = [
  {
    id: 1,
    title: "For Your Desks Decorations",
    description: "A beautifully designed desk decoration set for your workspace, with a modern design and premium finish.",
    price: 599,
    image: "https://images.unsplash.com/photo-1616486338812-3badae4b4b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "For Your Desks Decorations",
    description: "The perfect desk accessories to boost the office atmosphere and make working and studying more enjoyable.",
    price: 399,
    image: "https://images.unsplash.com/photo-1584448095150-1daa7f17f1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const TrendyPlantsSection = () => {
  return (
    <section id="trendy" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Our Trendy plants</h2>
          <div className="w-20 h-1 bg-green-600 rounded-full mt-3 mx-auto"></div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Fresh picks that elevate any modern workspace</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trendyItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group">
              <div className="md:w-2/5 bg-green-50 flex items-center justify-center p-4">
                <img src={item.image} alt={item.title} className="h-48 object-contain group-hover:scale-105 transition duration-300" loading="lazy" />
              </div>
              <div className="md:w-3/5 p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.description}</p>
                  <div className="flex items-center mt-3 text-green-800 font-bold text-xl">
                    <FaRupeeSign className="text-lg mr-0.5" />
                    <span>{item.price}/-</span>
                  </div>
                </div>
                <button onClick={() => alert(`Explore "${item.title}" →`)} className="mt-4 text-green-700 font-semibold border border-green-300 rounded-full py-1.5 px-4 w-fit hover:bg-green-50 transition">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendyPlantsSection;
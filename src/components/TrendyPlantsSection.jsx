import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

const trendyItems = [
  {
    id: 1,
    title: "For Your Desks Decorations",
    description: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: 599,
    image: "https://images.unsplash.com/photo-1614594971025-14e3cc3c5700?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "For Your Desks Decorations",
    description: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    price: 399,
    image: "https://images.unsplash.com/photo-1545165375-1f8d1c6f8c4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const TrendyPlantsSection = () => {
  return (
    <section id="trendy" className="py-8 md:py-12 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-10">
          <h2 className="section-title">Our Trendy plants</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trendyItems.map((item) => (
            <div key={item.id} className="glass-card rounded-[2rem] overflow-hidden transition-all duration-300 flex flex-col md:flex-row group border border-white/15">
              <div className="md:w-2/5 bg-white/5 flex items-center justify-center p-4">
                <img src={item.image} alt={item.title} className="h-48 object-contain group-hover:scale-105 transition duration-300" loading="lazy" />
              </div>
              <div className="md:w-3/5 p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-white/65 text-sm mt-2 leading-relaxed">{item.description}</p>
                  <div className="flex items-center mt-3 text-lime-200 font-bold text-xl">
                    <FaRupeeSign className="text-lg mr-0.5" />
                    <span>{item.price}/-</span>
                  </div>
                </div>
                <button onClick={() => alert(`Explore "${item.title}" →`)} className="mt-4 text-white font-semibold border border-white/30 rounded-md py-1.5 px-4 w-fit hover:bg-white/10 transition">
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
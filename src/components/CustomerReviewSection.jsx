import React from 'react';

const reviews = [
  {
    name: 'Shelly Russel',
    text: 'Just got my hands on some absolutely awesome plants, and I couldn’t be happier!'
  },
  {
    name: 'Lula Rolfson',
    text: 'Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.'
  },
  {
    name: 'Carol Huels',
    text: 'It\'s like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!'
  }
];

const CustomerReviewSection = () => {
  return (
    <section className="py-14 md:py-18 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-8 md:mb-10">
        <h2 className="section-title">Customer Review</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <article key={review.name} className="glass-card rounded-[1.75rem] p-6 border border-white/15">
            <div className="h-12 w-12 rounded-full bg-lime-300/20 border border-lime-200/30 flex items-center justify-center text-lg font-semibold text-lime-100">
              {review.name.charAt(0)}
            </div>
            <h3 className="text-xl font-semibold text-white mt-4">{review.name}</h3>
            <p className="text-white/70 mt-3 leading-relaxed text-sm">{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviewSection;
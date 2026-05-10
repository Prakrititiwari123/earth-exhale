import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email) {
      alert(`🌿 Thanks! ${email} will receive green inspiration and offers.`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          <div>
            <span className="text-2xl font-bold text-white">Earth's<span className="text-green-400"> Exhale</span></span>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">Bringing nature's vitality to your doorstep. Pure, sustainable, and thoughtfully curated.</p>
            <div className="flex space-x-4 mt-5">
              <a href="#" aria-label="Facebook" className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition"><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition"><FaInstagram /></a>
              <a href="#" aria-label="Pinterest" className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition"><FaPinterest /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition">All Plants</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Desk Decor</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Gift Sets</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Plant Care Guide</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Returns</a></li>
              <li><a href="#" className="hover:text-green-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-3">Get 10% off your first order + plant care tips.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 flex-1"
                required
              />
              <button type="submit" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm pt-8">
          © {new Date().getFullYear()} Earth's Exhale — All roots reserved. 🌿
        </div>
      </div>
    </footer>
  );
};

export default Footer;
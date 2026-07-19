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
    <footer id="footer" className="bg-transparent text-gray-300 pt-16 pb-8 mt-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        
          <div>
            <span className="text-2xl font-bold text-white">Flora<span className="text-lime-300">Vision.</span></span>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">&quot;From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.&quot;</p>

            <div className="flex space-x-4 mt-5">
              <a href="#" aria-label="Facebook" className="bg-white/10 p-2 rounded-full hover:bg-lime-400 hover:text-black transition"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="bg-white/10 p-2 rounded-full hover:bg-lime-400 hover:text-black transition"><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className="bg-white/10 p-2 rounded-full hover:bg-lime-400 hover:text-black transition"><FaInstagram /></a>
              <a href="#" aria-label="Pinterest" className="bg-white/10 p-2 rounded-full hover:bg-lime-400 hover:text-black transition"><FaPinterest /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Link’s</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-lime-300 transition">Home</a></li>
              <li><a href="#trendy" className="hover:text-lime-300 transition">Type’s Of plant’s</a></li>
              <li><a href="#top-selling" className="hover:text-lime-300 transition">Contact</a></li>
              <li><a href="#" className="hover:text-lime-300 transition">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">For Every Update.</h4>
            <p className="text-sm text-gray-400 mb-3">Enter Email</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300/70 flex-1"
                required
              />
              <button type="submit" className="bg-lime-300 text-black hover:bg-lime-200 px-4 py-2 rounded-lg font-medium transition">Subscribe</button>
            </form>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">FloraVision.</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Type’s Of plant’s</p>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">FB  TW  LI</p>
          </div>
          
        </div>
        <div className="text-center text-gray-500 text-sm pt-8">
          FloraVision © all right reserve
        </div>
      </div>
    </footer>
  );
};

export default Footer;
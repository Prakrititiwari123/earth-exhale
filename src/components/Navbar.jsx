import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ mobileMenuOpen, toggleMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Trendy', href: '#trendy' },
    { name: 'Top Selling', href: '#top-selling' },
    { name: 'Plants', href: '#featured' },
  ];

  const handleIconClick = (action) => {
    alert(`${action} — ready for checkout flow`);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
              Earth's<span className="text-green-700"> Exhale</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all hover:after:w-full">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-5">
            <button onClick={() => handleIconClick('Search')} className="text-gray-600 hover:text-green-700 transition p-1" aria-label="Search"><FaSearch size={18} /></button>
            <button onClick={() => handleIconClick('Shopping cart')} className="text-gray-600 hover:text-green-700 transition p-1 relative" aria-label="Cart"><FaShoppingCart size={18} /><span className="absolute -top-1 -right-2 bg-green-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">3</span></button>
            <button onClick={() => handleIconClick('User account')} className="text-gray-600 hover:text-green-700 transition p-1" aria-label="User"><FaUser size={18} /></button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button onClick={() => handleIconClick('Search')} className="text-gray-600 p-1" aria-label="Search"><FaSearch size={18} /></button>
            <button onClick={() => handleIconClick('Cart')} className="text-gray-600 p-1 relative" aria-label="Cart"><FaShoppingCart size={18} /><span className="absolute -top-1 -right-2 bg-green-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">3</span></button>
            <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none" aria-label="Menu">
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-3 pt-2 pb-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={toggleMobileMenu} className="text-gray-700 hover:text-green-700 font-medium py-2 px-2 rounded-md hover:bg-green-50 transition">
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-6 pt-2">
              <button onClick={() => handleIconClick('Profile')} className="flex items-center text-gray-600 hover:text-green-700"><FaUser className="mr-2" /> Account</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
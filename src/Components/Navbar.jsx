import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavbarMenu = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'About', url: '/about' },
  { id: 3, title: 'Placements', url: '/placements' },
  { id: 4, title: 'Admission', url: '/admission' },
  { id: 5, title: 'Events', url: '/aurora' },
  { id: 5, title: 'Departments', url: '/departments' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-purple-900/70':'bg-purple-900/90 backdrop-blur shadow-lg' 
    }`}>
      {/* Main Navbar Container */}
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h3 className="text-xl sm:text-2xl font-bold text-white hover:text-purple-200 transition-colors duration-300">
            Silver University
          </h3>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NavbarMenu.map((item) => (
            <div key={item.id} className="relative group">
              <Link
                to={item.url}
                className="text-white text-sm font-medium hover:text-purple-200 transition-colors duration-300"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </div>
          ))}
          
          {/* Contact Button */}
          <Link to="/contact">
            <button className="ml-4 px-6 py-2 text-black text-sm font-medium border border-purple-400/50 rounded-full 
              hover:bg-purple-400/20 transition-all duration-300 transform hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-purple-400/50">
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-purple-200 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="bg-purple-900/95 backdrop-blur px-4 py-3 space-y-3">
          {NavbarMenu.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="block text-white hover:text-purple-200 py-2 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3"
          >
            <button className="w-full px-6 py-2 text-white border border-purple-400/50 rounded-full 
              hover:bg-purple-400/20 transition-all duration-300">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
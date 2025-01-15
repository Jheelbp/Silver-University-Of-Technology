import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">SILVER UNIVERSITY OF ARTS</h3>
          <p className="text-gray-400 mb-4">
            Leading provider of quality education and extra-circular, committed to students satisfaction and excellence.
          </p>
          <p className="text-gray-400">© 2025 SU. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

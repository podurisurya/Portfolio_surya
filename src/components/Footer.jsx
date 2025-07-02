import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-12">
      <div className="flex justify-between items-start mb-12">
        <div className="text-2xl font-bold text-blue-400">MediCare+</div>
        <div className="flex space-x-12">
          <div>
            <ul className="space-y-2 flex align-middle justify-between w-full">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
            </ul>
          </div>
          
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-6 border-t border-gray-700">
        <div className="flex space-x-4">
          <a href="#" className="text-xl hover:text-blue-400"><FaFacebook /></a>
          <a href="#" className="text-xl hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="text-xl hover:text-blue-400"><FaGoogle /></a>
        </div>
        <div>
          <p>© 2023-011BQ MediCare+ Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
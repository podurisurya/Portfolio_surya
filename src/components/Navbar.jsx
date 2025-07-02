import React from 'react';

const NavBar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex items-center justify-between p-6 fixed w-full bg-white z-50 shadow-sm">
<div class="text-2xl font-bold text-blue-700">
    Medi <span class="text-red-500">Care+</span>
</div>      <div className="flex items-center space-x-8">
        <a href="#home" onClick={() => scrollToSection('home')} className="text-blue-400 hover:text-blue-600">Home</a>
        <a href="#services" onClick={() => scrollToSection('services')} className="text-blue-400 hover:text-blue-600">Services</a>
        <a href="#testimonials" onClick={() => scrollToSection('testimonials')} className="text-blue-400 hover:text-blue-600">About</a>
        <a href="#specialists" onClick={() => scrollToSection('specialists')} className="text-blue-400 hover:text-blue-600">Specialists</a>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
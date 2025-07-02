import React, { useState } from 'react';

const services = [
  { id: 1, icon: '🦷', title: 'Dental Care', description: 'Our cardiology department provides comprehensive care for heart conditions.' },
  { id: 2, icon: '🫁', title: 'Pulmonary', description: 'Complete dental care for the whole family with the latest technology.' },
  { id: 3, icon: '🧠', title: 'Neurological', description: 'Expert eye care including vision correction and disease treatment.' },
  { id: 4, icon: '🏥', title: 'Prediatrics', description: 'Specialized care for bones, joints, and musculoskeletal system.' },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="services" className="min-h-screen flex flex-col items-center justify-center px-20 py-20 bg-white">
      <h2 className="text-6xl font-bold mb-4 text-center">Our Services</h2>
      <p className="text-gray-600 mb-12 text-center max-w-2xl">
        We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.
      </p>
      
      <div className="grid grid-cols-4 gap-8 w-full">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center text-center 
              ${hoveredCard === service.id ? 'bg-blue-600 text-white transform scale-105' : 'bg-white text-gray-800'}`}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3 className="font-bold text-xl mb-2">{service.title}</h3>
            {hoveredCard === service.id && (
              <>
                <a href="#" className="flex items-center text-white">
                  Learn more <span className="ml-1">→</span>
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
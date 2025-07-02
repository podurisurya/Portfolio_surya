import React from 'react';

const specialists = [
  { 
    id: 1,
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist'
  },
  { 
    id: 2,
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist'
  },
  { 
    id: 3,
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Dr. Emily Wilson',
    specialty: 'Pediatrician'
  },
  { 
    id: 4,
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Dr. David Rodriguez',
    specialty: 'Orthopedic Surgeon'
  }
];

const Specialists = () => {
  return (
    <section id="specialists" className="min-h-screen flex flex-col items-center justify-center px-20 py-20 bg-white">
      <h2 className="text-5xl font-bold mb-4 text-center text-blue-600">We Have the Best Specialist</h2>
      <p className="text-gray-600 mb-12 text-center max-w-2xl">
        Our team consists of highly qualified doctors with years of experience in their fields.
      </p>
      
      <div className="grid grid-cols-4 gap-8 w-full">
        {specialists.map((specialist) => (
          <div key={specialist.id} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <div className="h-80 overflow-hidden">
              <img 
                src={specialist.img} 
                alt={specialist.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{specialist.name}</h3>
              <p className="text-blue-600">{specialist.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialists;
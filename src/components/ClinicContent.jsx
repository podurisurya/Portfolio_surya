import React from 'react';

const ClinicContent = () => {
  const cards = [
    { 
      id: 1,
      img: 'https://img.freepik.com/free-vector/happy-doctor-holding-clipboard-with-patients_74855-7799.jpg',
      title: 'Qualified Doctors',
      description: 'Our board-certified physicians provide exceptional care with compassion.'
    },
    { 
      id: 2,
      img: 'https://img.freepik.com/free-vector/ambulance-car-with-medical-equipment_1308-42633.jpg',
      title: 'Emergency Care',
      description: 'Immediate attention when you need it most, 24/7 emergency services.'
    },
    { 
      id: 3,
      img: 'https://img.freepik.com/free-vector/nurses-taking-care-patient_74855-5272.jpg',
      title: '24/7 Service',
      description: 'Always here for you with round-the-clock medical support.'
    }
  ];

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center px-4 py-12 bg-gradient-to-br from-blue-50 to-white md:px-10 lg:px-20 relative overflow-hidden">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-10 lg:mb-0">
        <div className="text-center lg:text-left">
          <h2 className="text-5xl font-bold text-blue-800 mb-4 font-serif">Clinic 
            With Innovation
          </h2>
          <p className="text-blue-600 max-w-xl mx-auto lg:mx-0 text-lg">
            Experience healthcare that puts you first with our innovative services and compassionate team.
          </p>
          <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Discover Our Services
          </button>
        </div>
      </div>
      
      {/* Right Cards - Desktop */}
      <div className="relative w-full lg:w-1/2 h-[600px] hidden lg:block">
        {/* Card 1 - Top-right */}
        <div className="absolute top-3/5 right-100 w-64 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 z-10 border-t-4 border-blue-400 mt-[-60px] ">
          <img src={cards[0].img} alt={cards[0].title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-2">{cards[0].title}</h3>
          <p className="text-blue-600">{cards[0].description}</p>
        </div>
        {/* Card 2 - Middle-right */}
        <div className="absolute top-1/2 right-10 w-64 bg-white rounded-2xl shadow-xl p-6 transform -translate-y-1/2 hover:scale-105 transition-all duration-300 z-10 border-t-4 border-red-400">
          <img src={cards[1].img} alt={cards[1].title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-2">{cards[1].title}</h3>
          <p className="text-blue-600">{cards[1].description}</p>
        </div>
        {/* Card 3 - Bottom-right */}
        <div className="absolute top-1/2 right-100 w-64 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 z-10 border-t-4 border-green-400 pt-5 mt-5">
          <img src={cards[2].img} alt={cards[2].title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-2">{cards[2].title}</h3>
          <p className="text-blue-600">{cards[2].description}</p>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden grid grid-cols-1 gap-8 max-w-md mx-auto mt-10">
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-[1.02] transition-all duration-300 relative border-t-4 border-blue-400">
            <img src={card.img} alt={card.title} className="w-48 h-48 mx-auto -mt-24 mb-4 object-cover rounded-lg" />
            <h3 className="text-2xl font-bold text-blue-800 mb-2">{card.title}</h3>
            <p className="text-blue-600">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Add to your global CSS */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-float.delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default ClinicContent;
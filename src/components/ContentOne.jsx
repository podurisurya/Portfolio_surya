import React from 'react';

const ContentOne = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-between px-20 pt-20 bg-gray-50">
      <div className="w-1/2">
        <h2 className="text-blue-600 text-lg mb-4 text-2xl">Welcome to MediCare+ Clinic</h2>
        <h1 className="text-5xl font-bold mb-6">Best Specialist</h1>
        <p className="text-gray-600 mb-8">
          We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            Make an Appointment
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition duration-300">
            Departments
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <div 
          alt="Doctor" 
          className="rounded-3xl h-96 w-full object-cover bg-blue-100"
        />
      </div>
    </section>
  );
};

export default ContentOne;
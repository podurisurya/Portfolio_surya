import React from 'react';

const Subscribe = () => {
  return (
    <section className="min-h-[60vh] w-full flex flex-col items-center justify-center px-4 py-20">
      <div className="w-[90%] bg-blue-600 rounded-[40px] px-12 py-16 flex flex-col items-center">
        <h2 className="text-5xl  mb-4 text-center text-white">Subscribe to Newsletter</h2>
        <p className="text-white mb-9 text-center max-w-xl">
          Stay updated with our latest news and health tips by subscribing to our newsletter.
        </p>
        
        <div className="flex w-full h-90 max-w-xl rounded-s-md">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-grow px-6 py-3 rounded-l-full focus:outline-none"
          />
          <button className="bg-slate-200
          
          text-blue-600 px-8 py-3 rounded-r-full font-bold hover:bg-gray-100 transition duration-300">
            Send Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
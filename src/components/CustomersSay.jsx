import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "The care I received at MediCare+ was exceptional. The doctors were knowledgeable and took the time to explain everything to me.",
    name: "John Smith",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    text: "I've been a patient here for years and wouldn't go anywhere else. The staff is friendly and professional.",
    name: "Maria Garcia",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    text: "From the moment I walked in, I felt cared for. The facilities are clean and modern, and the doctors are top-notch.",
    name: "Robert Johnson",
    img: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const CustomersSay = () => {
  return (
    <section id="testimonials" className="min-h-screen flex flex-col items-center justify-center px-20 py-20 bg-gray-50">
      <h2 className="text-5xl text-blue-700 mb-12 text-center">What Our Customers Say</h2>
      
      <div className="grid grid-cols-3 gap-8 w-full">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md relative">
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
              "
            </div>
            <p className="text-gray-600 mb-6">{testimonial.text}</p>
            <div className="flex items-center">
              <img 
                src={testimonial.img} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">Patient</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;
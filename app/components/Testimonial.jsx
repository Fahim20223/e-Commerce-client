import React from "react";

export default function Testimonial() {
  const testimonial = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
      name: "John Doe",
      role: "Verified Buyer",
      feedback:
        "Amazing products! The quality exceeded my expectations and delivery was super fast.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Maria jain",
      role: "Happy Customer",
      feedback:
        "The customer service is excellent, and I love how easy it was to place an order.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Emily Clark",
      role: "Verified Buyer",
      feedback:
        "I had a wonderful shopping experience. Fast delivery and excellent packaging!",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonial.map((t) => (
          <div
            key={t.id}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 
             hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 mx-auto object-cover rounded-full mb-4"
            />
            <p className="text-black mb-2">"{t.feedback}"</p>
            <h4 className="font-bold">{t.name}</h4>
            <span className="text-sm text-white">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

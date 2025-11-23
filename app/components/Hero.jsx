import React from "react";

export default function Hero() {
  return (
    <div className="py-8">
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Welcome to MyShop
        </h1>
        <p className="text-xl mb-6 text-gray-700">
          Discover amazing products and deals every day.
        </p>
        <a
          href="#products"
          className="inline-block px-8 py-3 text-lg font-semibold rounded-full
               bg-blue-600 text-white shadow-lg
               hover:bg-blue-700 transition-all duration-300"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
}

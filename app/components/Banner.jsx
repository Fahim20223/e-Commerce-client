// components/HeroBanner.jsx
"use client";
import banner from "@/public/Images/ss4.png";

import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="bg-linear-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Upgrade Your Style Today
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Explore premium products with unbeatable deals and fast delivery.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Show All Products
            </Link>
            <Link
              href="/add-product"
              className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition"
            >
              Add Product
            </Link>
          </div>
        </div>

        {/* Illustration / Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.ibb.co.com/Z6xksxFP/Screenshot-2025-11-24-103558.png" // Replace with a product or hero illustration
            alt="Ecommerce Banner"
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

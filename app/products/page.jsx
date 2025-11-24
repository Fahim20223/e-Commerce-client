// app/products/page.js
import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCards";

async function fetchProducts() {
  const res = await fetch("http://localhost:5000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Products() {
  const products = await fetchProducts();

  return (
    <div className="max-w-9/12 mx-auto py-5 ">
      <h1 className="text-center font-bold text-indigo-600 text-3xl py-7">
        All Products
      </h1>

      <div className="flex justify-center items-center py-8">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

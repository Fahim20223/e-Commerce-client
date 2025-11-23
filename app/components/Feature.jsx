import React from "react";
import ProductCard from "../products/ProductCards";

async function fetchFeatures() {
  const res = await fetch("http://localhost:5000/api/feature");
  return res.json();
}

export default async function Feature() {
  const features = await fetchFeatures();
  return (
    <div className="max-w-9/12 mx-auto py-7">
      <h1 className="text-3xl font-bold text-center pb-8 text-indigo-600">
        Feature Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {features.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}

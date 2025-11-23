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
    <div className="max-w-9/12 mx-auto">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

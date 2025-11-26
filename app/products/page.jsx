"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCards";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); // loader visible initially

  const fetchProducts = async (text = "") => {
    setLoading(true); // start loader for cards only
    try {
      const res = await fetch(
        `https://e-commerce-server-opal.vercel.app/api/products?search=${text}`
      );
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.error(err);
      setProducts([]);
    } finally {
      setLoading(false); // stop loader
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchProducts(value); // loader will show again while fetching
  };

  return (
    <div className="max-w-9/12 mx-auto py-5">
      <h1 className="text-center font-bold text-indigo-600 text-3xl py-7">
        All Products
      </h1>

      {/* SEARCH + CATEGORY */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center py-8 gap-4">
        <label className="input">
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search products..."
          />
        </label>

        <select defaultValue="" className="select select-info">
          <option disabled={false} value="">
            Select a Category
          </option>
          <option value="Laptops">Laptops</option>
          <option value="Smart Watches">Smart Watches</option>
          <option value="Headphones">Headphones</option>
          <option value="Cameras">Cameras</option>
          <option value="Smartphones">Smartphones</option>
        </select>
      </div>

      {/* PRODUCTS GRID / LOADER */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {loading ? (
          <div className="col-span-full flex justify-center py-10 min-h-[63vh]">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 text-lg">No Products Found</p>
          </div>
        )}
      </div>
    </div>
  );
}

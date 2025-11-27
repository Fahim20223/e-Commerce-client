import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import BackButton from "./BackButton";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://e-commerce-server-opal.vercel.app/api/products/${id}`
  );

  const product = await res.json();

  return (
    <div>
      <div className="min-h-[63vh]">
        <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
          <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
              {/* LEFT SIDE IMAGE */}
              <div className="shrink-0 w-full md:w-1/2">
                <img
                  src={product?.image}
                  alt={product?.title}
                  className="w-full object-cover rounded-xl shadow-md"
                />
              </div>

              {/* RIGHT SIDE INFO */}
              <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">
                  {product?.title}
                </h1>

                {/* PRICE BADGE */}
                <div className="flex gap-3">
                  <div className="badge badge-lg badge-outline text-indigo-700 text-indigo-700font-medium">
                    ${product?.price}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-indigo-700 text-base md:text-lg">
                  {product?.fullDescription}
                </p>

                {/* BUTTONS (optional, remove if not needed) */}
                <div className="flex gap-3 mt-6">
                  <div>
                    <BackButton />
                  </div>
                  <button className="btn btn-outline rounded-full border-gray-300 hover:border-indigo-600 hover:text-indigo-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

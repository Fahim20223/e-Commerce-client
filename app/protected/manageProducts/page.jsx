"use client";

import React, { useEffect, useState } from "react";
import useAuth from "@/app/hooks/useAuth";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import { toast } from "react-toastify";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

import Link from "next/link";
import Swal from "sweetalert2";

export default function ManageProducts() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://e-commerce-server-opal.vercel.app/api/manageProducts?email=${user?.email}`
      );
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete a product
  const handleDelete = async (id) => {
    // Wait for user confirmation
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    // User cancelled
    if (!result.isConfirmed) return;

    // Proceed with delete
    try {
      const res = await fetch(
        `https://e-commerce-server-opal.vercel.app/api/products/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        await Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
          timer: 1500,
        });

        fetchProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchProducts();
    }
  }, [user]);

  return (
    <ProtectedRoute>
      <div className="min-h-[63vh] pb-7">
        <h2 className="text-3xl font-bold text-center text-primary py-8 mt-6">
          {products.length === 0 ? (
            <Fade cascade={false} direction="down" triggerOnce={true}>
              My Products
            </Fade>
          ) : (
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["My Products"]}
                  loop={3}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          )}
        </h2>

        <div>
          {products.length === 0 ? (
            <h2 className=" flex justify-center items-center text-primary md:text-3xl text-xl font-bold pt-7">
              <span style={{ fontWeight: "bold" }}>
                <Typewriter
                  words={[" You have not added any artwork yet !"]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          ) : (
            <div className="max-w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
                >
                  <figure className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </figure>

                  <div className="card-body">
                    {/* TITLE */}
                    <h2 className="card-title">{product.title}</h2>

                    {/* CATEGORY */}
                    <h2 className="badge text-xs badge-secondary rounded-full">
                      {product.category}
                    </h2>

                    {/* PRICE */}
                    <p className="text-lg font-semibold text-primary mt-2">
                      ${product.price}
                    </p>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-indigo-600">
                      {product.shortDescription?.slice(0, 70)}...
                    </p>

                    {/* BUTTONS */}
                    <div className="card-actions mt-4">
                      <Link
                        href={`/products/${product._id}`}
                        className="btn rounded-full  bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 
             hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600
             text-white w-full btn-sm shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                    <div className="card-actions mt-4">
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn rounded-full bg-linear-to-r from-purple-600 to-blue-500 w-full text-white btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}

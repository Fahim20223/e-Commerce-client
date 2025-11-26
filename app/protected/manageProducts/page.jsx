"use client";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import useAuth from "@/app/hooks/useAuth";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";

export default function ManageProducts() {
  const { user, loading } = useAuth();
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (!user) return; // Don't fetch if user is not loaded

    const fetchProducts = async () => {
      setFetching(true);
      try {
        const res = await fetch(
          `https://e-commerce-server-opal.vercel.app/api/manageProducts?email=${user.email}`
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setFetching(false);
      }
    };

    fetchProducts();
  }, [user]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(
        `https://e-commerce-server-opal.vercel.app/api/products/${id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
        setProducts(products.filter((p) => p._id !== id));
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to delete product", "error");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <ProtectedRoute>
      <div className="min-h-[63vh] pb-7">
        <h2 className="text-3xl font-bold text-center text-primary py-8 mt-6">
          My Products
        </h2>

        {fetching ? (
          <p className="text-center mt-10">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-lg font-semibold">
            You have not added any products yet!
          </p>
        ) : (
          <div className="max-w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {products.map((product) => (
              <div
                key={product._id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <figure className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="text-lg font-semibold text-primary mt-2">
                    ${product.price}
                  </p>
                  <p className="text-sm text-indigo-600">
                    {product.shortDescription?.slice(0, 70)}...
                  </p>

                  <div className="card-actions mt-4 flex flex-col gap-2">
                    <Link
                      href={`/products/${product._id}`}
                      className="btn btn-sm w-full text-white bg-gradient-to-r from-purple-500 to-blue-500"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn btn-sm w-full text-white bg-gradient-to-r from-purple-600 to-blue-500"
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
    </ProtectedRoute>
  );
}

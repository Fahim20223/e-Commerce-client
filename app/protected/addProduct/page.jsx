"use client";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import useAuth from "@/app/hooks/useAuth";
import React from "react";
import Swal from "sweetalert2";

export default function AddProduct() {
  const { user, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return; // Safety check

    const formData = {
      image: e.target.photo.value,
      title: e.target.title.value,
      shortDescription: e.target.shortDescription.value,
      fullDescription: e.target.fullDescription.value,
      price: e.target.price.value,
      createdAt: new Date(),
      userEmail: user.email,
      userName: user.displayName || "",
    };

    try {
      const res = await fetch(
        "https://e-commerce-server-opal.vercel.app/api/products",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      }
    } catch (error) {
      console.error("Error adding product:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add product",
      });
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen mt-6 items-center justify-center">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl border border-gray-200">
          <div className="card-body p-6">
            <h1 className="text-3xl font-bold text-center">Add Product</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="label">User Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName || ""}
                  readOnly
                  className="input w-full rounded-full focus:outline-gray-200"
                />
              </div>

              <div className="mb-3">
                <label className="label">User Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email || ""}
                  readOnly
                  className="input w-full rounded-full focus:outline-gray-200"
                />
              </div>

              <div className="mb-3">
                <label className="label">Photo URL</label>
                <input
                  type="url"
                  name="photo"
                  required
                  placeholder="https://example.com/image.jpg"
                  className="input w-full rounded-full focus:outline-gray-200"
                />
              </div>

              <div className="mb-3">
                <label className="label">Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="Enter title"
                  className="input w-full rounded-full focus:outline-gray-200"
                />
              </div>

              <div className="mb-3">
                <label className="label">Short Description</label>
                <textarea
                  name="shortDescription"
                  required
                  rows="3"
                  placeholder="Enter short description"
                  className="textarea w-full rounded-2xl focus:outline-gray-200"
                />
              </div>

              <div className="mb-3">
                <label className="label">Price</label>
                <input
                  type="number"
                  name="price"
                  required
                  placeholder="Enter price"
                  className="input w-full rounded-full focus:outline-gray-200"
                />
              </div>

              <div className="mb-3">
                <label className="label">Full Description</label>
                <textarea
                  name="fullDescription"
                  required
                  rows="6"
                  placeholder="Enter full description"
                  className="textarea w-full rounded-2xl focus:outline-gray-200"
                />
              </div>

              <button
                type="submit"
                className="btn text-white mt-4 w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

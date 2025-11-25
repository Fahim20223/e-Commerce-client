"use client";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import useAuth from "@/app/hooks/useAuth";
import React from "react";
import Swal from "sweetalert2";
// import { Typewriter } from "react-simple-typewriter";

export default function AddProduct() {
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      image: e.target.photo.value,
      title: e.target.title.value,
      shortDescription: e.target.shortDescription.value,
      fullDescription: e.target.fullDescription.value,
      price: e.target.price.value,
      createdAt: new Date(),
      userEmail: user?.email,
    };

    try {
      const res = await fetch(
        "https://e-commerce-server-opal.vercel.app/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      }
    } catch (error) {
      console.log("Error adding product:", error);
    }
  };

  return (
    <div className="">
      <ProtectedRoute>
        <div className="flex min-h-screen mt-6 items-center">
          <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
            <div className="card-body p-6 relative">
              <h1 className="text-3xl font-bold text-center">Add Products</h1>
              <form onSubmit={handleSubmit}>
                <fieldset className="fieldset">
                  {/* email field */}
                  <div>
                    <label className="label font-medium mb-1">User Name</label>
                    <input
                      type="text"
                      name="name"
                      className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                      defaultValue={user?.displayName}
                      readOnly
                    />
                  </div>
                  {/* Email Field */}
                  <div>
                    <label className="label font-medium mb-1">User Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                      defaultValue={user?.email}
                      readOnly
                    />
                  </div>
                  {/* Photo URL */}
                  <div>
                    <label className="label font-medium">Photo URL</label>
                    <input
                      type="url"
                      name="photo"
                      required
                      className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  {/* Title Field */}
                  <div>
                    <label className="label font-medium">Title</label>
                    <input
                      type="text"
                      name="title"
                      required
                      className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                      placeholder="Enter title"
                    />
                  </div>

                  {/*Short Description Textarea */}
                  <div>
                    <label className="label font-medium">
                      Short-Description
                    </label>
                    <textarea
                      name="shortDescription"
                      required
                      rows="3"
                      className="input w-full rounded-full focus:border-0 focus:outline-gray-200 textarea"
                      placeholder="Enter Short description"
                    ></textarea>
                  </div>

                  {/* Price */}

                  <div>
                    <label className="label font-medium">Price</label>
                    <input
                      type="number"
                      name="price"
                      required
                      className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                      placeholder="Price"
                    />
                  </div>

                  {/* Description Textarea */}
                  <div className="mt-2">
                    <label className="label font-medium">
                      Full-Description
                    </label>
                    <textarea
                      name="fullDescription"
                      required
                      rows="3"
                      className="py-3 px-1 textarea w-full rounded-2xl focus:border-0  focus:outline-gray-200 h-[250px] border"
                      placeholder="Enter Full description"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn text-white mt-4 rounded-full bg-linear-to-r from-purple-600 to-blue-500"
                  >
                    Add The Product
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    </div>
  );
}

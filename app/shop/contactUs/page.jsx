"use client";

import { toast } from "react-toastify";

export default function ContactUs() {
  const handleForm = (e) => {
    e.preventDefault();
    toast.success("Successfully send to us");
    e.target.reset();
  };
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Our team is always here to assist you with orders, inquiries, or
            support. Expect fast replies and professional help.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                📍 Office Location
              </h3>
              <p className="text-gray-600">Banani, Dhaka, Bangladesh</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">📞 Phone</h3>
              <p className="text-gray-600">+880 1234-567890</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">✉️ Email</h3>
              <p className="text-gray-600">support@gizmogrid.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-2xl rounded-2xl">
          <form
            onSubmit={handleForm}
            className="space-y-6 px-6 py-8 rounded-2xl"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-32"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button className="btn w-full py-3 rounded-xl font-semibold text-white bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600 transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import logo from "@/public/Images/cart.png";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-purple-700 to-blue-600 text-white py-10 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Services */}
          <div>
            <h6 className="text-lg font-bold mb-4">Services</h6>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  Branding
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Design
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Marketing
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Advertisement
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-lg font-bold mb-4">Company</h6>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Jobs
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h6 className="text-lg font-bold mb-4">Follow Us</h6>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub" className="hover:text-gray-300">
                <FaGithub size={26} />
              </a>
              <a
                href="#"
                aria-label="X Twitter"
                className="hover:text-gray-300"
              >
                <FaXTwitter size={26} />
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-8" />

        {/* Brand & Copyright */}
        <p className="text-center text-white text-sm">
          <span className="font-bold text-lg">GizmoGrid </span> ©{" "}
          {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
}

"use client";
import Link from "next/link";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

import { toast } from "react-toastify";

export default function Navbar() {
  const { user, signOutUser } = useAuth();

  const [openDropdown, setOpenDropdown] = useState(false);

  const handleSingOutUser = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
        toast.success("Successfully Logged Out");
        setOpenDropdown(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        {" "}
        <Link href={"/"}>Home </Link>
      </li>
      <li>
        <Link href={"/products"}>Products </Link>
      </li>
      <li>
        <Link href={"/"}>About Us </Link>{" "}
      </li>
      <li>
        <Link href={"/"}>Contact Us</Link>{" "}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-6 py-3 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="relative">
            <img
              src={
                user.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/456/456212.png"
              }
              alt="User"
              className="w-13 h-13 rounded-full cursor-pointer object-cover"
              onClick={() => setOpenDropdown(!openDropdown)}
            />

            {openDropdown && (
              <div className="absolute right-0 mt-3 bg-base-100 shadow-lg rounded-md w-40 p-2 z-50">
                <p className="text-center font-semibold">
                  {user.displayName || "User"}
                </p>

                <hr className="my-2" />

                <Link
                  href="/pages/addProduct"
                  className="btn btn-sm w-full mb-2"
                >
                  Add Product
                </Link>

                <Link
                  href="/pages/manageProducts"
                  className="btn btn-sm w-full mb-2"
                >
                  Manage Products
                </Link>

                <button
                  onClick={handleSingOutUser}
                  className="btn btn-primary btn-sm w-full"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/pages/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

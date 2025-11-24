"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log("after login", data);
  };

  return (
    <div>
      <div className="flex min-h-screen items-center">
        <div className="card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input rounded-full focus:border-0 focus:outline-gray-200"
                  placeholder="Email"
                />

                {errors.email?.type === "required" && (
                  <p
                    className="text-red-500
                  
                  "
                  >
                    Please Enter Your Email
                  </p>
                )}

                <label className="label">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="input rounded-full focus:border-0 focus:outline-gray-200"
                  placeholder="Password"
                />

                {errors.password?.type === "required" && (
                  <p className="text-red-500">Please Enter Your Password</p>
                )}

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  className={`btn text-white mt-4 rounded-full bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 
             hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600`}
                >
                  Login
                </button>
              </fieldset>
            </form>

            <button className="btn bg-white rounded-full text-black border-[#e5e5e5]">
              <FcGoogle />
              Login with Google
            </button>
            <p className="text-center">
              New to our website? Please{" "}
              <Link
                href={"/pages/register"}
                className="text-blue-500 hover:text-blue-800"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

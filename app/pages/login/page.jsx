"use client";
import React, { useEffect } from "react";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const { signInUser, signInWithGoogle, user } = useAuth();

  // Redirect back after login if already logged in
  useEffect(() => {
    if (user) {
      router.back(); // go back to the previous page
    }
  }, [user, router]);

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        toast.success("Successfully Logged In");
        reset();
        router.back(); // go back after login
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Successfully Logged In with Google");
        router.back(); // go back after login
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl border border-gray-200">
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
              {errors.email && (
                <p className="text-red-500">Please Enter Your Email</p>
              )}

              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">Please Enter Your Password</p>
              )}

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="btn text-white mt-4 rounded-full bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600"
              >
                Login
              </button>
            </fieldset>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white rounded-full text-black border-[#e5e5e5] mt-3 w-full flex items-center justify-center gap-2"
          >
            <FcGoogle /> Login with Google
          </button>

          <p className="text-center mt-3">
            New to our website?{" "}
            <Link
              href="/pages/register"
              className="text-blue-500 hover:text-blue-800"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

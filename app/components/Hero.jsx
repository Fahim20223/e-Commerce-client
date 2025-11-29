import React from "react";

export default function Hero() {
  return (
    <div className="relative bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white pt-25">
      {/* Optional Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/10 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-white/5 rounded-full animate-pulse"></div>
      </div>

      <section className="relative z-10 py-32 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to <span className="text-yellow-300">GizmoGrid</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white/90 drop-shadow-sm">
          Discover amazing products and deals every day. Shop smart, shop fast,
          shop with us!
        </p>
        <a
          className="inline-block px-10 py-4 text-lg font-semibold rounded-full
             bg-linear-to-r from-purple-600 via-red-400 to-pink-500
             shadow-xl hover:scale-105 transform transition-all duration-300 cursor-pointer"
        >
          Shop Now
        </a>
      </section>

      {/* Optional small wave at bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.38,22.54,104.35,28.81,158,20,70-11.55,138-48.05,207-41.5,63,6,123,45,186,53,66,8,132-22,198-33s130-1,195,13,132,29,198,37c58,7,117-3,175-16V0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

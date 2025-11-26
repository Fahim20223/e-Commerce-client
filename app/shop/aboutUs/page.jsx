export default function AboutUs() {
  return (
    <section className="min-h-[70vh] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: IMAGE SIDE */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                alt="About us"
                className="w-full h-[480px] object-cover rounded-2xl"
              />
            </div>

            {/* Premium bg glow */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-[85%] h-[85%] bg-purple-400/20 blur-3xl rounded-full"></div>
          </div>

          {/* RIGHT: TEXT SIDE */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-600">
              We Build
              <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Ecommerce Experiences
              </span>{" "}
              That Customers Trust
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Our company is committed to redefining online shopping through
              premium products, seamless navigation, and a customer-first
              approach. We blend modern design, optimized processes, and
              advanced technology to deliver a superior buying experience
              trusted by thousands worldwide.
            </p>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Every product is carefully selected, every interaction is
              thoughtfully designed, and every order is handled with precision —
              ensuring you receive only excellence from browsing to delivery.
            </p>

            {/* THEMEFOREST STYLE STATS */}
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-extrabold text-purple-600">
                  10K+
                </h3>
                <p className="text-gray-500 text-sm mt-1">Active Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-purple-600">50+</h3>
                <p className="text-gray-500 text-sm mt-1">Brands Partnered</p>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-purple-600">
                  4.9★
                </h3>
                <p className="text-gray-500 text-sm mt-1">Customer Rating</p>
              </div>
            </div>

            {/* THEMEFOREST TRUST BADGE LINE */}
            <div className="mt-10 border-l-4 border-purple-600 pl-6">
              <p className="text-gray-600 text-lg italic">
                “Our mission is simple — deliver quality, build trust, and make
                online shopping feel effortless.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

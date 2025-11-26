import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
      {/* PRODUCT IMAGE */}
      <figure className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>

      <div className="card-body">
        {/* TITLE */}
        <h2 className="card-title">{product.title}</h2>

        <h2 className="badge text-xs badge-secondary rounded-full"></h2>

        {/* PRICE */}
        <p className="text-lg font-semibold text-primary mt-2">
          ${product.price}
        </p>

        {/* DESCRIPTION */}
        <p className="text-sm text-indigo-600">
          {product.shortDescription?.slice(0, 70)}...
        </p>

        {/* BUTTONS */}
        <div className="card-actions mt-4">
          <Link
            href={`/products/${product._id}`}
            className="btn rounded-full  bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 
             hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600
             text-white w-full btn-sm shadow-md hover:shadow-xl transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

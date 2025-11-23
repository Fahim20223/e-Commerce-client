import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
      {/* PRODUCT IMAGE */}
      <figure className="h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>

      <div className="card-body">
        {/* TITLE */}
        <h2 className="card-title">{product.title}</h2>

        {/* CATEGORY */}
        <h2 className="badge text-xs badge-secondary rounded-full">
          {product.category}
        </h2>

        {/* PRICE */}
        <p className="text-lg font-semibold text-primary mt-2">
          ${product.price}
        </p>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600">
          {product.shortDescription?.slice(0, 70)}...
        </p>

        {/* BUTTONS */}
        <div className="card-actions mt-4">
          <Link
            href={`/products/${product._id}`}
            className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

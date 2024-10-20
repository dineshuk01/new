// src/components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="block"
    >
      <div className="border mx-auto shadow-lg shadow-slate-50 mb-6 rounded-lg p-4 bg-[#EAD8C0] w-5/6 h-[500px] text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-[310px] object-cover object-center rounded-md mb-4 transition-transform duration-300 hover:scale-110"
        />
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          {product.name}
        </h2>
        <p className="text-lg font-bold text-gray-800 mb-4">
          Rs-{product.price.toFixed(2)}
        </p>
        <button className="bg-[#996c6c] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-[#8b5656] focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-opacity-50">
          View Details
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;

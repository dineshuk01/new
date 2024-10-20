import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import mockProducts from "../Utils/mockData";

const ProductDetails = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === parseInt(id)); // Find current product
  const otherProducts = mockProducts.filter((p) => p.id !== parseInt(id)); // Exclude the current product

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index

  // Reset the image index and scroll to top when the product changes
  useEffect(() => {
    setCurrentImageIndex(0); // Reset to the first image
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]); // This effect runs every time the id changes

  // Handle next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  // Construct WhatsApp URL with product details
  const whatsappUrl = `https://wa.me/9650722648?text=I'm%20interested%20in%20buying%20the%20product:%20${encodeURIComponent(
    product.name
  )}%20for%20${product.price.toFixed(2)} Rs`;

  return (
    <div className="container mx-auto p-4 lg:p-6 shadow-lg bg-white rounded-lg mt-8">
      {/* Display selected product details */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8">
        {/* Image carousel */}
        <div className="relative w-full lg:w-1/3 mb-6 lg:mb-0">
          <img
            src={product.images[currentImageIndex]} // Display the current image
            alt={product.name}
            className="w-full h-[400px] rounded-lg object-cover object-center shadow-md"
          />

          {/* Left and Right navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full hover:bg-gray-900"
          >
            &#10094;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full hover:bg-gray-900"
          >
            &#10095;
          </button>
        </div>

        <div className="w-full lg:w-2/4 lg:ml-10">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-bold text-gray-800 mb-6">
            Rs-{product.price.toFixed(2)}
          </p>

          {/* Buy Now button that redirects to WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 transition duration-300 ease-in-out w-full md:w-auto"
          >
            Buy Now
          </a>
        </div>
      </div>

      {/* Display other product suggestions */}
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        Other Suggestions
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {otherProducts.map((p) => (
          <Link
            to={`/product/${p.id}`}
            key={p.id}
          >
            <div className="border rounded-lg p-4 h-80 lg:h-96 bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out text-center">
              <img
                src={p.images[0]}
                alt={p.name}
                className="w-full h-44 sm:h-[260px] object-cover rounded-md mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-900">{p.name}</h4>
              <p className="text-gray-600">Rs-{p.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;

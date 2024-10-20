import React, { useState, useEffect } from "react";
import product5 from "../Utils/product5.jpeg";
import product25 from "../Utils/product25.jpeg";
import product2 from "../Utils/product2.jpeg";
import product4 from "../Utils/product4.jpeg";
import product12 from "../Utils/product12.jpeg";
import product26 from "../Utils/product26.jpeg";
import product9 from "../Utils/product9.jpeg";
import product15 from "../Utils/product15.jpeg";
import product23 from "../Utils/product23.jpeg";
import product20 from "../Utils/product20.webp";
import product28 from "../Utils/product28.jpeg";
import product27 from "../Utils/product27.jpeg";
import product30 from "../Utils/product30.png";
import product31 from "../Utils/product31.jpeg";
import product32 from "../Utils/product32.jpeg";
import product33 from "../Utils/product33.jpeg";
import product34 from "../Utils/product34.jpeg";

// Sample corporate gifting product data
const products = [
  {
    id: 1,
    mainImage: product5,
    thumbnails: [product15, product26, product28],
    discount: "🎉 20% off on corporate gifts!",
    price: "Rs-999",
    name: "Diwali Gift Hamper code #121",
  },
  {
    id: 2,
    mainImage: product2,
    thumbnails: [product15, product26, product20],
    discount: "✨ Custmize your own Hamper",
    price: "Rs-1499",
    name: "Diwali Gift Hamper code #122",
  },
  {
    id: 3,
    mainImage: product12,
    thumbnails: [product32, product33, product23],
    discount: "💖 Buy more than five get extra offers!",
    price: "Rs-1299",
    name: "Diwali Gift Hamper code #123",
  },
  {
    id: 4,
    mainImage: product4,
    thumbnails: [product9, product26, product27],
    discount: "✨ Free delivery on order above Rs- 1000 !",
    price: "Rs-649",
    name: "Diwali Gift Hamper code #124",
  },
  {
    id: 5,
    mainImage: product25,
    thumbnails: [product31, product34, product28],
    discount: "✨ Check our instagram for latest updates",
    price: "Rs-799",
    name: "Diwali Gift Hamper code #125",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = products.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount); // Loop through products
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [itemCount]);

  // Handle WhatsApp message to seller
  const handleBuyNow = (product) => {
    const message = `I'm interested in buying this corporate gift: ${product.name}. Price: ${product.price}.`;
    const whatsappLink = `https://wa.me/${9548597595}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="max-w-5xl mx-auto p-4 bg-[#E5DDC5] rounded-lg my-14 shadow-lg shadow-white ">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center mb-4 text-[#613535]">
        Best Selling Products for Corporate Gifting
      </h2>

      <div className="flex flex-col md:flex-row">
        {/* Left: Main Image */}
        <div className="flex  justify-center items-center w-full md:w-1/2 p-2">
          <img
            src={products[currentIndex].mainImage}
            alt="Main Product"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Thumbnail Images and Discount */}
        <div className="flex flex-col items-center w-full h-80 md:w-1/2 p-2">
          <div className="flex gap-6 justify-center items-center w-full">
            {products[currentIndex].thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className=" w-[100px] h-32 md:w-[124px] md:h-48 object-cover rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-200"
              />
            ))}
          </div>
          {/* Discount and Price Section */}
          <div className="text-center mt-4">
            <p className="text-lg font-semibold">
              {products[currentIndex].discount}
            </p>
            <p className="text-xl font-bold">{products[currentIndex].price}</p>
            {/* Buy Now Button */}
            <button
              onClick={() => handleBuyNow(products[currentIndex])}
              className="mt-4 px-4 py-2 bg-[#9c7171] text-white rounded hover:bg-[#a36b6b] transition duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import React, { useState, useRef } from "react";
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

// Sample data for hampers
const hampers = [
  {
    id: 1,
    name: "Diwali Gift Hamper 1",
    price: "₹1299",
    mainImage: product12,
    productImages: [
      { src: product32, name: "Dry Fruit" },
      { src: product33, name: "Chocolates" },
      { src: product31, name: "glass container" },
    ],
  },
  {
    id: 2,
    name: "Diwali Gift Hamper 2",
    price: "₹799",
    mainImage: product4,
    productImages: [
      { src: product9, name: "Electric candle" },
      { src: product28, name: "4 Diya's" },
      { src: product26, name: "Dryfruits jar" },
      { src: product27, name: "Candy Jar" },
      { src: product23, name: "4 Colored diya's" },
    ],
  },
  {
    id: 3,
    name: "Diwali Gift Hamper 3",
    price: "₹1499",
    mainImage: product30,
    productImages: [
      { src: product15, name: "Beautiful Sipper" },
      { src: product28, name: "4 Diya's" },
      { src: product26, name: "Dryfruits jar" },
      { src: product27, name: "Candy Jar" },
      { src: product20, name: "Ganesh Lakhsmi" },
    ],
  },
  {
    id: 4,
    name: "Diwali Gift Hamper 4",
    price: "₹649",
    mainImage: product25,
    productImages: [
      { src: product31, name: "2 Dry fruits jar" },
      { src: product28, name: "4 Diya's" },
      { src: product23, name: "4 Colored diya's" },
      { src: product34, name: "Rangoli color" },
    ],
  },
  {
    id: 5,
    name: "Diwali Gift Hamper 5",
    price: "₹999",
    mainImage: product5,
    productImages: [
      { src: product15, name: "Beautiful Sipper" },
      { src: product26, name: "Dry fruits jar" },
      { src: product23, name: "4 Colored Diya's" },
      { src: product27, name: "Candy Jar" },
      { src: product28, name: "4 Diya's" },
    ],
  },
];

const TopProduct = () => {
  const [selectedHamper, setSelectedHamper] = useState(hampers[0]);
  const [mainImage, setMainImage] = useState(hampers[0].mainImage);
  const [transitioning, setTransitioning] = useState(false);
  const mainImageRef = useRef(null); // Create a ref for the main image section

  const handleImageClick = (img) => {
    setMainImage(img.src);
  };

  const handleHamperClick = (hamper) => {
    setTransitioning(true);
    setTimeout(() => {
      setSelectedHamper(hamper);
      setMainImage(hamper.mainImage);
      setTransitioning(false);

      // Scroll smoothly to the main image
      if (mainImageRef.current) {
        mainImageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Duration of the transition effect
  };

  return (
    <div className="p-8 rounded-lg border-y-2 shadow-lg mt-8 bg-gradient-to-br shadow-white from-[#EADBC8] to-secondary">
      <h2 className="text-4xl font-bold text-center mb-12 mt-6 text-white">
        🎁 Best Diwali Gifts For Loved Ones 🎁
      </h2>

      <div
        className="lg:flex lg:justify-between lg:gap-8 items-center"
        ref={mainImageRef} // Attach the ref to this section
      >
        <div className="lg:w-1/2 mb-6 lg:mb-0 mx-auto flex flex-col items-center">
          <img
            src={mainImage}
            alt="Selected Hamper"
            className={`w-full lg:w-[420px] h-80 md:h-96 object-center object-cover rounded-lg shadow-3xl shadow-[#F7ECDE] transition-transform transform duration-500 ${
              transitioning ? "opacity-0" : "opacity-100"
            }`}
          />
          <p className="text-rose-800 font-bold text-center text-2xl mt-4">
            {selectedHamper.price}
          </p>
        </div>

        <div className="lg:w-1/2 lg:pl-8 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-center mb-4 text-white">
            What's Inside:
          </h3>
          <div className="flex lg:flex-wrap lg:justify-center lg:gap-4 overflow-x-auto overflow-y-hidden md:overflow-hidden w-full px-2">
            {selectedHamper.productImages.map((img, index) => (
              <div
                key={index}
                className="m-2 cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-3 flex-shrink-0"
                onClick={() => handleImageClick(img)}
              >
                <img
                  src={img.src}
                  alt={img.name}
                  className="w-40 h-32 object-cover rounded-md border-4 border-white shadow-2xl shadow-[#F7ECDE] hover:shadow-white lg:w-36 lg:h-40"
                />
                <p className="text-white text-center mt-2">{img.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://wa.me/9650722648?text=Hello%2C%20I%20am%20interested%20in%20the%20product%20${encodeURIComponent(
                selectedHamper.name
              )}%20priced%20at%20${encodeURIComponent(selectedHamper.price)}.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-accent to-[#b29877] text-white font-bold py-3 px-6 rounded-full hover:shadow-white hover:shadow-md hover:bg-gradient-to-br transform transition-all duration-300 shadow-md shadow-[#F7ECDE] ease-in-out hover:scale-110">
                Shop Now
              </button>
            </a>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-center my-12 text-white shadow-md shadow-white border-2">
        More Hampers
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {hampers.map((hamper) => (
          <div
            key={hamper.id}
            className="m-4 cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:rotate-1"
            onClick={() => handleHamperClick(hamper)}
          >
            <img
              src={hamper.mainImage}
              alt={`Hamper ${hamper.id}`}
              className="w-48 h-32 object-cover rounded-lg border-4 border-white shadow-[#F7ECDE] hover:shadow-white shadow-lg hover:shadow-md"
            />
            <p className="text-center text-rose-950 font-bold border-2 mt-2">
              {hamper.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProduct;

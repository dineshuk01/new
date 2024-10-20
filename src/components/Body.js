// BodyComponent.js
import React from "react";
import mockProducts from "../Utils/mockData";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";
import TopProduct from "./TopProduct";
import ImageSlider from "./ImageSlider";

const Body = () => {
  return (
    <div>
      <Carousel />

      <h2 className=" text-center font-extrabold text-3xl text-[#613535] mb-4">
        Explore Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-8 mb-12 shadow-xl shadow-slate-50 bg-[#bd9d88]">
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <ImageSlider />
      <TopProduct />
    </div>
  );
};

export default Body;

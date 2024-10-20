import React from "react";

function ImageSlider() {
  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/9650722648?text=I'm interested in bulk orders or customizing hampers. Please provide more details.`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="relative max-w-5xl mx-auto p-8 bg-gradient-to-r from-[#CA8787] to-[#b88282] rounded-2xl my-14 shadow-2xl transform transition-all duration-500 hover:scale-105">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-[#E1ACAC] opacity-25 blur-2xl rounded-2xl"></div>

      {/* Text Section */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white tracking-wide animate-pulse">
          🎁 20% Off on Corporate Gifting & Bulk Purchases! 🎉
        </h1>
        <p className="mt-8 text-xl font-medium text-white tracking-wide leading-relaxed animate-fadeIn">
          Take advantage of our limited-time offer! Get a 20% discount on all
          corporate gifting or bulk purchases. And the best part? You can
          customize your own gift hampers with premium products from our
          collection!
        </p>
        <p className="mt-6 text-lg text-white tracking-wide animate-fadeIn">
          Create personalized gift hampers that reflect your brand or meet your
          personal preferences!
        </p>

        {/* WhatsApp Button */}
        <div className="mt-12">
          <button
            onClick={handleWhatsAppClick}
            className="inline-block px-8 py-4 bg-white text-indigo-950 font-bold text-lg rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
          >
            💬 Contact Us on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;

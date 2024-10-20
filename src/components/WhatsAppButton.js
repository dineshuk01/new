import React from "react";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/1234567890"; // Replace with your WhatsApp number

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 w-14 h-14 border-white border flex items-center justify-center p-3 rounded-full bg-[#795757] text-white shadow-lg hover:bg-green-600 transition"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
};

export default WhatsAppButton;

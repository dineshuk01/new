// src/components/Contact.js
import React from "react";
import ContactForm from "./ContactForm"; // Import ContactForm component

const Contact = () => {
  const handleCallUs = () => {
    window.location.href = "tel:9650722648"; // Directly opens dialer
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/9650722648", "_blank"); // Open WhatsApp chat
  };

  const handleInstagram = () => {
    window.open(
      "https://www.instagram.com/fabblefinds/profilecard/?igsh=dm40Mnl3MXhyOXN3"
    ); // Replace with your Instagram URL
  };

  return (
    <div className="bg-gray-50 py-10 ">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg ">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          Contact Us
        </h1>
        <p className="text-lg mb-4 text-gray-700 text-center">
          If you have any questions, inquiries, or would like to reach out,
          please fill out the form below and we will get back to you as soon as
          possible.
        </p>

        {/* ContactForm Component */}
        <ContactForm />

        {/* Buttons for WhatsApp, Instagram, and Call Us */}
        <div className="mt-8 flex flex-col items-center">
          <button
            onClick={handleCallUs}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 mb-4 w-full max-w-xs"
          >
            Call Us: 9650722648
          </button>
          <button
            onClick={handleWhatsApp}
            className="bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-700 transition duration-300 mb-4 w-full max-w-xs"
          >
            WhatsApp Us
          </button>
          <button
            onClick={handleInstagram}
            className="bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-pink-700 transition duration-300 mb-4 w-full max-w-xs"
          >
            Follow Us on Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

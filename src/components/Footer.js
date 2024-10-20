// src/compone nts/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lightblue-300 to-white py-8 mt-10 bg-[#634248] border-y-2 shadow-lg shadow-slate-50">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold text-[white] mb-4">Stay Connected</h3>
        <div className="flex justify-center mb-4">
          <a
            href="https://www.instagram.com/ankitbisht337/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-white font-bold text-lg hover:text-[white] border-2 border-white px-3 py-1 rounded-2xl"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/9650722648"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-white font-bold text-lg border-2 border-white px-3 py-1 rounded-2xl"
          >
            WhatsApp
          </a>
        </div>
        <div className="justify-center mb-4">
          <Link
            to="/"
            className="mx-4 text-white font-bold text-lg hover:text-[#A7727D]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mx-4 text-white font-bold text-lg hover:text-[#A7727D]"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="mx-4 text-white font-bold text-lg hover:text-[#A7727D]"
          >
            Contact Us
          </Link>
        </div>
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} fabblefinds. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

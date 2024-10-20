import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Utils/product35.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };

  return (
    <div className="relative">
      <div className="h-24 px-6 sm:px-10 flex justify-between items-center shadow-xl shadow-slate-50 bg-[#795757] z-50">
        <div className="text-2xl font-bold text-white">
          <Link to="/">
            <img
              src={Logo}
              alt="Girl in a jacket"
              className=" w-72"
            />
          </Link>
        </div>
        <div className="nav-items hidden md:flex items-center">
          <ul className="flex justify-center items-center gap-4 mx-4 text-xl">
            <li>
              <Link to={"/"}>
                <h1 className="hover:font-bold text-white">Home</h1>
              </Link>
            </li>
            <li className="hover:font-bold text-white transition duration-300 text-xl">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="hover:font-bold text-white transition duration-300 text-xl">
              <Link to={"contact"}>Contact</Link>
            </li>
          </ul>
          <a
            href="tel:9650722648"
            className="ml-6 bg-transparent text-white font-bold py-2 px-4 rounded-full transition duration-300 border-2 border-white hover:shadow-lg"
          >
            Call Us: 9650722648
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={toggleMenu} // Close menu on backdrop click
          />
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-[#A79277] shadow-lg transition-transform transform ease-in-out duration-300 z-40 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="flex flex-col p-4 text-lg">
              <li className="hover:font-bold text-white transition duration-300">
                <Link
                  to={"/"}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="hover:font-bold text-white transition duration-300">
                <Link
                  to={"/about"}
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="hover:font-bold text-white transition duration-300">
                <Link
                  to={"contact"}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="hover:font-bold text-white transition duration-300 mt-4">
                <a
                  href="tel:9650722648"
                  onClick={toggleMenu}
                >
                  Call Us: 9650722648
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;

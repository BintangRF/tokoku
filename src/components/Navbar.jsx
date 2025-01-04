import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-[#10375C] text-white shadow-md"
          : "md:bg-transparent md:text-[#10375C] bg-[#10375C] text-white"
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" width={50} />
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6h16.5M3.75 12h16.5m-16.5 6h16.5"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } bg-[#10375C] md:bg-transparent  absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto  md:flex items-center z-20 md:space-x-6 space-y-2 md:space-y-0 font-medium p-4 md:p-0 md:shadow-none`}
        >
          <a
            href="/"
            className={`block transition duration-200 ${
              isScrolled ? "text-white" : "hover:text-[#EB8317]"
            }`}
          >
            Home
          </a>

          <a
            href="products"
            className={`block transition duration-200 ${
              isScrolled ? "text-white" : "hover:text-[#EB8317]"
            }`}
          >
            Products
          </a>

          <a
            href="about"
            className={`block transition duration-200 ${
              isScrolled ? "text-white" : "hover:text-[#EB8317]"
            }`}
          >
            About
          </a>
        </div>

        {/* Call to Action Button */}
        <a
          href="#register"
          className="hidden md:block bg-[#EB8317] text-white px-4 py-2 rounded hover:bg-[#10375C] hover:text-white transition duration-200"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

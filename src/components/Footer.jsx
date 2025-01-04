import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#10375C] text-white py-6 px-4">
      <div className="container flex flex-col items-center justify-between mx-auto sm:flex-row">
        <div className="flex flex-col items-center mb-4 sm:items-start sm:mb-0 ">
          <h4 className="text-xl font-semibold">Tokoku</h4>
          <p className="text-sm text-gray-400">
            Belanja Produk Terbaik dengan Mudah
          </p>
        </div>

        {/* Centered Footer Links */}
        <div className="flex flex-col items-center mb-4 sm:flex-row sm:mb-0 sm:justify-center">
          <a
            href="/"
            className="mx-2 text-sm text-gray-400 hover:text-[#EB8317]"
          >
            Home
          </a>
          <a
            href="products"
            className="mx-2 text-sm text-gray-400 hover:text-[#EB8317]"
          >
            Products
          </a>
          <a
            href="about"
            className="mx-2 text-sm text-gray-400 hover:text-[#EB8317]"
          >
            About
          </a>
        </div>

        <div className="flex items-center justify-center mt-4 sm:justify-start sm:mt-0">
          <a
            href="https://www.facebook.com"
            className="mx-2 text-gray-400 hover:text-[#EB8317]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            className="mx-2 text-gray-400 hover:text-[#EB8317]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="mx-2 text-gray-400 hover:text-[#EB8317]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            className="mx-2 text-gray-400 hover:text-[#EB8317]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="mt-6 text-sm text-center text-gray-400">
        &copy; 2024 Tokoku. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

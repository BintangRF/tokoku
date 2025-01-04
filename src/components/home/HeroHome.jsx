import React from "react";
import hero from "../../assets/hero.webp";

const HeroHome = () => {
  return (
    <section className="py-10">
      <div className="container flex flex-col-reverse items-center px-4 mx-auto md:flex-row">
        {/* Bagian Kiri (Teks) */}
        <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
          <h1 className="text-6xl font-bold text-[#10375C]">
            Belanja Produk Terbaik{" "}
            <span className="text-[#EB8317]">Dengan Mudah</span> dan{" "}
            <span className="text-[#EB8317]">Aman</span>
          </h1>
          <p className="text-gray-600">
            Produk berkualitas, pengiriman cepat, dan harga terbaik hanya untuk
            Anda
          </p>
          <div className="flex justify-center space-x-4 md:justify-start">
            <button className="bg-[#FADFA1] text-[#10375C] hover:text-white px-4 py-2 rounded-full shadow border-[#EB8317] border-2 hover:bg-[#EB8317]">
              Login
            </button>
            <button className="text-[#EB8317] px-6 py-2 font-black flex items-center gap-1">
              Jelajahi Toko
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9l-7.5 7.5L4.5 9"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Bagian Kanan (Gambar) */}
        <div className="relative flex justify-center w-full mb-6 md:w-1/2 md:mb-0">
          <img
            src={hero}
            alt="Hero"
            className="w-[1000px] max-w-md rotate-[-10deg]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;

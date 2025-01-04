import React from "react";

const HeroProducts = () => {
  return (
    <section className="py-10">
      <div className="container flex flex-col-reverse items-center justify-between px-4 mx-auto md:flex-row">
        {/* Bagian Kiri (Teks) */}
        <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl font-bold text-[#10375C]">
            Temukan Produk <span className="text-[#EB8317]">Terbaik</span> untuk
            Kebutuhan Anda, dengan{" "}
            <span className="text-[#EB8317]">Harga Terjangkau</span> dan
            <span className="text-[#EB8317]">Kualitas Terjamin</span>
          </h1>
        </div>

        {/* Bagian Kanan */}
        <div className="w-full space-y-6 text-center md:w-1/4 md:text-left">
          <p className="text-gray-600">
            Produk berkualitas mulai dari elektronik, fashion, hingga kebutuhan
            rumah tangga tersedia dengan harga terbaik.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroProducts;

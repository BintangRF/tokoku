import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProductCarousel = ({ products }) => {
  return (
    <div className="text-[#10375C]">
      <h2 className="text-3xl font-bold text-center">
        Temukan Produk Terbaik Kami
      </h2>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        className="carousel"
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="flex-none py-20 transition-transform duration-300 transform"
          >
            <div className="bg-white text-gray-800 p-4 h-[450px] rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
              {/* Image */}
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
                <span className="absolute top-2 right-2 bg-[#10375C] text-white text-sm px-2 py-1 rounded-lg shadow-lg">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between h-[200px]">
                {/* Title */}
                <h3 className="text-xl font-semibold hover:text-[#1E90FF] transition-colors duration-300">
                  {product.title}
                </h3>

                {/* Price */}
                <p className="text-lg font-bold text-green-600">
                  ${product.price}
                </p>

                {/* Button */}
                <Link
                  to={`/product/${product.id}`}
                  className="bg-[#EB8317] text-white px-4 py-2 mt-4 font-bold rounded-lg hover:bg-[#10375C] hover:text-[#F9D342] transition duration-300 text-center"
                >
                  Lihat Produk
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;

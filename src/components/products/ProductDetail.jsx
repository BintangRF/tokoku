import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-8xl">
        <i className="fa-solid fa-spinner text-[#10375C] animate-spin"></i>
      </div>
    );
  if (!product)
    return (
      <div className="text-[#10375C] flex items-center justify-center min-h-screen text-8xl">
        Product not found!
      </div>
    );

  return (
    <div className="min-h-screen py-10 text-[#10375C]">
      <div className="container flex flex-col items-center gap-12 px-6 mx-auto lg:flex-row">
        {/* Image Section */}
        <div className="flex-shrink-0 lg:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="transition-transform duration-300 transform rounded-lg shadow-xl hover:scale-110"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 hover:underline hover:text-[#F9D342] transition-colors">
            {product.title}
          </h1>
          <p className="text-lg mb-6 leading-relaxed border-l-4 border-[#F9D342] pl-4">
            {product.description}
          </p>
          <p className="mb-6 text-3xl font-bold">
            <span className="text-[#F9D342]">${product.price}</span>
          </p>
          <button className="px-8 py-3 bg-[#F9D342] text-[#10375C] font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-[#10375C] hover:text-[#F9D342] transition duration-300 transform hover:scale-105">
            Beli
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

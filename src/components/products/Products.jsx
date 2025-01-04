import React, { useState, useEffect } from "react";
import ProductCarousel from "./ProductCarousel";
import HeroProducts from "./HeroProducts";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-8xl">
        <i className="fa-solid fa-spinner text-[#10375C] animate-spin"></i>
      </div>
    );

  return (
    <div className="min-h-screen py-10">
      <HeroProducts />

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Cari Produk..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#10375C]"
        />
      </div>

      <ProductCarousel products={filteredProducts} />
    </div>
  );
};

export default Products;

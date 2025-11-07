import React, { useEffect, useState } from "react";
import API from "../api/api";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { fetchCart } = useCart();

  useEffect(() => {
    API.get("/products").then((res) => setProducts(res.data));
  }, []);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="relative min-h-screen bg-black mt-24 sm:mt-28 md:mt-20">
      <div className="max-w-[90%] md:max-w-7xl mx-auto p-4 sm:p-6 md:p-8 relative z-10">
        
        {/* Heading */}
        <span className="text-2xl sm:text-3xl md:text-3xl font-medium text-white block mb-6 mt-10 sm:mt-14 md:mt-16">
          All Products
        </span>

        {/* Outer Border Wrapper */}
        <div className="border border-gray-800 border-opacity-20 rounded-lg p-7">
          {/* Product Grid */}
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              gap-x-6 
              gap-y-8
            "
          >
            {products.length === 0 ? (
              <p className="col-span-full text-center text-gray-500 text-sm sm:text-base">
                Loading products...
              </p>
            ) : (
              products.map((p) => <ProductCard key={p._id} product={p} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;


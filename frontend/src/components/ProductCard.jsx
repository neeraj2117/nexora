import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { IMAGE_URL } from "../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      await addToCart(product._id, 1);
      toast.success(`${product.name} added to cart!`);
      setTimeout(() => setLoading(false), 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-black rounded-xl border border-gray-800 p-4 flex flex-col">
      <img
        src={
          product?.image
            ? `${IMAGE_URL}/${product.image}`
            : "https://via.placeholder.com/200"
        }
        className="w-full h-60 object-cover rounded-lg"
        alt={product?.name || "Product"}
      />

      <div className="mt-4 flex justify-between text-white">
        <h2 className="truncate max-w-[60%]">{product.name}</h2>
        <p className="text-green-500 font-semibold">₹{product.price}</p>
      </div>

      {/* Add to Cart button */}
      <div className="mt-4">
        <button
          onClick={handleAddToCart}
          disabled={loading}
          className={`w-full bg-black border border-gray-700 text-white py-2 px-4 rounded-xl transition ${
            loading
              ? "cursor-not-allowed opacity-70"
              : "hover:bg-white hover:text-black cursor-pointer"
          }`}
        >
          {loading ? (
            <div className="flex justify-center items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Adding...
            </div>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

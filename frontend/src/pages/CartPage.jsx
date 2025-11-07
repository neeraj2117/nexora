import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { IMAGE_URL } from "../api/api";
import CheckoutFormModal from "../components/CheckoutFormModal";
import ReceiptModal from "../components/ReceiptModal";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, increment, decrement, removeFromCart, fetchCart, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const total = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0);

  if (!cart || cart.length === 0) {
    return (
      <div className="bg-black min-h-screen w-full text-white flex flex-col justify-center items-center">
        <p className="text-gray-400 text-center mt-20">Your cart is empty.</p>
      </div>
    );
  }

  const handleCheckoutSubmit = (form) => {
    const receiptData = {
      receiptId: `ORD-${Date.now()}`,
      name: form.name,
      email: form.email,
      total: total + 50,
      timestamp: new Date().toISOString(),
      items: cart.map((c) => ({
        name: c.product.name,
        qty: c.qty,
        image: `${IMAGE_URL}/${c.product.image}`,
        price: c.product.price,
      })),
    };

    clearCart(); 
    setShowCheckout(false);

    navigate("/success", { state: { receipt: receiptData } });
  };

  return (
    <div className="bg-black min-h-screen w-full text-white">
      <div className="px-6 max-w-7xl mx-auto mt-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* CART TABLE */}
          <div className="lg:col-span-2 border border-white/30 p-0 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[2fr_1fr_1fr_0.5fr] font-semibold text-gray-300 pb-4 px-6 pt-5">
              <span>Product</span>
              <span className="text-center">Price</span>
              <span className="text-center">Quantity</span>
              <span className="text-center">Remove</span>
            </div>
            <hr className="border-white/30 m-0" />
            <div className="px-6">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="grid grid-cols-[2fr_1fr_1fr_0.5fr] items-center py-3 border-b border-white/20 last:border-b-0"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={`${IMAGE_URL}/${item.product.image}`}
                      className="w-14 h-14 rounded-lg object-cover"
                      alt={item.product.name}
                    />
                    <div className="leading-tight">
                      <h3 className="font-semibold">{item.product.name}</h3>
                      <p className="text-gray-400 text-xs">
                        {item.product.description?.slice(0, 45)}
                      </p>
                    </div>
                  </div>
                  <p className="text-center">₹{item.product.price}</p>
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => decrement(item.product._id)}
                      className="w-7 h-7 border border-white/30 rounded-md hover:bg-white/10 text-sm"
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => increment(item.product._id)}
                      className="w-7 h-7 border border-white/30 rounded-md hover:bg-white/10 text-sm"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button onClick={() => removeFromCart(item._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-red-500 hover:text-red-600 transition"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14H6L5 6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M9 6V4h6v2" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUMMARY */}
          <div className="border border-white/30 p-6 rounded-xl space-y-4 h-fit">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="flex justify-between text-gray-300">
              <span>Items Total</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Delivery</span>
              <span>₹50</span>
            </div>
            <hr className="border-white/20" />
            <div className="flex justify-between text-lg font-semibold">
              <span>Grand Total</span>
              <span>₹{total + 50}</span>
            </div>
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-white cursor-pointer text-black mt-4 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* MODALS */}
      {showCheckout && (
        <CheckoutFormModal
          total={total}
          onSubmit={handleCheckoutSubmit}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </div>
  );
};

export default CartPage;

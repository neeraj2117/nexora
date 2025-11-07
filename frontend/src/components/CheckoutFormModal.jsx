import React, { useState } from "react";

const CheckoutFormModal = ({ total, onSubmit, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert("Please fill all fields");

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onSubmit(form);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="
          w-full 
          max-w-[360px] 
          text-center 
          border border-gray-300/60 
          rounded-2xl 
          px-6 
          sm:px-8 
          bg-white 
          relative
        "
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">Checkout</h1>
        <p className="text-gray-500 text-sm mt-2">
          Enter your details to complete the order
        </p>

        {/* Name Input */}
        <div className="flex items-center mt-10 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-none outline-none text-black ring-0 w-full"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="border-none outline-none text-black ring-0 w-full"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-7 px-4 mb-7">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-black/60 hover:bg-black/50 rounded-full cursor-pointer transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-black cursor-pointer text-white rounded-full hover:opacity-90 transition"
          >
            {loading ? "Processing..." : `Pay ₹${total + 50}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutFormModal;

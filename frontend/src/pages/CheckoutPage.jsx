import React, { useState } from "react";
import API from "../api/api";
import ReceiptModal from "../components/ReceiptModal";

const CheckoutPage = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [receipt, setReceipt] = useState(null);

  const submitCheckout = async () => {
    const cart = await API.get("/cart");

    const response = await API.post("/checkout", {
      cartItems: cart.data.items,
      customer: form
    });

    setReceipt(response.data.receipt);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

      <div className="space-y-4 max-w-md">

        <input
          type="text"
          placeholder="Your Name"
          className="border px-3 py-2 w-full"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="border px-3 py-2 w-full"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <button
          onClick={submitCheckout}
          className="bg-green-600 text-white px-5 py-2 rounded"
        >
          Checkout
        </button>
      </div>

      {receipt && <ReceiptModal receipt={receipt} />}
    </div>
  );
};

export default CheckoutPage;

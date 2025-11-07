import React from "react";

const ReceiptModal = ({ receipt }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4">Receipt</h2>

        <p><strong>ID:</strong> {receipt.receiptId}</p>
        <p><strong>Total:</strong> ₹{receipt.total}</p>
        <p><strong>Date:</strong> {new Date(receipt.timestamp).toLocaleString()}</p>

        <button
          onClick={() => window.location.href = "/"}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReceiptModal;


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const receipt = location.state?.receipt;
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (!receipt) {
      navigate("/");
      return;
    }
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, [receipt, navigate]);

  if (!receipt) return null;

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4 relative">
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={1200}
          height={window.innerHeight}
          numberOfPieces={500}
          gravity={0.2}
          recycle={false}
          confettiSource={{
            x:
              typeof window !== "undefined"
                ? (window.innerWidth - 1200) / 2
                : 0,
            y: 0,
            w: 1200,
            h: 10,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        />
      )}

      <div className="bg-white rounded-sm mt-20 shadow-sm w-full max-w-6xl overflow-hidden flex flex-col h-auto md:h-[70vh] transition-all duration-300">
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-gray-200 shrink-0 flex-wrap">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Order Details
            </h2>
            <p className="text-gray-500 font-light text-md mt-1">
              Your order will be with you soon
            </p>
          </div>
          <div className="text-right text-sm text-gray-600 mt-3 md:mt-0">
            <p>
              <span className="font-semibold">Order Number:</span> #
              {receipt.receiptId}
            </p>
            <p>
              <span className="font-semibold">Order Placement:</span>{" "}
              {new Date(receipt.timestamp).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-4 px-6 py-4 bg-gray-50 text-gray-600 text-sm font-semibold shrink-0">
          <span className="text-left">Item</span>
          <span className="text-center">Quantity</span>
          <span className="text-center">Price</span>
          <span className="text-right">Delivery Expected</span>
        </div>

        <div className="overflow-y-auto grow max-h-[60vh] md:max-h-[70vh]">
          {receipt.items.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 items-center px-6 py-7 border-t border-gray-200 text-sm"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image || "https://via.placeholder.com/60"}
                  alt={item.name}
                  className="w-20 h-16 rounded-md object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p
                    className="font-semibold text-[16px] text-gray-800 truncate max-w-[180px] sm:max-w-[250px]"
                    title={item.name}
                  >
                    {item.name}
                  </p>
                  {/* Hidden on md and below */}
                  <p className="text-gray-500 text-[14px] hidden lg:block">
                    Color: {item.color || "N/A"} &nbsp; Size:{" "}
                    {item.size || "N/A"}
                  </p>
                </div>
              </div>

              <p className="text-center text-gray-700">Qty: {item.qty}</p>
              <p className="text-center text-gray-700">₹{item.price}</p>
              <p className="text-right text-gray-700">
                {item.deliveryDate ||
                  new Date(receipt.timestamp)
                    .toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                    .replace(/ /g, " ")}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 bg-gray-50 shrink-0 flex-wrap gap-3">
          <div className="flex gap-3">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition">
              Track Your Order
            </button>
            <button className="bg-gray-800 text-white px-5 py-2 rounded-md hover:opacity-90 transition">
              Cancel Order
            </button>
          </div>

          <div className="text-gray-800 font-semibold text-lg">
            Total: ₹{receipt.total}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;

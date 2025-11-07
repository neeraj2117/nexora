import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1135);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="
        bg-black text-white 
        w-[74%] 
        fixed top-0 left-1/2 -translate-x-1/2 
        z-50 shadow-lg 
        px-0 py-5 
        mt-5
        rounded-2xl 
      "
    >
      <div className="w-full mx-auto border border-gray-700 border-opacity-5 rounded-xl p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <h1 className="text-3xl font-medium">Nexora</h1>
          </a>

          {/* Desktop Menu */}
          {!isMobile && (
            <div className="flex items-center gap-8 ml-10">
              {["Products", "Stories", "Pricing", "Docs"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative overflow-hidden h-6 group"
                >
                  <span className="block group-hover:-translate-y-full transition-transform duration-300">
                    {item}
                  </span>
                  <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                    {item}
                  </span>
                </a>
              ))}
            </div>
          )}

          {/* Right Section */}
          {!isMobile && (
            <div className="flex items-center gap-6">
              <a href="/cart" className="relative cursor-pointer">
                <ShoppingBag className="w-7 h-7" />
                {cart.length > 0 && (
                  <span
                    className="absolute -top-2 -right-2 bg-red-600 text-white text-xs 
                    w-5 h-5 rounded-full flex items-center justify-center animate-pulse"
                  >
                    {cart.length}
                  </span>
                )}
              </a>

              <button className="border border-gray-600 hover:bg-gray-800 px-4 py-2 rounded-full font-medium transition">
                Contact
              </button>

              <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                Get Started
              </button>
            </div>
          )}

          {/* Hamburger Button */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Menu (dropdown) */}
        {isMobile && menuOpen && (
          <div className="mt-4 flex flex-col items-center gap-4 text-center border-t border-gray-800 pt-4">
            {["Products", "Stories", "Pricing", "Docs"].map((item) => (
              <a key={item} href="#" className="text-white text-lg">
                {item}
              </a>
            ))}

            <a href="/cart" className="relative cursor-pointer mt-2">
              <ShoppingBag className="w-7 h-7 inline" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-2 -right-3 bg-red-600 text-white text-xs 
                  w-5 h-5 rounded-full flex items-center justify-center animate-pulse"
                >
                  {cart.length}
                </span>
              )}
            </a>

            <button className="border border-gray-600 hover:bg-gray-800 px-4 py-2 rounded-full font-medium transition w-full">
              Contact
            </button>

            <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition w-full">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

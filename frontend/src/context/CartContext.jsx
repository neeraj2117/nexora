import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../api/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart
  const fetchCart = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/cart`);
      setCart(data?.cartItems ?? []);
    } catch (err) {
      console.error("Fetch cart failed", err);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Add to cart
  const addToCart = async (productId, qty = 1) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/cart/add`, {
        productId,
        qty,
      });
      setCart((prev) => {
        const idx = prev.findIndex((i) => i.product._id === productId);
        if (idx >= 0) {
          prev[idx] = data.cartItem;
          return [...prev];
        }
        return [...prev, data.cartItem];
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to add item");
    }
  };

  // Increment quantity
  const increment = async (productId) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/cart/add`, {
        productId,
        qty: 1,
      });
      setCart((prev) =>
        prev.map((i) => (i.product._id === productId ? data.cartItem : i))
      );
      toast.info("Quantity increased");
    } catch (err) {
      console.error(err);
      toast.error("Failed to increase quantity");
    }
  };

  // Decrement quantity
  const decrement = async (productId) => {
  try {
    const item = cart.find((i) => i.product._id === productId);
    if (!item) return;

    if (item.qty <= 1) {
      await removeFromCart(item._id);
      return;
    }

    const { data } = await axios.post(`${BASE_URL}/cart/add`, {
      productId,
      qty: -1, 
    });

    setCart((prev) =>
      prev.map((i) => (i.product._id === productId ? data.cartItem : i))
    );

    toast.info("Quantity decreased");
  } catch (err) {
    console.error(err);
    toast.error("Failed to decrease quantity");
  }
};

  // Remove from cart
  const removeFromCart = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/cart/${id}`);
      setCart((prev) => prev.filter((i) => i._id !== id));
      toast.error("Item removed");
    } catch (err) {
      console.error(err);
      toast.error("Failed to remove item");
    }
  };

  // Clear cart
  const clearCart = async () => {
    try {
      await axios.delete(`${BASE_URL}/cart`);
      setCart([]);
    } catch (error) {
      console.error("Clear cart failed", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increment, decrement, removeFromCart, fetchCart, loading, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

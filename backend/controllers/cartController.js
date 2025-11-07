import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("product");

    const safeItems = cartItems.filter((item) => item.product);

    const total = safeItems.reduce((sum, item) => {
      return sum + item.product.price * item.qty;
    }, 0);

    return res.status(200).json({ cartItems: safeItems, total });
  } catch (error) {
    console.error("Get cart error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { productId, qty } = req.body;
    if (!productId)
      return res.status(400).json({ message: "productId is required" });

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const userId = req.user?.id || "guest";
    let existingItem = await Cart.findOne({ product: productId, userId });

    // Allow both +ve & -ve qty's
    let changeQty = Number(qty) || 1;

    if (existingItem) {
      existingItem.qty += changeQty;

      // Prevent going below 1
      if (existingItem.qty <= 0) {
        await Cart.findByIdAndDelete(existingItem._id);
        return res.status(200).json({ message: "Item removed", removed: true });
      }

      if (existingItem.qty > product.stock) existingItem.qty = product.stock;

      await existingItem.save();
      const populatedItem = await existingItem.populate("product");
      return res
        .status(200)
        .json({ message: "Quantity updated", cartItem: populatedItem });
    }

    const newQty = changeQty > 0 ? changeQty : 1; 
    const newItem = new Cart({ product: productId, qty: newQty, userId });
    await newItem.save();
    const populatedItem = await newItem.populate("product");

    return res
      .status(201)
      .json({ message: "Added to cart", cartItem: populatedItem });
  } catch (error) {
    console.error("Add to cart error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Cart.findById(id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    await Cart.findByIdAndDelete(id);

    return res.status(200).json({ message: "Removed from cart" });
  } catch (error) {
    console.error("Remove cart error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const clearCart = async (req, res) => {
  try {
    const userId = req.user?.id || "guest";
    await Cart.deleteMany({ userId });

    return res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Clear cart error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};
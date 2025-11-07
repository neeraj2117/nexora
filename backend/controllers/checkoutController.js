export const checkout = async (req, res) => {
  try {
    const { cartItems } = req.body;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // calculate total
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });

    const receipt = {
      receiptId: "R" + Math.floor(Math.random() * 99999),
      total,
      timestamp: new Date(),
    };

    res.json({
      message: "Checkout successful",
      receipt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

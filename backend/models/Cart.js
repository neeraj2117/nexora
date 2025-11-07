import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  qty: { type: Number, default: 1 },
  userId: { type: String, default: "guest" } 
});

const Cart = mongoose.model("Cart", CartItemSchema);
export default Cart;

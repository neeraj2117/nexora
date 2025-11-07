import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import productsRouter from "./routes/ProductRoutes.js";
import cartRouter from "./routes/CartRoutes.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

// Middlewares
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// ✅ VERY IMPORTANT: serve uploads BEFORE routes
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// db
connectDb();

// Routes
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);

// Test route
app.get('/', (req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

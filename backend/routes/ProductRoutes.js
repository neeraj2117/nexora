import express from "express";
import { addProducts, fetchProducts } from "../controllers/productController.js";
import upload from "../middleware/upload.js";

const productRouter = express.Router();

productRouter.get("/", fetchProducts);
productRouter.post("/add", upload.single("image"), addProducts);


export default productRouter;

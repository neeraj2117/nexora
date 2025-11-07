import Product from "../models/Product.js";


export const fetchProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    console.error("Fetch products error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const addProducts = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: "Name & Price are required" });
    }

    console.log("Multer file uploaded at:", req.file?.path);
    
    // multer file
    const imageUrl = req.file ? `uploads/${req.file.filename}` : "";

    const newProduct = new Product({
      name,
      price,
      image: imageUrl,
    });

    await newProduct.save();

    return res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Add product error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

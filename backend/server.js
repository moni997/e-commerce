import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error(err));
  app.use("/api/products", productRoutes);
} else {
  console.warn("MONGO_URI not set. Serving mock products.");
  const mockProducts = [
    {
      _id: "p1",
      name: "Classic T-Shirt",
      price: 19.99,
      description: "Soft cotton tee in multiple colors.",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
    },
    {
      _id: "p2",
      name: "Running Shoes",
      price: 59.99,
      description: "Lightweight and comfortable for daily runs.",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    },
    {
      _id: "p3",
      name: "Leather Backpack",
      price: 89.0,
      description: "Durable backpack with multiple compartments.",
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
    },
  ];
  app.get("/api/products", (req, res) => {
    res.json(mockProducts);
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

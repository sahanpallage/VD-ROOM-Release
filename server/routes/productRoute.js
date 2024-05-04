import express from "express";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";
import {
  addToWishList,
  createProduct,
  deleteProduct,
  getAProduct,
  getAllProducts,
  rating,
  updateProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/create", jwtValidation, isAdmin, createProduct);
productRouter.get("/:id", getAProduct);
productRouter.put("/wishlist", jwtValidation, addToWishList);
productRouter.put("/rating", jwtValidation, rating);
productRouter.put("/:id", jwtValidation, isAdmin, updateProduct);
productRouter.delete("/:id", jwtValidation, isAdmin, deleteProduct);
productRouter.get("/", getAllProducts);

export default productRouter;

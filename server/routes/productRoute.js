import express from "express";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";
import {
  createProduct,
  deleteProduct,
  getAProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/create", jwtValidation, isAdmin, createProduct);
productRouter.get("/:id", getAProduct);
productRouter.put("/update/:id", jwtValidation, isAdmin, updateProduct);
productRouter.delete("/delete/:id", jwtValidation, isAdmin, deleteProduct);
productRouter.get("/", getAllProducts);

export default productRouter;

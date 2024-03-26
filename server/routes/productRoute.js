import express from "express";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";
import {
  addToWishList,
  createProduct,
  deleteImages,
  deleteProduct,
  getAProduct,
  getAllProducts,
  rating,
  updateProduct,
  uploadImages,
} from "../controllers/productController.js";
import { productImgResize, uploadPhoto } from "../middlewares/uploadImages.js";

const productRouter = express.Router();

productRouter.post("/create", jwtValidation, isAdmin, createProduct);
productRouter.put(
  "/upload",
  jwtValidation,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);
productRouter.get("/:id", getAProduct);
productRouter.put("/wishlist", jwtValidation, addToWishList);
productRouter.put("/rating", jwtValidation, rating);
productRouter.put("/update/:id", jwtValidation, isAdmin, updateProduct);
productRouter.delete("/delete/:id", jwtValidation, isAdmin, deleteProduct);
productRouter.delete("/delete-img/:id", jwtValidation, isAdmin, deleteImages);
productRouter.get("/", getAllProducts);

export default productRouter;

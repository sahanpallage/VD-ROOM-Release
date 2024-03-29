import express from "express";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";
import { uploadImages, deleteImages } from "../controllers/uploadController.js";
import { productImgResize, uploadPhoto } from "../middlewares/uploadImages.js";

const uploadRouter = express.Router();

uploadRouter.post(
  "/",
  jwtValidation,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);
uploadRouter.delete("/delete-img/:id", jwtValidation, isAdmin, deleteImages);

export default uploadRouter;

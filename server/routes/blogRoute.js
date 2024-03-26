import express from "express";
import {
  createBlog,
  deleteBlog,
  disLikeBlog,
  getAllBlogs,
  getBlog,
  likeBlog,
  updateBlog,
  uploadImages,
} from "../controllers/blogController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";
import { blogImgResize, uploadPhoto } from "../middlewares/uploadImages.js";

const blogRouter = express.Router();

blogRouter.get("/:id", getBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.put("/likes", jwtValidation, likeBlog);
blogRouter.put("/dislikes", jwtValidation, disLikeBlog);
blogRouter.post("/create", jwtValidation, isAdmin, createBlog);
blogRouter.put("/update/:id", jwtValidation, isAdmin, updateBlog);
blogRouter.delete("/delete/:id", jwtValidation, isAdmin, deleteBlog);
blogRouter.put(
  "/upload/:id",
  jwtValidation,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);

export default blogRouter;

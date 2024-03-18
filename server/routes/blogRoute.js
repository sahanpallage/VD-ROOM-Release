import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from "../controllers/blogController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";

const blogRouter = express.Router();

blogRouter.get("/:id", getBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.post("/create", jwtValidation, isAdmin, createBlog);
blogRouter.put("/update/:id", jwtValidation, isAdmin, updateBlog);
blogRouter.delete("/delete/:id", jwtValidation, isAdmin, deleteBlog);

export default blogRouter;

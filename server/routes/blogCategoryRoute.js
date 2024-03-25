import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controllers/blogCategoryController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";

const blogCategoryRouter = express.Router();

blogCategoryRouter.post("/", jwtValidation, isAdmin, createCategory);
blogCategoryRouter.put("/:id", jwtValidation, isAdmin, updateCategory);
blogCategoryRouter.delete("/:id", jwtValidation, isAdmin, deleteCategory);
blogCategoryRouter.get("/:id", getCategory);
blogCategoryRouter.get("/", getAllCategory);

export default blogCategoryRouter;

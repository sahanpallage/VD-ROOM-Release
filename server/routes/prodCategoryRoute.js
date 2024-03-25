import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controllers/prodCategoryController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";

const prodCategoryRouter = express.Router();

prodCategoryRouter.post("/", jwtValidation, isAdmin, createCategory);
prodCategoryRouter.put("/:id", jwtValidation, isAdmin, updateCategory);
prodCategoryRouter.delete("/:id", jwtValidation, isAdmin, deleteCategory);
prodCategoryRouter.get("/:id", getCategory);
prodCategoryRouter.get("/", getAllCategory);

export default prodCategoryRouter;

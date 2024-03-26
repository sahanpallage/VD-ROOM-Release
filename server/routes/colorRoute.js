import express from "express";
import {
  createColor,
  deleteColor,
  getAllColor,
  getColor,
  updateColor,
} from "../controllers/colorController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";

const colorRouter = express.Router();

colorRouter.post("/", jwtValidation, isAdmin, createColor);
colorRouter.put("/:id", jwtValidation, isAdmin, updateColor);
colorRouter.delete("/:id", jwtValidation, isAdmin, deleteColor);
colorRouter.get("/:id", getColor);
colorRouter.get("/", getAllColor);

export default colorRouter;

import express from "express";
import {
  createBrand,
  deleteBrand,
  getAllBrand,
  getBrand,
  updateBrand,
} from "../controllers/brandController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";

const brandRouter = express.Router();

brandRouter.post("/", jwtValidation, isAdmin, createBrand);
brandRouter.put("/:id", jwtValidation, isAdmin, updateBrand);
brandRouter.delete("/:id", jwtValidation, isAdmin, deleteBrand);
brandRouter.get("/:id", getBrand);
brandRouter.get("/", getAllBrand);

export default brandRouter;

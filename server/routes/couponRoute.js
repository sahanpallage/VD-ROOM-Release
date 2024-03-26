import express from "express";
import {
  createCoupon,
  deleteCoupon,
  getAllCoupons,
  updateCoupon,
} from "../controllers/couponController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";

const couponRouter = express.Router();

couponRouter.post("/create", jwtValidation, isAdmin, createCoupon);
couponRouter.get("/", jwtValidation, isAdmin, getAllCoupons);
couponRouter.put("/:id", jwtValidation, isAdmin, updateCoupon);
couponRouter.delete("/:id", jwtValidation, isAdmin, deleteCoupon);

export default couponRouter;

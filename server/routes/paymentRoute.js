import express from "express";
import {
  addPayment,
  deletePayment,
  getAPayment,
  updatePayment,
} from "../controllers/userPaymentController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";

const paymentRouter = express.Router();

paymentRouter.post("/", jwtValidation, addPayment);
paymentRouter.put("/:id", jwtValidation, updatePayment);
paymentRouter.delete("/:id", jwtValidation, deletePayment);
paymentRouter.get("/:id", jwtValidation, getAPayment);

export default paymentRouter;

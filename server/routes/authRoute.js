import express from "express";
import {
  blockedUser,
  deleteUser,
  getAllUser,
  getUser,
  handleRefreshToken,
  loginController,
  logoutController,
  registerController,
  unblockedUser,
  updatePassword,
  updateUser,
  forgotPasswordToken,
  resetPassword,
} from "../controllers/authController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";

const authRouter = express.Router();

// POST routes
authRouter.post("/register", registerController);
authRouter.post("/forgot-password", forgotPasswordToken);
authRouter.post("/login", loginController);

// GET routes
authRouter.get("/all-users", getAllUser);
authRouter.get("/refresh", handleRefreshToken);
authRouter.get("/logout", logoutController);
authRouter.get("/user/:id", jwtValidation, isAdmin, getUser);

// DELETE routes
authRouter.delete("/delete/:id", deleteUser);

// PUT || PATCH routes
authRouter.put("/reset-password/:token", resetPassword);
authRouter.patch("/update", jwtValidation, updateUser);
authRouter.put("/password", jwtValidation, updatePassword);
authRouter.put("/block-user/:id", jwtValidation, isAdmin, blockedUser);
authRouter.put("/unblock-user/:id", jwtValidation, isAdmin, unblockedUser);

export default authRouter;

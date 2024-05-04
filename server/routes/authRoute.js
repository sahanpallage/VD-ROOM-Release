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
  adminLoginController,
  getWishList,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  getAllOrders,
  getUserById,
} from "../controllers/authController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";

const authRouter = express.Router();

// POST routes
authRouter.post("/register", registerController);
authRouter.post("/forgot-password", forgotPasswordToken);
authRouter.post("/login", loginController);
authRouter.post("/admin-login", adminLoginController);
authRouter.post("/cart", jwtValidation, userCart);
authRouter.post("/cart/apply-coupon", jwtValidation, applyCoupon);
authRouter.post("/cart/cash-order", jwtValidation, createOrder);
authRouter.post("/get-orderbyuser/:id", jwtValidation, isAdmin, getUserById);

// GET routes
authRouter.get("/all-users", getAllUser);
authRouter.get("/refresh", handleRefreshToken);
authRouter.get("/logout", logoutController);
authRouter.get("/user/:id", jwtValidation, isAdmin, getUser);
authRouter.get("/wishlist", jwtValidation, getWishList);
authRouter.get("/get-cart", jwtValidation, getUserCart);
authRouter.get("/get-orders", jwtValidation, getOrders);
authRouter.get("/get-allOrders", jwtValidation, isAdmin, getAllOrders);

// DELETE routes
authRouter.delete("/delete/:id", deleteUser);
authRouter.delete("/empty-cart", jwtValidation, emptyCart);

// PUT routes
authRouter.put("/reset-password/:token", resetPassword);
authRouter.put("/update", jwtValidation, updateUser);
authRouter.put("/save-address", jwtValidation, saveAddress);
authRouter.put("/password", jwtValidation, updatePassword);
authRouter.put("/block-user/:id", jwtValidation, isAdmin, blockedUser);
authRouter.put("/unblock-user/:id", jwtValidation, isAdmin, unblockedUser);
authRouter.put(
  "/order/update-order/:id",
  jwtValidation,
  isAdmin,
  updateOrderStatus
);

export default authRouter;

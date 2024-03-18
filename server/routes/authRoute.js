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
} from "../controllers/authController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";

const authRouter = express.Router();

authRouter.post("/register", registerController);
authRouter.put("/password", jwtValidation, updatePassword);
authRouter.post("/login", loginController);
authRouter.get("/all-users", getAllUser);
authRouter.get("/refresh", handleRefreshToken);
authRouter.get("/logout", logoutController);
authRouter.get("/user/:id", jwtValidation, isAdmin, getUser);
authRouter.delete("/delete/:id", deleteUser);

authRouter.patch("/update", jwtValidation, updateUser);
authRouter.put("/block-user/:id", jwtValidation, isAdmin, blockedUser);
authRouter.put("/unblock-user/:id", jwtValidation, isAdmin, unblockedUser);

export default authRouter;

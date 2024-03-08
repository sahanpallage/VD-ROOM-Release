import express from "express";
import {
  blockedUser,
  deleteUser,
  getAllUser,
  getUser,
  handleRefreshToken,
  loginController,
  registerController,
  unblockedUser,
  updateUser,
} from "../controllers/authController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";

const authRouter = express.Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.get("/all-users", getAllUser);
authRouter.get("/refresh", handleRefreshToken);
authRouter.get("/user/:id", jwtValidation, isAdmin, getUser);
authRouter.patch("/update", jwtValidation, updateUser);
authRouter.put("/block-user/:id", jwtValidation, isAdmin, blockedUser);
authRouter.put("/unblock-user/:id", jwtValidation, isAdmin, unblockedUser);
authRouter.delete("/delete/:id", deleteUser);

export default authRouter;

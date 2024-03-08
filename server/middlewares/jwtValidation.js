import userModel from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import JWT from "jsonwebtoken";

export const jwtValidation = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
      const user = await userModel.findById(decoded?.id);
      req.user = user;
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed!");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token found!");
  }
});

export const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await userModel.findOne({ email });
  if (adminUser.role !== "admin") {
    throw new Error("You are not an admin!");
  } else {
    next();
  }
});

import generateToken from "../config/jwtToken.js";
import userModel from "../models/user.model.js";
import asyncHandler from "express-async-handler";

export const registerController = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const findUser = await userModel.findOne({ email });
  if (!findUser) {
    const newUser = new userModel(req.body);
    try {
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  } else {
    throw new Error("User already exists!");
  }
});

export const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await userModel.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.status(200).json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser._id),
      message: "User logged in successfully!",
    });
  } else {
    throw new Error("Invalid credentials!");
  }
});

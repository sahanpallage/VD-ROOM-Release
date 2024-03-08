import generateToken from "../config/jwtToken.js";
import userModel from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";
import generateRefreshToken from "../config/refreshToken.js";
import JWT from "jsonwebtoken";

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
    const refreshToken = generateRefreshToken(findUser?._id);
    const updateRefreshToken = await userModel.findByIdAndUpdate(
      findUser.id,
      { refreshToken },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
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

export const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) {
    throw new Error("No refresh token found!");
  }
  const refreshToken = cookie.refreshToken;
  const user = await userModel.findOne({ refreshToken });
  if (!user) throw new Error("Refresh token not found!");
  JWT.verify(refreshToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("Invalid refresh token!");
    } else {
      const accessToken = generateToken(user.id);
      res.status(200).json({ accessToken });
    }
  });
});

// Update a user
export const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const updateUser = await userModel.findByIdAndUpdate(
      _id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
        password: req?.body?.password,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all users
export const getAllUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await userModel.find();
    res.status(200).json(getUsers);
  } catch (error) {
    throw new Error("Error occured while fetching users!");
  }
});

// Get a single user
export const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getUser = await userModel.findById(id);

    res.status(200).json(getUser);
  } catch (error) {
    throw new Error("Error occured while fetching user!");
  }
});

// Delete a user
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteUser = await userModel.findByIdAndDelete(id);
    validateMongoDbId(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    throw new Error("Error occured while fetching user!");
  }
});

export const blockedUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const blockedUser = await userModel.findByIdAndUpdate(
      id,

      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ blockedUser, message: "User blocked successfully!" });
  } catch (error) {
    throw new Error("Error occured while blocking user!");
  }
});

export const unblockedUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const unblockedUser = await userModel.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ unblockedUser, message: "User unblocked successfully!" });
  } catch (error) {
    throw new Error("Error occured while unblocking user!");
  }
});

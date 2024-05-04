import crypto from "crypto";
import JWT from "jsonwebtoken";
import userModel from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import { sendEmail } from "./emailController.js";
import generateToken from "../config/jwtToken.js";
import generateRefreshToken from "../config/refreshToken.js";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";
import CartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";
import couponModel from "../models/coupon.model.js";
import OrderModel from "../models/order.model.js";
import uniqid from "uniqid";

// User registration
export const registerController = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const findUser = await userModel.findOne({ email });
  if (!findUser) {
    const newUser = new userModel(req.body);
    try {
      await newUser.save();
      res.json(newUser);
    } catch (error) {
      res.json({ message: error.message });
    }
  } else {
    throw new Error("User already exists!");
  }
});

// User login
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
    res.json({
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

// Admin login

export const adminLoginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findAdmin = await userModel.findOne({ email });
  if (findAdmin.role !== "admin") throw new Error("You are not authorized!");
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    const refreshToken = generateRefreshToken(findAdmin?._id);
    const updateRefreshToken = await userModel.findByIdAndUpdate(
      findAdmin.id,
      { refreshToken },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findAdmin?._id,
      firstname: findAdmin?.firstname,
      lastname: findAdmin?.lastname,
      email: findAdmin?.email,
      mobile: findAdmin?.mobile,
      token: generateToken(findAdmin._id),
      message: "Admin logged in successfully!",
    });
  } else {
    throw new Error("Invalid credentials!");
  }
});

// Handle refresh token
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
      res.json({ accessToken });
    }
  });
});

// User logout
export const logoutController = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) {
    throw new Error("No refresh token found in cookies!");
  }
  const refreshToken = cookie.refreshToken;
  const user = await userModel.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    res.sendStatus(204); //Forbidden
  }
  await userModel.findOneAndUpdate(
    { refreshToken: refreshToken },
    { refreshToken: "" }
  );
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204); //Forbidden
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
    res.json(updateUser);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Save user address
export const saveAddress = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const updateUser = await userModel.findByIdAndUpdate(
      _id,
      {
        address: req?.body?.address,
      },
      { new: true }
    );
    res.json(updateUser);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all users
export const getAllUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await userModel.find();
    res.json(getUsers);
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

    res.json(getUser);
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
    res.json(deleteUser);
  } catch (error) {
    throw new Error("Error occured while fetching user!");
  }
});

// Admin can block a user
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
    res.json({ blockedUser, message: "User blocked successfully!" });
  } catch (error) {
    throw new Error("Error occured while blocking user!");
  }
});

// Admin can unblock a user
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
    res.json({ unblockedUser, message: "User unblocked successfully!" });
  } catch (error) {
    throw new Error("Error occured while unblocking user!");
  }
});

// Update password of a user
export const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongoDbId(_id);
  const user = await userModel.findById(_id);
  if (password) {
    user.password = password;
    await user.createPasswordResetToken();
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});

// Generate token for forgot password
export const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    throw new Error("User not found!");
  }
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hi, Please follow this link to reset your password. This link is valid till 10 minutes from now: <a href='http://localhost:8080/vd-room/auth/reset-password/${token}'>Click Here</a>`;
    const data = {
      to: email,
      subject: "Password Reset Link",
      text: "Hey User, Please follow this link to reset your password. This link is valid till 10 minutes from now.",
      htm: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
});

// Reset password of a user
export const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await userModel.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) {
    throw new Error("Token is expired. Please try again later!");
  }
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user);
});

// Get wishlist of a user
export const getWishList = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const findUser = await userModel.findById(_id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});

// Add product to cart
export const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    let products = [];
    const user = await userModel.findById(_id);
    // Check if user already have products in cart
    const alreadyExistCart = await CartModel.findOne({ orderBy: user._id });
    if (alreadyExistCart) {
      await alreadyExistCart.deleteOne();
    }
    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
      object.count = cart[i].count;
      object.color = cart[i].color;
      let getPrice = await productModel
        .findById(cart[i]._id)
        .select("price")
        .exec();
      object.price = getPrice.price;
      products.push(object);
    }
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
    }
    let newCart = await new CartModel({
      products,
      cartTotal,
      orderBy: user?._id,
    }).save();
    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});

// Get user cart details
export const getUserCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const cart = await CartModel.findOne({ orderBy: _id }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

// Empty cart of a user
export const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const user = await userModel.findOne({ _id });
    const cart = await CartModel.findOneAndDelete({ orderBy: user._id });
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

// Apply coupon to cart total
export const applyCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  const validCoupon = await couponModel.findOne({ name: coupon });
  if (!validCoupon) {
    throw new Error("Invalid coupon code!");
  }
  const user = await userModel.findOne({ _id });
  if (!user) {
    throw new Error("User not found!");
  }
  let cart = await CartModel.findOne({ orderBy: user._id }).populate(
    "products.product"
  );
  if (!cart || !cart.cartTotal) {
    throw new Error("Cart or Cart total not found!");
  }
  let totalAfterDiscount = (cart.cartTotal - validCoupon.discount).toFixed(2);
  await CartModel.findOneAndUpdate(
    { orderBy: user._id },
    { totalAfterDiscount, cartTotal: cart.cartTotal },
    { new: true }
  );
  res.json(totalAfterDiscount);
});

// Create orders
export const createOrder = asyncHandler(async (req, res) => {
  const { COD, couponApplied } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    if (!COD) {
      throw new Error("Create order failed!");
    }
    const user = await userModel.findById(_id);
    let userCart = await CartModel.findOne({ orderBy: user._id });
    let finalAmount = 0;
    if (couponApplied && userCart.totalAfterDiscount) {
      finalAmount = userCart.totalAfterDiscount;
    } else {
      finalAmount = userCart.cartTotal;
    }
    let newOrder = await new OrderModel({
      products: userCart.products,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: finalAmount,
        status: "Cash On Delivery",
        created: Date.now(),
        currency: "LKR",
      },
      orderBy: user._id,
      orderStatus: "Cash On Delivery",
    }).save();
    let update = userCart.products.map((item) => {
      return {
        updateOne: {
          filter: { _id: item.product._id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });
    const updated = await productModel.bulkWrite(update, {});
    res.json({ message: "Order created successfully!" });
  } catch (error) {
    throw new Error(error);
  }
});

export const getOrders = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const userOrders = await OrderModel.findOne({ orderBy: _id })
      .populate("products.product")
      .populate("orderBy")
      .exec();
    res.json(userOrders);
  } catch (error) {
    throw new Error(error);
  }
});

export const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const userOrders = await OrderModel.findOne({ orderBy: id })
      .populate("products.product")
      .populate("orderBy")
      .exec();
    res.json(userOrders);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const allUserOrders = await OrderModel.find()
      .populate("products.product")
      .populate("orderBy")
      .exec();
    res.json(allUserOrders);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateOrderStatus = await OrderModel.findByIdAndUpdate(
      id,
      {
        orderStatus: status,
        paymentIntent: {
          status: status,
        },
      },
      { new: true }
    );
    res.json(updateOrderStatus);
  } catch (error) {
    throw new Error(error);
  }
});

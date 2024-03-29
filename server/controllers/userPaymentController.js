import asyncHandler from "express-async-handler";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";
import Payment from "../models/userPayment.model.js";

export const addPayment = asyncHandler(async (req, res) => {
  try {
    const addPayment = await Payment.create(req.body);
    res.json(addPayment);
  } catch (error) {
    throw new Error(error);
  }
});

export const updatePayment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatePayment = await Payment.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatePayment);
  } catch (error) {
    throw new Error(error);
  }
});

export const deletePayment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletePayment = await Payment.findByIdAndDelete(id);
    res.json(deletePayment);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAPayment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getAPayment = await Payment.findById(id);
    res.json(getAPayment);
  } catch (error) {
    throw new Error(error);
  }
});

// export const getAllBrand = asyncHandler(async (req, res) => {
//   try {
//     const getAllCategories = await Payment.find();
//     res.json(getAllCategories);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

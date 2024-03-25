import brandModel from "../models/brand.model.js";
import asyncHandler from "express-async-handler";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";

export const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await brandModel.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateBrand = await brandModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBrand);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBrand = await brandModel.findByIdAndDelete(id);
    res.json(deletedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

export const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getABrand = await brandModel.findById(id);
    res.json(getABrand);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllBrand = asyncHandler(async (req, res) => {
  try {
    const getAllCategories = await brandModel.find();
    res.json(getAllCategories);
  } catch (error) {
    throw new Error(error);
  }
});

import categoryModel from "../models/prodCategory.model.js";
import asyncHandler from "express-async-handler";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";

export const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await categoryModel.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateCategory = await categoryModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateCategory);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCategory = await categoryModel.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

export const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getACategory = await categoryModel.findById(id);
    res.json(getACategory);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllCategory = asyncHandler(async (req, res) => {
  try {
    const getAllCategories = await categoryModel.find();
    res.json(getAllCategories);
  } catch (error) {
    throw new Error(error);
  }
});

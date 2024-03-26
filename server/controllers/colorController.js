import colorModel from "../models/color.model.js";
import asyncHandler from "express-async-handler";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";

export const createColor = asyncHandler(async (req, res) => {
  try {
    const newColor = await colorModel.create(req.body);
    res.json(newColor);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateColor = await colorModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateColor);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedColor = await colorModel.findByIdAndDelete(id);
    res.json(deletedColor);
  } catch (error) {
    throw new Error(error);
  }
});

export const getColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getAColor = await colorModel.findById(id);
    res.json(getAColor);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllColor = asyncHandler(async (req, res) => {
  try {
    const getAllCategories = await colorModel.find();
    res.json(getAllCategories);
  } catch (error) {
    throw new Error(error);
  }
});

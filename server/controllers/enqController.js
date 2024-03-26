import EnquiryModel from "../models/enq.model.js";
import asyncHandler from "express-async-handler";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";

export const createEnquiry = asyncHandler(async (req, res) => {
  try {
    const newEnquiry = await EnquiryModel.create(req.body);
    res.json(newEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateEnquiry = await EnquiryModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedEnquiry = await EnquiryModel.findByIdAndDelete(id);
    res.json(deletedEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

export const getEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getAEnquiry = await EnquiryModel.findById(id);
    res.json(getAEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllEnquiry = asyncHandler(async (req, res) => {
  try {
    const getAllCategories = await EnquiryModel.find();
    res.json(getAllCategories);
  } catch (error) {
    throw new Error(error);
  }
});

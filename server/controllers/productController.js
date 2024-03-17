import slugify from "slugify";
import asyncHandler from "express-async-handler";
import productModel from "../models/product.model.js";

// create a product
export const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await productModel.create(req.body);
    res
      .status(201)
      .json({ product: newProduct, message: "Product created successfully" });
  } catch (error) {
    throw new Error(error);
  }
});

// update a product
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updatedProduct = await productModel.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      product: updatedProduct,
      message: "Product updated successfully",
    });
  } catch (error) {
    throw new Error(error);
  }
});

// delete a product
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await productModel.findOneAndDelete({ _id: id });
    res.json(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// get a product
export const getAProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await productModel.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// get all products
export const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    let query = productModel.find(JSON.parse(queryStr));
    console.log(queryObj);

    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // Field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const numProducts = await productModel.countDocuments();
      if (skip >= numProducts) throw new Error("This page does not exist");
    }

    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

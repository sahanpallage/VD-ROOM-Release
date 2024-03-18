import blogModel from "../models/blog.model.js";
import userModel from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";

export const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await blogModel.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateBlog = await blogModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBlog);
  } catch (error) {
    throw new Error(error);
  }
});

export const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getBlog = await blogModel.findById(id);
    const updateViews = await blogModel.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      {
        new: true,
      }
    );
    res.json(updateViews);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const getAllBlogs = await blogModel.find();
    res.json(getAllBlogs);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteBlog = await blogModel.findByIdAndDelete(id);
    res.json(deleteBlog);
  } catch (error) {
    throw new Error(error);
  }
});

export const likeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  validateMongoDbId(blogId);

  // Find the blog which you want to be liked
  const blog = await blogModel.findById(blogId);

  // Find the user who wants to like the blog
  const loginUserId = req?.user?.id;

  // Check if the user has already liked the blog
  const isLiked = blog?.isLiked;

  // Check if the user has already disliked the blog
  const isDisliked = blog?.isDisliked.find(
    (userId = userId?.toString() === loginUserId?.toString())
  );
  if (isDisliked) {
    const blog = await blogModel.findByIdAndUpdate(blogId, {
      $pull: { isDisliked: loginUserId },
    });
  }
});

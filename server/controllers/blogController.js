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
    const getBlog = await blogModel
      .findById(id)
      .populate("likes")
      .populate("dislikes");
    const updateViews = await blogModel.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      {
        new: true,
      }
    );
    res.json(getBlog);
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
  const { blogId } = req.body;
  validateMongoDbId(blogId);

  // Find the blog which you want to be liked
  const blog = await blogModel.findById(blogId);

  // Find the user who wants to like the blog
  const loginUserId = req?.user?._id;

  // Check if the user has already liked the blog
  const isLiked = blog?.isLiked;

  // Check if the user has already disliked the blog
  const alreadyDisliked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );

  if (alreadyDisliked) {
    const blog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
  if (isLiked) {
    const blog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  } else {
    const blog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
});

export const disLikeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongoDbId(blogId);

  // Find the blog which you want to be disliked
  const blog = await blogModel.findById(blogId);

  // Find the user who wants to dislike the blog
  const loginUserId = req?.user?._id;

  // Check if the user has already disliked the blog
  const alreadyDisliked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );

  // Check if the user has already liked the blog
  const isLiked = blog?.likes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );

  if (isLiked) {
    const blog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
  if (alreadyDisliked) {
    const blog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  } else {
    const blog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
});

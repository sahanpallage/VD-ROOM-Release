import slugify from "slugify";
import asyncHandler from "express-async-handler";
import postModel from "../models/post.js";

// router.route('/add').post((req, res) => {
//     const { imageUrl, likes, title, userId } = req.body;
//     const newPost = new postMdl({
//         imageUrl: imageUrl,
//         title: title,
//         likes: likes,
//         userId: userId
//     });

//     newPost.save().then(res.sendStatus(200));
// })


export const createPost = asyncHandler(async (req, res) => {
    try {
        // if (req.body.title) {
        //   req.body.slug = slugify(req.body.title);
        // }
        const newPost = await postModel.create(req.body);
        res
          .status(201)
          .json({ product: newPost, message: "Post created successfully" });
      } catch (error) {
        throw new Error(error);
      }
    });
    

export const likePost = asyncHandler(async (req, res) => {

    try {
        const post = await postModel.findById(req.params.id);
        if (post) {
          post.likes = post.likes + 1;
          const updatedPost = await post.save();
          res.status(200).json({ product: updatedPost, message: "Post liked" });
        } else {
          res.status(404);
          throw new Error("Post not found");
        }
      } catch (error) {
        throw new Error(error);
      }
});

export const deletePost = asyncHandler(async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        if (post) {
          await post.deleteOne();
          res.status(200).json({ message: "Post deleted" });
        } else {
          res.status(404);
          throw new Error("Post not found");
        }
      } catch (error) {
        throw new Error(error);
      }
});

export const getAllPost = asyncHandler(async (req, res) => {
    try {
        const posts = await postModel.find({});
        res.status(200).json({ allPosts: posts });
      } catch (error) {
        throw new Error(error);
      }
});

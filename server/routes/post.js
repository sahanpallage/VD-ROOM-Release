import express from "express";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";
import {
  createPost,
  likePost,
  deletePost,
  getAllPost,
//   getAProduct,
//   getAllProducts,
//   updateProduct,
} from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.post("/create",  createPost);
postRouter.put("/like/:id",  likePost);
postRouter.delete("/delete/:id", deletePost);
postRouter.get("/", getAllPost);
// postRouter.put("/update/:id", jwtValidation, isAdmin, updateProduct);
// postRouter.delete("/delete/:id", jwtValidation, isAdmin, deleteProduct);
// postRouter.get("/", getAllProducts);

export default postRouter;

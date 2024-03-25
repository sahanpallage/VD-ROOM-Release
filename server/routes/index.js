import express from "express";
import authRouter from "./authRoute.js";
import productRouter from "./productRoute.js";
import blogRouter from "./blogRoute.js";
import prodCategoryRouter from "./prodCategoryRoute.js";
import blogCategoryRouter from "./blogCategoryRoute.js";
import brandRouter from "./brandRoute.js";

const router = express.Router();

const path = "/vd-room/";

// router.use(`${path}`, (req, res) => res.send("Welcome to the Home page!"));
router.use(`${path}auth`, authRouter);
router.use(`${path}product`, productRouter); // /vd-room/product/
router.use(`${path}blog`, blogRouter); // /vd-room/blog/
router.use(`${path}category`, prodCategoryRouter); // /vd-room/category/
router.use(`${path}blog-category`, blogCategoryRouter); // /vd-room/blog-category/
router.use(`${path}brand`, brandRouter); // /vd-room/brand/

export default router;

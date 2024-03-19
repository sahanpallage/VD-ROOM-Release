import express from "express";
import authRouter from "./authRoute.js";
import productRouter from "./productRoute.js";
import blogRouter from "./blogRoute.js";

const router = express.Router();

const path = "/vd-room/";

// router.use(`${path}`, (req, res) => res.send("Welcome to the Home page!"));
router.use(`${path}auth`, authRouter);
router.use(`${path}product`, productRouter); // /vd-room/product/
router.use(`${path}blog`, blogRouter); // /vd-room/blog/

export default router;

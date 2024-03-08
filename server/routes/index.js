import express from "express";
import authRouter from "./authRoute.js";

const router = express.Router();

const path = "/vd-room/";

// router.use(`${path}`, (req, res) => res.send("Welcome to the Home page!"));
router.use(`${path}auth`, authRouter);

export default router;

import express from "express";
import {
  createEnquiry,
  deleteEnquiry,
  getAllEnquiry,
  getEnquiry,
  updateEnquiry,
} from "../controllers/enqController.js";
import { isAdmin, jwtValidation } from "../middlewares/jwtValidation.js";

const enquiryRouter = express.Router();

enquiryRouter.post("/", createEnquiry);
enquiryRouter.put("/:id", jwtValidation, isAdmin, updateEnquiry);
enquiryRouter.delete("/:id", jwtValidation, isAdmin, deleteEnquiry);
enquiryRouter.get("/:id", getEnquiry);
enquiryRouter.get("/", getAllEnquiry);

export default enquiryRouter;

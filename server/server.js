import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnection.js";
import router from "./routes/index.js";
import {
  errorHandler,
  errorMiddleware,
  notFound,
} from "./middlewares/errorMiddleware.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8800;

// MongoDB connection
dbConnection();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(router);

// Error handling middleware
// app.use(errorMiddleware);
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

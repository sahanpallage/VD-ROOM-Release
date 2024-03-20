import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import dbConnection from "./config/dbConnection.js";
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
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use(router);

// post route
import post from "./routes/post.js";
app.use("/post", post);

// Error handling middleware
// app.use(errorMiddleware);
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);


  
 
  });


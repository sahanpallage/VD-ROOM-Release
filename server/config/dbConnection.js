import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const dbConnection = async () => {
  const dbUri = process.env.MONGODB_URL;
  if (!dbUri) {
    console.error("MongoDB URL is not provided");
    process.exit(1);
  }

  try {
    await mongoose.connect(dbUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default dbConnection;

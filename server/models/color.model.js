import mongoose from "mongoose";

const colorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

const colorModel = mongoose.model("color", colorSchema);
export default colorModel;

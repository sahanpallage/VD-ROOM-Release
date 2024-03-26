import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    uppercase: true,
    required: [true, "Name is required"],
  },
  expiry: {
    type: Date,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});

const couponModel = mongoose.model("Coupon", couponSchema);
export default couponModel;

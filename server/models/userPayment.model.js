import mongoose from "mongoose";

// Define the schema
const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["credit_card", "debit_card", "paypal", "other"],
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  cvv: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;

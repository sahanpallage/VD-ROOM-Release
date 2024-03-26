import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Resolved", "In Progress"],
  },
});

const EnquiryModel = mongoose.model("Enquiry", enquirySchema);
export default EnquiryModel;

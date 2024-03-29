import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";
import customerReducer from "../features/customers/customerSlice.js";
import productReducer from "../features/product/productSlice.js";
import brandReducer from "../features/brand/brandSlice.js";
import prodCategoryReducer from "../features/prodCategory/prodCategorySlice.js";
import colorReducer from "../features/color/colorSlice.js";
import blogReducer from "../features/blog/blogSlice.js";
import blogCategoryReducer from "../features/blogCategory/blogCategorySlice.js";
import enquiryReducer from "../features/enquiry/enquirySlice.js";
import orderReducer from "../features/order/orderSlice.js";
import uploadReducer from "../features/upload/uploadSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    prodCategory: prodCategoryReducer,
    color: colorReducer,
    blog: blogReducer,
    blogCategory: blogCategoryReducer,
    enquiry: enquiryReducer,
    order: orderReducer,
    upload: uploadReducer,
  },
});

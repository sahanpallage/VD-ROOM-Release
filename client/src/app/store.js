import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";
import customerSlice from "../features/customers/customerSlice.js";
import productSlice from "../features/product/productSlice.js";
import brandSlice from "../features/brand/brandSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerSlice,
    product: productSlice,
    brand: brandSlice,
  },
});

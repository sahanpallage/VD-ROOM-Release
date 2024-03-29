import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import prodCategoryService from "./prodCategoryService";

export const getProdCategories = createAsyncThunk(
  "product/product-categories",
  async (thunkAPI) => {
    try {
      return await prodCategoryService.getProdCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  prodCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const prodCategorySlice = createSlice({
  name: "prodCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProdCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProdCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.prodCategories = action.payload;
      })
      .addCase(getProdCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default prodCategorySlice.reducer;

import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
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

export const getAProdCategory = createAsyncThunk(
  "product/get-category",
  async (id, thunkAPI) => {
    try {
      return await prodCategoryService.getAProdCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createProdCategory = createAsyncThunk(
  "product/create-category",
  async (categoryData, thunkAPI) => {
    try {
      return await prodCategoryService.createProdCategory(categoryData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProdCategory = createAsyncThunk(
  "product/update-category",
  async (category, thunkAPI) => {
    try {
      return await prodCategoryService.updateProdCategory(category);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteAProdCategory = createAsyncThunk(
  "product/delete-category",
  async (id, thunkAPI) => {
    try {
      return await prodCategoryService.deleteProdCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

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
      })
      .addCase(createProdCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProdCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdProdCategory = action.payload;
      })
      .addCase(createProdCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAProdCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAProdCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.prodCatName = action.payload.title;
      })
      .addCase(getAProdCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateProdCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProdCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedProdCategory = action.payload;
      })
      .addCase(updateProdCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAProdCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAProdCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deleteProdCategory = action.payload;
      })
      .addCase(deleteAProdCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default prodCategorySlice.reducer;

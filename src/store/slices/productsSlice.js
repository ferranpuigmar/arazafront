import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getProductsService from "../../services/getProductsService";

const initialState = {
  productList: [],
  loading: false,
  error: undefined,
};

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async (dispatch, getState) => {
    return await getProductsService();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, actions) => {
      state.list = actions.payload;
      state.loading = false;
    },
  },
  extraReducers: {
    [fetchAllProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.productList.push(...action.payload);
      state.loading = false;
    },
    [fetchAllProducts.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;

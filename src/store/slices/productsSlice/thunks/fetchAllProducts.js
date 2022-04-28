import { createAsyncThunk } from "@reduxjs/toolkit";
import getProductsService from "../../../../services/getProductsService";

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    return await getProductsService();
  }
);

export const fetchAllProductsCases = {
  [fetchAllProducts.pending]: (state, action) => {
    state.loading = true;
  },
  [fetchAllProducts.fulfilled]: (state, action) => {
    state.productList = [];
    state.productList.push(...action.payload);
    state.loading = false;
  },
  [fetchAllProducts.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

import { createAsyncThunk } from "@reduxjs/toolkit";
import getProductByIdService from "../../../../services/getProductsService";

export const fetchProductsById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    return await getProductByIdService(id);
  }
);

export const fetchProductByIdCases = {
  [fetchProductsById.pending]: (state, action) => {
    state.loading = true;
  },
  [fetchProductsById.fulfilled]: (state, action) => {
    state.productList.push(...action.payload);
    state.loading = false;
  },
  [fetchProductsById.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

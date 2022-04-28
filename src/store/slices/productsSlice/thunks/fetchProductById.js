import { createAsyncThunk } from "@reduxjs/toolkit";
import getProductByIdService from "../../../../services/getProductsService";

export const fetchProductsById = createAsyncThunk(
  "product/fetchProductById",
  async (id, { getState }) => {
    const productState = getState().products;
    if (isQueryDateExpired(productState)) {
      return await getProductByIdService(id);
    }
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

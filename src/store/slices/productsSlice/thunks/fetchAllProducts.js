import { createAsyncThunk } from "@reduxjs/toolkit";
import getProductsService from "../../../../services/getProductsService";
import {
  defineExpirationTime,
  isQueryDateExpired,
} from "../../../../utils/checkExpiration";

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async (_, { getState, fulfillWithValue }) => {
    const productState = getState().products;
    if (!isQueryDateExpired(productState)) {
      return fulfillWithValue(productState.productList);
    }

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
    state.queryExpiration = defineExpirationTime();
  },
  [fetchAllProducts.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

import { createAsyncThunk } from "@reduxjs/toolkit";
import getProductsService from "../../../../services/getProductsService";
import {
  defineExpirationTime,
  isQueryDateExpired,
} from "../../../../utils/checkExpiration";

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async (_, { getState, fulfillWithValue }) => {
    const productState = getState().products.productList;
    console.log("isQueryDateExpired: ", isQueryDateExpired(productState));
    if (!isQueryDateExpired(productState)) {
      return fulfillWithValue(productState.list);
    }

    return await getProductsService();
  }
);

export const fetchAllProductsCases = {
  [fetchAllProducts.pending]: (state, action) => {
    state.loading = true;
  },
  [fetchAllProducts.fulfilled]: (state, action) => {
    state.productList.list = [];
    state.product = {
      data: null,
      queryExpiration: undefined,
    };
    state.productList.list.push(...action.payload);
    state.loading = false;
    state.productList.queryExpiration = defineExpirationTime();
  },
  [fetchAllProducts.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

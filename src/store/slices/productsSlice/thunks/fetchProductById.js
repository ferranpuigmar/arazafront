import { createAsyncThunk } from "@reduxjs/toolkit";
import getProductByIdService from "../../../../services/getProductByIdService";
import {
  defineExpirationTime,
  isQueryDateExpired,
} from "../../../../utils/checkExpiration";

export const fetchProductsById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    return await getProductByIdService(id);
  }
);

export const fetchProductByIdCases = {
  [fetchProductsById.pending]: (state) => {
    state.loading = true;
  },
  [fetchProductsById.fulfilled]: (state, action) => {
    state.product.data = action.payload;
    state.loading = false;
    state.product.queryExpiration = defineExpirationTime();
  },
  [fetchProductsById.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

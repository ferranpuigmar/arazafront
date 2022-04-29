import { createAsyncThunk } from "@reduxjs/toolkit";
import getProductByIdService from "../../../../services/getProductByIdService";
import {
  defineExpirationTime,
  isQueryDateExpired,
} from "../../../../utils/checkExpiration";

export const fetchProductsById = createAsyncThunk(
  "product/fetchProductById",
  async (id, { getState }) => {
    const productState = getState().products;
    if (!isQueryDateExpired(productState)) {
      const matchedProduct = productState.productList.find(
        (product) => product.id === id
      );
      return fulfillWithValue(matchedProduct);
    }

    return await getProductByIdService(id);
  }
);

export const fetchProductByIdCases = {
  [fetchProductsById.pending]: (state) => {
    state.loading = true;
  },
  [fetchProductsById.fulfilled]: (state, action) => {
    state.productList.push(action.payload);
    state.loading = false;
    state.queryExpiration = defineExpirationTime();
  },
  [fetchProductsById.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

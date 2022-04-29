import { createAsyncThunk } from "@reduxjs/toolkit";
import getProductByIdService from "../../../../services/getProductByIdService";

export const fetchProductsById = createAsyncThunk(
  "product/fetchProductById",
  async (id, { getState }) => {
    //const productState = getState().products;
    // if (!isQueryDateExpired(productState)) {
    //   const matchedProduct = productState.productList.find(
    //     (product) => product.id === id
    //   );
    //   console.log("matchedProduct: ", matchedProduct);
    //   return fulfillWithValue(matchedProduct);
    // }

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

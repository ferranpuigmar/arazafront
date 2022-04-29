import { createAsyncThunk } from "@reduxjs/toolkit";
import getCartService from "../../../../services/getCart";
import getProductByIdService from "../../../../services/getProductsService";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  return await getCartService();
});

export const fetchCartCases = {
  [fetchCart.pending]: (state, action) => {
    state.loading = true;
  },
  [fetchCart.fulfilled]: (state, action) => {
    state.count = action.payload.count;
    state.loading = false;
  },
  [fetchCart.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

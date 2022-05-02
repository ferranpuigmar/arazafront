import { createAsyncThunk } from "@reduxjs/toolkit";
import addToCartService from "../../../../services/addToCartService";

export const fetchAddToCart = createAsyncThunk(
  "cart/AddToCart",
  async (cart) => {
    return await addToCartService(cart);
  }
);

export const fetchAddToCartCases = {
  [fetchAddToCart.pending]: (state) => {
    state.loading = true;
  },
  [fetchAddToCart.fulfilled]: (state, action) => {
    state.count = action.payload.count;
    state.loading = false;
  },
  [fetchAddToCart.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

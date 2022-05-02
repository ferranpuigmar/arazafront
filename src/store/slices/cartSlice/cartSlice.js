import { createSlice } from "@reduxjs/toolkit";
import { fetchAddToCartCases } from "./thunks/fetchAddToCart";

const initialState = {
  count: 0,
  loading: false,
  erro: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    ...fetchAddToCartCases,
  },
});

const { actions } = cartSlice;
export const { updateCart } = actions;
export default cartSlice.reducer;

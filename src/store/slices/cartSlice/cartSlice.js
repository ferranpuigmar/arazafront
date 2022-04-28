import { createSlice } from "@reduxjs/toolkit";
import { fetchAddToCartCases } from "./thunks/fetchAddToCart";
import { fetchCartCases } from "./thunks/fetchCart";

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
    ...fetchCartCases,
  },
});

const { actions } = cartSlice;
export const { updateCart } = actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: true,
  error: undefined,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, actions) => {
      state.list = actions.payload;
      state.loading = false;
    },
  },
});

export default productsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import getCharactersService from "../../services/getCharactersService";

const initialState = {
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, actions) => {
      state.count = actions.payload;
    },
  },
});

const { actions } = cartSlice;
export const { updateCart } = actions;
export default cartSlice.reducer;

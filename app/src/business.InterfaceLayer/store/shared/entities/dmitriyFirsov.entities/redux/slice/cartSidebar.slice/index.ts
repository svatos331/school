import { createSlice } from "@reduxjs/toolkit";

export const cartSidebar = createSlice({
  name: "popup",
  initialState: {
    open: false
  },
  reducers: {
    openCart(state) {
      state.open = true;
    },

    closeCart(state) {
      state.open = false;
    }
  }
});

export const { openCart, closeCart } = cartSidebar.actions;
export default cartSidebar.reducer;
import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toogleSlidebar: (state) => {
      //   if (state.isMenuOpen) {
      //     state.isMenuOpen = false;
      //   } else {
      //     state.isMenuOpen = true;
      //   }
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toogleSlidebar, closeMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;

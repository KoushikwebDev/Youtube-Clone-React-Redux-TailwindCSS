import { createSlice } from "@reduxjs/toolkit";

const searchValueSlice = createSlice({
  name: "searchValue",
  initialState: "",
  reducers: {
    setSearchValue: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;
export default searchValueSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      //   console.log(action.payload);
      return (state = { ...state, ...action.payload });

      //   or
      // state = Object.assign(state,action.payload)
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

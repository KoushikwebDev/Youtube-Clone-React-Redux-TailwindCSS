import { createSlice } from "@reduxjs/toolkit";

const searchVideos = createSlice({
  name: "searchVideo",
  initialState: [],
  reducers: {
    addVideosCopy: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addVideosCopy } = searchVideos.actions;
export default searchVideos.reducer;

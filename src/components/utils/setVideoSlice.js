import { createSlice } from "@reduxjs/toolkit";

const setVideoSlice = createSlice({
  name: "videoSlice",
  initialState: [],
  reducers: {
    addVideo: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addVideo } = setVideoSlice.actions;
export default setVideoSlice.reducer;

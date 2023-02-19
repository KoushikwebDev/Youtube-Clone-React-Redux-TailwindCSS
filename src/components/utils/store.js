import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import searchValueSlice from "./searchValueSlice";
import searchVideo from "./searchVideo";
import setVideoSlice from "./setVideoSlice";

import Sidebar from "./slice";

const store = configureStore({
  reducer: {
    sidebar: Sidebar,
    search: searchSlice,
    searchVideoCopy: searchVideo,
    videos: setVideoSlice,
    searchValue: searchValueSlice,
    chat: chatSlice,
  },
});

export default store;

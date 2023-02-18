import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";

import Sidebar from "./slice";

const store = configureStore({
  reducer: {
    sidebar: Sidebar,
    search: searchSlice,
  },
});

export default store;

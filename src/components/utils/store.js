import { configureStore } from "@reduxjs/toolkit";

import Sidebar from "./slice";

const store = configureStore({
  reducer: {
    sidebar: Sidebar,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [{ name: "KOushik", text: "Hello Brother Primary" }],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > 20) {
        state.messages.splice(20, 1);
      }
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;

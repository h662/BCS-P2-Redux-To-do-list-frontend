import { createSlice } from "@reduxjs/toolkit";
import { createTodo } from "./appThunk";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(createTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTodo.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createTodo.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default appSlice;

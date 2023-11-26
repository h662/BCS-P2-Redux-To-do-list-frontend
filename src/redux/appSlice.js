import { createSlice } from "@reduxjs/toolkit";
import { createTodo, getTodos } from "./appThunk";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    todos: [],
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
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default appSlice;

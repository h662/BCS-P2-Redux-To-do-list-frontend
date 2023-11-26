import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACK_URL = "http://localhost:3010";

export const createTodo = createAsyncThunk(
  "appSlice/createTodo",
  async (title) => {
    const response = await axios.post(
      `${BACK_URL}/todos`,
      { title },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  }
);

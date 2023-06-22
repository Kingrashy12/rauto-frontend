import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [],
  FetchError: null,
  FetchStatus: null,
};

export const FetchUsers = createAsyncThunk(
  "users/fetch-all",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:4000/users`);
      return response?.data;
    } catch (error) {
      console.log({ error: error.response.data });
      return rejectWithValue({ error: error.response.data });
    }
  }
);

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [FetchUsers.pending]: (state, action) => {
      state.FetchStatus = "pending";
    },
    [FetchUsers.fulfilled]: (state, action) => {
      state.FetchStatus = "success";
      state.list = action.payload;
      localStorage.setItem("users", JSON.stringify(state.list));
    },
    [FetchUsers.rejected]: (state, action) => {
      state.FetchStatus = "rejected";
      state.FetchError = action.payload;
    },
  },
});

export default UsersSlice.reducer;

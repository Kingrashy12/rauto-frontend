import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./api";
import { toast } from "react-toastify";

const initialState = {
  listings: [],
  status: null,
  error: null,
  createStatus: null,
};

export const ListingsFetch = createAsyncThunk(
  "car-listing/ListingsFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/listing`);
      return response?.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

export const CreateListing = createAsyncThunk(
  "car-listing/create-listing",
  async (values) => {
    try {
      const response = await axios.post(`${BASE_URL}/listing/new`, values);
      return response.data;
    } catch (error) {
      console.log({ error: error.message });
      toast.error({ error: error.message }, { position: "top-center" });
    }
  }
);

const ListingSlice = createSlice({
  name: "car-listing",
  initialState,
  reducers: {},
  extraReducers: {
    [ListingsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [ListingsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.listings = action.payload;
    },
    [ListingsFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default ListingSlice.reducer;

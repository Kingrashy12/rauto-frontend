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
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/listing/new`, values);
      toast.success("You've Placed your car on sell", {
        position: "top-center",
      });
      return response.data;
    } catch (error) {
      console.log({ error: error.response.data });
      toast.error(`Sell order Failed: ${error.response.data}`, {
        position: "top-center",
      });
      return rejectWithValue({ error: error.response.data });
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
    [CreateListing.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [CreateListing.fulfilled]: (state, action) => {
      state.listings.push(action.payload);
      state.createStatus = "success";
    },
    [CreateListing.rejected]: (state, action) => {
      state.createStatus = "rejected";
      state.error = action.payload;
    },
  },
});

export default ListingSlice.reducer;

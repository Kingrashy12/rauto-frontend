import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./api";
import { toast } from "react-toastify";

const initialState = {
  listings: [],
  make: [],
  status: null,
  error: null,
  createStatus: null,
  createError: null,
  makeStatus: null,
  makeError: null,
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
      window.location = "/";
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

export const getBrandMake = createAsyncThunk(
  "car-listing/get-make-listing",
  async (make, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/listing/brand/${make}`);
      return response?.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue({ error: error.response.data });
    }
  }
);

const ListingSlice = createSlice({
  name: "car-listing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ListingsFetch.pending, (state, action) => {
      return { ...state, status: "pending" };
    });
    builder.addCase(ListingsFetch.fulfilled, (state, action) => {
      return { ...state, status: "success", listings: action.payload };
    });
    builder.addCase(ListingsFetch.rejected, (state, action) => {
      return { ...state, status: "rejected", error: action.payload };
    });
    builder.addCase(CreateListing.pending, (state, action) => {
      return { ...state, createStatus: "pending" };
    });
    builder.addCase(CreateListing.fulfilled, (state, action) => {
      state.listings.push(action.payload);
      return { ...state, createStatus: "success" };
    });
    builder.addCase(CreateListing.rejected, (state, action) => {
      return {
        ...state,
        createStatus: "rejected",
        createError: action.payload,
      };
    });
    builder.addCase(getBrandMake.pending, (state, action) => {
      return { ...state, makeStatus: "pending" };
    });
    builder.addCase(getBrandMake.fulfilled, (state, action) => {
      return { ...state, makeStatus: "success", make: action.payload };
    });
    builder.addCase(getBrandMake.rejected, (state, action) => {
      return { ...state, makeStatus: "rejected", makeError: action.payload };
    });
  },
});

export default ListingSlice.reducer;

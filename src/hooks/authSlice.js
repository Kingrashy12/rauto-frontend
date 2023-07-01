import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./api";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  username: "",
  _id: "",
  FetcStatus: null,
  FetchError: null,
  userProfile: localStorage.getItem("user-p")
    ? JSON.parse(localStorage.getItem("user-p"))
    : "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
  followStatus: null,
  followError: null,
  editStatus: null,
  editError: null,
  deleteStatus: null,
  deleteError: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${BASE_URL}/auth/register`, {
        name: user.name,
        email: user.email,
        username: user.username,
        password: user.password,
      });
      localStorage.setItem("token", token.data);
      console.log(token.data);
      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${BASE_URL}/auth/login`, {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", token.data);
      console.log(token.data);
      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const EditUserProfile = createAsyncThunk(
  "auth/edit",
  async (user, userId, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${BASE_URL}/users/${userId}/edit`, {
        userId: user.userId,
        name: user.name,
        email: user.email,
        username: user.username,
        userProfile: user.userProfile,
      });
      return response?.data;
    } catch (error) {
      toast.error(error.response.data, { position: "top-center" });
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "auth-delete",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/users/${userId}/delete`);
      return response?.data;
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);

        return {
          ...state,
          token,
          savedItem: state.saved,
          name: user.name,
          email: user.email,
          _id: user._id,
          username: user.username,
          userProfile: user.userProfile,
          userLoaded: true,
        };
      }
    },
    logOutUser: (state, action) => {
      localStorage.removeItem("token");
      localStorage.removeItem("saved");

      return {
        ...state,
        token: "",
        name: "",
        email: "",
        username: "",
        _id: "",
        userProfile: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          username: user.username,
          userProfile: user.userProfile,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          username: user.username,
          userProfile: user.userProfile,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      toast.error(action.payload, { position: "top-center" });
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
    builder.addCase(EditUserProfile.pending, (state, action) => {
      return { ...state, editStatus: "pending" };
    });
    builder.addCase(EditUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload.userProfile;
      localStorage.setItem("user-p", JSON.stringify(state.userProfile));
      toast.success("Info Updated", { position: "top-center" });
      return {
        ...state,
        editStatus: "success",
        name: action.payload.name,
        email: action.payload.email,
        username: action.payload.username,
      };
    });
    builder.addCase(deleteAccount.pending, (state, action) => {
      toast.info("Account delect pending", { position: "top-center" });
      return { ...state, deleteStatus: "pending" };
    });
    builder.addCase(deleteAccount.fulfilled, (state, action) => {
      toast.success("Account delected", { position: "top-center" });

      localStorage.removeItem("token");
      localStorage.removeItem("saved");
      return {
        ...state,
        deleteStatus: "success",
        token: "",
        name: "",
        email: "",
        username: "",
        _id: "",
        userProfile: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
    });
    builder.addCase(deleteAccount.rejected, (state, action) => {
      toast.error(action.payload.error, { position: "top-center" });
      return {
        ...state,
        deleteError: action.payload,
        deleteStatus: "rejected",
      };
    });
  },
});

export const { loadUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;
